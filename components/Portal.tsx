import { useRef, useEffect, ReactNode, useState, ReactPortal } from "react";
import { createPortal } from "react-dom";

import { usePortal } from "../context/PortalContext";

interface PortalProps {
  children: ReactNode;
}

export default function Portal(props: PortalProps): ReactPortal | null {
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<Element | null>(null);
  const { isOpen } = usePortal();

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && isOpen && ref.current
    ? createPortal(
        <div className="fixed inset-0 bg-black/[0.8] z-50">
          <div className="fle justify-center items-center h-full">
            <div className="flex min-h-screen items-center justify-center align-center w-full h-full">
              {props.children}
            </div>
          </div>
        </div>,
        ref.current
      )
    : null;
}
