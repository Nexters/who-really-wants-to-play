import { useEffect } from 'react';

import useDetectResize from '~/features/shared/hooks/useDetectResize';

export const useMasonryLayout = (handleLayout: () => void) => {
  const windowSize = useDetectResize(100);
  useEffect(() => {
    handleLayout();
    return () => handleLayout();
  }, [handleLayout, windowSize]);
};
