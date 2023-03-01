import { useEffect, useRef, useState } from 'react';

import { getGridRowEnd } from '../utils/getGridRowEnd';

import useDetectResize from '~/features/shared/hooks/useDetectResize';

export const useMasonryLayout = (delay: number) => {
  const [gridRowEnds, setGridRowEnds] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const windowSize = useDetectResize(delay);

  useEffect(() => {
    const handleLayout = () => {
      const gridRowEndArr: string[] = [];
      itemRefs.current.forEach((itemRef) => {
        const container = containerRef.current;
        if (!itemRef || !container) return;
        gridRowEndArr.push(getGridRowEnd(container, itemRef));
      });
      setGridRowEnds(gridRowEndArr);
    };

    handleLayout();
    return () => handleLayout();
  }, [windowSize]);

  return { containerRef, itemRefs, gridRowEnds };
};
