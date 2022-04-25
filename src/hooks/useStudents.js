import axios from 'axios';
import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const response = await axios.get(`/groups`);
      return response.data.groups;
    } catch (err) {
      console.log(err);
    }
  }, []);
  const getStudents = useCallback(async (groupID) => {
    try {
      const response = await axios.get(`/students/${groupID}`);
      return response.data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);
  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getGroups,
    getStudents,
    findStudents,
  };
};