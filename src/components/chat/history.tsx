import React, { useRef, useEffect } from "react";

export const History = ({ children }: any) => {
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div ref={historyRef} className={"h-[calc(100dvh-9rem)] desktop:h-[calc(100dvh-11rem)] flex flex-col-reverse gap-4 p-4 desktop:p-0 desktop:my-4 overflow-y-auto scroll-smooth scrollbar"}>
      <div className="flex-col-reverse">{children}</div>
    </div>
  );
};
