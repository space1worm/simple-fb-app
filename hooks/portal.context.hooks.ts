import { useContext } from "react";
import { PortalContext } from "../context/portal.context";

export const usePortal = () => useContext(PortalContext);
