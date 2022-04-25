import { Input } from 'components/atoms/Input/Input';
import React, { useEffect, useMemo, useState } from 'react';
import { SearchWrapper, StyledWrapper, UserInfo } from './SearchBar.styles';
import DownShift from 'components/molecules/DownShift/DownShift';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [students, setStudents] = useState([]);
  const { findStudents } = useStudents();

  // useCallback trzeba uzyc, bo za każdym re-renderem getMatchingStudents pojawia sie od nowa, bo komponent sie rerenderuje razem z funkcją, która tworzy sie za kazdym razem

  const getMatchingStudents = useMemo(
    () =>
      debounce(async (inputValue) => {
        const { students } = await findStudents(inputValue);
        setStudents(students);
      }, 500),
    [],
  );

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
  }, [searchPhrase, getMatchingStudents]);

  const handleInputChange = (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <StyledWrapper>
      <UserInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </UserInfo>
      <SearchWrapper>
        <Input placeholder="Find student..." value={searchPhrase} onChange={handleInputChange} />
        (searchPhrase && students ? <DownShift students={students} />: null)
      </SearchWrapper>
    </StyledWrapper>
  );
};

export default SearchBar;
