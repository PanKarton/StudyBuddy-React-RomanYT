import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import { SearchResults, SearchWrapper, StyledWrapper, UserCell, UserInfo } from './SearchBar.styles';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const itemToString = (item) => (item ? item.name : '');

  // useCallback trzeba uzyc, bo za każdym re-renderem getMatchingStudents pojawia sie od nowa, bo komponent sie rerenderuje razem z funkcją, która tworzy sie za kazdym razem
  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    itemToString,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <StyledWrapper>
      <UserInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </UserInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input placeholder="Find student..." name="Search" id="Search" {...getInputProps()} />
        <SearchResults {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <UserCell key={item.id} {...getItemProps({ item, index })} isHighlighted={highlightedIndex === index}>
                {item.name}
              </UserCell>
            ))}
        </SearchResults>
      </SearchWrapper>
    </StyledWrapper>
  );
};

export default SearchBar;
