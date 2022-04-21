import { Input } from 'components/atoms/Input/Input';
import React, { useEffect, useState } from 'react';
import { SearchWrapper, StyledWrapper, UserInfo } from './SearchBar.styles';
import DownShift from 'components/molecules/DownShift/DownShift';
import axios from 'axios';

const SearchBar = (props) => {
  const [searchValue, setSearchVaue] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`/students/name/${searchValue}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [searchValue]);

  const handleInputChange = (e) => {
    setSearchVaue(e.target.value);
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
        <Input placeholder="Find student..." value={searchValue} onChange={handleInputChange} />
        <DownShift students={students} />
      </SearchWrapper>
    </StyledWrapper>
  );
};

export default SearchBar;
