import { MutableRefObject, useContext, useEffect, useRef } from 'react';

import { YScrollContext } from '~/features/shared/components/Context/YScrollContext';

const useScrollMemory = (containerRef: MutableRefObject<Element | null>) => {
  const containerScrollValue = useRef(0);
  const { yScroll, setYScroll } = useContext(YScrollContext);

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    if (!containerRefCurrent) return;
    containerScrollValue.current = containerRefCurrent.scrollTop || 0;
  }, [containerRef, containerRef.current?.scrollTop]);

  useEffect(() => {
    if (yScroll > 0) {
      containerRef.current?.scrollTo(0, yScroll);
    }
    return () => {
      setYScroll?.(() => containerScrollValue.current || 0);
    };
  }, []);

  return { yScroll };
};

export default useScrollMemory;
