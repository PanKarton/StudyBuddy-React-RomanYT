import axios from 'axios';
import { useCallback } from 'react';
import { useError } from './useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('token');

    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

export const useStudents = () => {
  // Bez useCallback komponent renderując się wchodziłby do tego pliczku i za każdym razem
  // zwracał nową funkcję, co by odpalało useEffect i tak w koło macieju

  const { dispatchError } = useError();

  const getGroups = useCallback(async () => {
    try {
      const response = await studentsAPI.get(`/groups`);
      return response.data.groups;
    } catch {
      dispatchError(`Couldn't load groups... try something else.`);
    }
  }, [dispatchError]);
  const getStudents = useCallback(
    async (groupID) => {
      try {
        const response = await studentsAPI.get(`/groups/${groupID}`);
        return response.data.students;
      } catch {
        dispatchError(`Couldn't load students. Try something else.`);
      }
    },
    [dispatchError],
  );
  const getStudentByID = useCallback(
    async (studentID) => {
      try {
        const response = await studentsAPI.get(`/students/${studentID}`);
        return response.data.student;
      } catch {
        dispatchError(`Couldn't load student's data. Try something else.`);
      }
    },
    [dispatchError],
  );
  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch {
      dispatchError(`Couldn't search students. Try something else.`);
    }
  };

  return {
    getGroups,
    getStudents,
    getStudentByID,
    findStudents,
  };
};
