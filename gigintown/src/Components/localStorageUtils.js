export const saveResultsToLocalStorage = (results) => {
    localStorage.setItem("searchResults", JSON.stringify(results));
  };
  
  export const loadResultsFromLocalStorage = () => {
    const storedResults = localStorage.getItem("searchResults");
    return storedResults ? JSON.parse(storedResults) : null;
  };
  
  export const clearResultsFromLocalStorage = () => {
    localStorage.removeItem("searchResults");
  };