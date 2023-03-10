import { useEffect, useRef, useState } from 'react';

import { throttle } from '../utils/throttle';

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

    container.addEventListener('scroll', throttle(handleScroll, 100));
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, containerRef, needScrollSnap]);

  return { scrollValue, containerRef };
};
