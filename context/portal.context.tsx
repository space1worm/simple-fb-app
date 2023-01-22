import { useState, createContext, useContext } from "react";
import { IPortalContext } from "../types/app/app.interfaces";
import { TChildren } from "../types/app/app.types";

export const PortalContext = createContext<IPortalContext>(
  {} as IPortalContext
);

export function PortalContextProvider({ children }: { children: TChildren }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const values = {
    isOpen,
    setIsOpen,
  };

  return (
    <PortalContext.Provider value={values}>
      {children}
    </PortalContext.Provider>
  );
}

export const usePortal = () => useContext(PortalContext);
