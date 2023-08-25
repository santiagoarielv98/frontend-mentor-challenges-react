import React from "react";

const useObserver = (options?: IntersectionObserverInit) => {
  const [elements, setElements] = React.useState<NodeListOf<Element>>([] as unknown as NodeListOf<Element>);
  const [entries, setEntries] = React.useState<IntersectionObserverEntry[]>([]);

  const observer = React.useRef(
    new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options)
  );

  React.useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach((element) => {
        currentObserver.observe(element);
      });
    }
    return () => currentObserver.disconnect();
  }, [elements]);

  return [observer.current, setElements, entries] as const;
};

export default useObserver;
