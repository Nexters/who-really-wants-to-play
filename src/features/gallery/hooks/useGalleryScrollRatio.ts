import { RefObject, useEffect, useState } from 'react';

import { throttle } from '~/features/shared/utils/throttle';

export const useGalleryScrollRatio = (
  containerRef: RefObject<HTMLDivElement>,
  galleryRef: HTMLElement,
) => {
  const [scrollY, setScrollY] = useState(0);
  const [animationRatio, setAnimationRatio] = useState(0);

  useEffect(() => {
    const scrollSnapContainer = containerRef.current;
    if (!scrollSnapContainer) return;

    const handleScroll = (e: Event) => {
      const containerDiv = e.target as HTMLDivElement;
      setScrollY(containerDiv.scrollTop);
    };
    scrollSnapContainer.addEventListener('scroll', throttle(handleScroll, 100));
    return () => {
      scrollSnapContainer.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  useEffect(() => {
    if (!galleryRef) return;
    const galleryAbsoluteTop = galleryRef?.offsetTop;
    const galleryMovedDist = scrollY - galleryAbsoluteTop;
    const galleryHeight = galleryRef?.clientHeight;
    const scrollbarHeight = window.innerHeight;
    const heightWithScrollbarRemoved = galleryHeight - scrollbarHeight;
    const galleryMovedScrollRatio =
      galleryMovedDist / heightWithScrollbarRemoved;
    setAnimationRatio(galleryMovedScrollRatio);
  }, [galleryRef, scrollY]);

  return animationRatio > 0 ? animationRatio : 0;
};
