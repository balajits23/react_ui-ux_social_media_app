import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

const DarkModeContextProvider = ({ children }) => {
  const [darkmode, setdarkmode] = useState(
    JSON.parse(localStorage.getItem("darkmode") || false)
  );

  const toggle = () => {
    setdarkmode(!darkmode);
  };

  useEffect(() => {
    localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return (
    <DarkModeContext.Provider value={{ darkmode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
