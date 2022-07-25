import { useState, useEffect, createContext, PropsWithChildren } from "react";
import FewDestinations from "../utils/list";
import { FormProps } from "../models/formValidation";

export const dataContext = createContext({
  list: FewDestinations,
  destinations: FewDestinations,
  setDestinations: (props: FormProps[]) => {},
});
export const DestinationContext = ({ children }: PropsWithChildren) => {
  const [destinations, setDestinations] = useState<FormProps[]>(
    // check data retrieve value in localstorage
    FewDestinations
  );

  let list = JSON.parse(localStorage.getItem("items") as string);
  if (list === null) {
    list = destinations;
  }

  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify(destinations));
    }
  }, [destinations]);

  return (
    <dataContext.Provider value={{ destinations, list, setDestinations }}>
      {children}
    </dataContext.Provider>
  );
};
