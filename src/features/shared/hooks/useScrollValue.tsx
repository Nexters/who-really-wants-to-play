import { useEffect, useRef, useState } from 'react';

import { eventOptimization } from '../utils/eventOptimization';

export const useScrollValue = (
  activeIndex: number,
  needScrollSnap: boolean,
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (needScrollSnap) return;

    const handleScroll = (e: Event) => {
      const containerDiv = e.target as HTMLDivElement;
      setScrollValue(containerDiv.scrollTop);
    };

    const onScroll = (e: Event) => {
      const optimizedEvent = eventOptimization(() => handleScroll(e));
      optimizedEvent();
    };

    container.addEventListener('scroll', onScroll);
    return () => {
      container.removeEventListener('scroll', onScroll);
    };
  }, [activeIndex, containerRef, needScrollSnap]);

  return { scrollValue, containerRef };
};
