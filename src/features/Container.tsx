import { FunctionComponent, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import { PAGE_NAME } from './constants';
import useAppContainer from './hooks/useAppContainer';
import LandingContainer from './landing/Container';
import DailyBookContainer from './dailyBook/Container';
import BottomContainer from './bottom/Container';

const AppContainer: FunctionComponent = () => {
  const appData = useAppContainer();
  const activeIndex = appData.activeIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    if (activeIndex !== PAGE_NAME.BOTTOM) return;

    const handleScroll = (e: Event) => {
      const containerDiv = e.target as HTMLDivElement;
      setScrollValue(containerDiv.scrollTop);
    };

    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className={classnames('container', {
        'scroll-snap-container': activeIndex !== PAGE_NAME.BOTTOM,
      })}
    >
      <LandingContainer {...appData} />
      <DailyBookContainer {...appData} />
      <BottomContainer {...appData} scrollValue={scrollValue} />
    </div>
  );
};

export default AppContainer;
