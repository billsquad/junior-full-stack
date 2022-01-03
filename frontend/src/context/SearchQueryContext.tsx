import React, { useState, createContext, ReactNode } from 'react';
import { SearchQueryContextProps } from './interface';

const initialState = {
  searchQuery: '',
};

const SearchQueryContext =
  createContext<Partial<SearchQueryContextProps>>(initialState);

const SearchQueryProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);

  return (
    <SearchQueryContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchQueryContext.Provider>
  );
};

export { SearchQueryProvider, SearchQueryContext };
