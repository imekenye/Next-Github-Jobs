import React from 'react';
import { SearchWrapper } from './Search.styled';
import { FiBriefcase } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const Search = () => {
  return (
    <SearchWrapper>
      <div className="search">
        <IconContext.Provider value={{ size: 20, className: 'briefcase' }}>
          <FiBriefcase />
        </IconContext.Provider>
        <input
          type="text"
          placeholder="Title,companies,expertise or benefits"
        />
        <button>Search</button>
      </div>
    </SearchWrapper>
  );
};

export default Search;
