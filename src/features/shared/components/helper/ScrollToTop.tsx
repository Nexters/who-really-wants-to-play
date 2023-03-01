import { MutableRefObject, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = (containerRef: MutableRefObject<Element | null>) => {
  const { pathname } = useLocation();

  useEffect(() => {
    containerRef?.current?.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default useScrollToTop;
