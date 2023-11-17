// GetLoggedInFromLocalStorage.js
export function GetLoggedInUserFromLocalStorage() {
    const storedData = localStorage.getItem("loggedInUser");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  }