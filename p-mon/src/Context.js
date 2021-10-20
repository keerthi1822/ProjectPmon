import React, { createContext, useState } from "react";

export const SearchContext = createContext();

// This context provider is passed to any component requiring the context
export const SearchProvider = ({ children }) => {
  const [searchBy, setSearchBy] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchBy,
        searchText,
        setSearchBy,
        setSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
