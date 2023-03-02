import { useEffect, useState } from 'react';

export const useGalleryScrollRatio = (
  galleryRef: HTMLElement,
  scrollY: number,
) => {
  const [animationRatio, setAnimationRatio] = useState(0);

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
