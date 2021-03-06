import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from 'store/features/error/errorSlice';

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

  const dispatch = useDispatch();

  const getGroups = useCallback(async () => {
    try {
      const response = await studentsAPI.get(`/groups`);
      return response.data.groups;
    } catch {
      dispatch(setErrorMessage(`Couldn't load groups... try something else.`));
    }
  }, [dispatch]);
  const getStudents = useCallback(
    async (groupID) => {
      try {
        const response = await studentsAPI.get(`/groups/${groupID}`);
        return response.data.students;
      } catch {
        dispatch(setErrorMessage(`Couldn't load students. Try something else.`));
      }
    },
    [dispatch],
  );
  const getStudentByID = useCallback(
    async (studentID) => {
      try {
        const response = await studentsAPI.get(`/students/${studentID}`);
        return response.data.student;
      } catch {
        dispatch(setErrorMessage(`Couldn't load student's data. Try something else.`));
      }
    },
    [dispatch],
  );
  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch {
      dispatch(setErrorMessage(`Couldn't search students. Try something else.`));
    }
  };

  return {
    getGroups,
    getStudents,
    getStudentByID,
    findStudents,
  };
};
