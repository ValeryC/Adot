import { useState, useEffect, createContext, PropsWithChildren } from "react";
import FewDestinations from "../utils/list";
import { FormProps } from "../models/formValidation";

export const dataContext = createContext({
  destinations: FewDestinations,
  setDestinations: (props: FormProps[]) => {},
});
export const DestinationContext = ({ children }: PropsWithChildren) => {
  const [destinations, setDestinations] = useState<FormProps[]>(
    // check data retrieve value in localstorage
    FewDestinations
  );
  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify(destinations));
    }
  }, [destinations]);

  return (
    <dataContext.Provider value={{ destinations, setDestinations }}>
      {children}
    </dataContext.Provider>
  );
};
