import { useEffect, useRef, useState } from 'react';

import useDetectResize from '~/features/shared/hooks/useDetectResize';

export const useTitleAnimation = (delay: number) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [overflowedWidth, setOverflowedWidth] = useState<number>(0);
  const windowSize = useDetectResize(delay);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    setOverflowedWidth(title.scrollWidth - title.offsetWidth ?? 0);
  }, [windowSize]);

  return { titleRef, overflowedWidth };
};
