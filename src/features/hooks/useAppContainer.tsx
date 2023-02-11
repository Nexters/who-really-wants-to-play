import { useEffect, useRef, useState } from 'react';

import { AppData, RefList } from '../types';

const useAppContainer = (): AppData => {
  const refList = useRef<RefList>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!refList.current) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLDivElement;
          const parsedId = Number(target.dataset.id);
          if (isNaN(parsedId)) return;
          if (entry.isIntersecting) {
            setActiveIndex(parsedId);
          }
        });
      },
      { rootMargin: '-50% 0px' },
    );
    refList.current.forEach((ref) => {
      if (!ref) return;
      io.observe(ref);
    });
    return () => {
      refList.current.forEach((ref) => {
        if (!ref) return;
        io.unobserve(ref);
      });
    };
  }, [refList]);

  return { refList, activeIndex };
};

export default useAppContainer;
