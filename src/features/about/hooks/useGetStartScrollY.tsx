import { useEffect, useState } from 'react';

export const useGetStartScrollY = (aboutContainerScrollY: number) => {
  const [startIntroScrollY, setStartIntroScrollY] = useState<number>(0);
  const viewHeight = window.innerHeight;
  useEffect(() => {
    setStartIntroScrollY(aboutContainerScrollY - viewHeight);
  }, [aboutContainerScrollY]);

  return { startIntroScrollY };
};
