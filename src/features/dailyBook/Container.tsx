import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { PAGE_NAME } from '../shared/constants';
import ScrollToEnter from '../landing/components/ScrollToEnter';
import Floating from '../shared/components/Floating';
import { AppData } from '../types';
import Image from '../shared/components/Image';

import ContentContainer from './components/Container';
import DateDial from './components/DateDial';
import { data, LANDING_INDEX_COUNT } from './constants';

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
          {...item}
        />
      ))}

      {/**
       * TODO:
       * 1. 컴포넌트화
       * 2. 애니메이션
       * 3. hover 필터 css가 아닌 돔으로 처리
       */}
      {isDailyBook && (
        <>
          <Link to={`/detail/${activeIndex - 1}`} preventScrollReset>
            <Image
              className="dailybook-image-cover"
              src={data[activeIndex - 1].coverImage}
              alt="cover"
              width={420}
              height={631}
            />
          </Link>
          <Image
            className="dailybook-image-cover-second"
            src={data[activeIndex % data.length].coverImage}
            alt="second cover"
            width={370}
            height={631}
          />
          <Image
            className="dailybook-image-cover-third"
            src={data[(activeIndex + 1) % data.length].coverImage}
            alt="second cover"
            width={320}
            height={631}
          />
        </>
      )}

      {isDailyBook && <DateDial dailyBookIndex={dailyBookIndex} />}
      {isDailyBook && (
        <Floating>
          <ScrollToEnter />
        </Floating>
      )}
    </>
  );
};

export default DailyBookContainer;
