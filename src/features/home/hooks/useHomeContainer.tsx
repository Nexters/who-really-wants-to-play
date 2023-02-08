import { useEffect, useRef, useState } from 'react';

const useHomeContainer = () => {
  const refList = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!refList.current) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const parsedId = Number(target.dataset.id);
            if (isNaN(parsedId)) return;
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

export default useHomeContainer;
