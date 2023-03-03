import { FunctionComponent } from 'react';

import { PAGE_NAME } from '../shared/constants';
import ScrollToEnter from '../landing/components/ScrollToEnter';
import Floating from '../shared/components/Floating';
import { AppData } from '../types';

import ContentContainer from './components/Container';
import DateDial from './components/DateDial';
import { data, LANDING_INDEX_COUNT } from './constants';
import DailyBookCoverImage from './components/CoverImage';

type DailyBookContainerProps = AppData;

const DailyBookContainer: FunctionComponent<DailyBookContainerProps> = ({
  refList,
  activeIndex,
}) => {
  const { LANDING, DAILY_BOOK, GALLERY } = PAGE_NAME;
  const isDailyBook = activeIndex > LANDING && activeIndex < GALLERY;
  const dailyBookIndex = activeIndex - LANDING_INDEX_COUNT;

  return (
    <>
      {data.map((item, index) => (
        <ContentContainer
          key={item.id}
          ref={(ef) => {
            if (!ef) return;
            const targetIndex = DAILY_BOOK[index];
            refList.current[targetIndex] = ef;
          }}
          active={dailyBookIndex === index}
          {...item}
        />
      ))}
      {isDailyBook && (
        <>
          <DailyBookCoverImage dailyBookIndex={dailyBookIndex} />
          <DateDial dailyBookIndex={dailyBookIndex} />
          <Floating>
            <ScrollToEnter />
          </Floating>
        </>
      )}
    </>
  );
};

export default DailyBookContainer;
