import { useState, createContext, useContext } from "react";

import PostBox from "../components/PostBox";

type Children = React.ReactNode | React.ReactNode[];

interface IPortalContext {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

const PortalContext = createContext<IPortalContext>({} as IPortalContext);

export const usePortal = () => useContext(PortalContext);

export function PortalContextProvider({ children }: { children: Children }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const values = {
    isOpen,
    setIsOpen,
  };

  return (
    <PortalContext.Provider value={values}>{children}</PortalContext.Provider>
  );
}
