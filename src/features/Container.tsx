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

  const notBottomPage = activeIndex !== PAGE_NAME.BOTTOM;

  useEffect(() => {
    if (!containerRef.current) return;
    if (notBottomPage) return;

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
        'scroll-snap-container': notBottomPage,
      })}
    >
      <LandingContainer {...appData} />
      <DailyBookContainer {...appData} />
      <BottomContainer {...appData} scrollValue={scrollValue} />
    </div>
  );
};

export default AppContainer;
