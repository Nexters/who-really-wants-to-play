import { FunctionComponent } from 'react';

import { AppData } from '../types';

import ContentContainer from './components/Container';
import { data } from './constants';

type DailyBookContainerProps = AppData;

const DailyBookContainer: FunctionComponent<DailyBookContainerProps> = ({
  refList,
  activeIndex,
}) => {
  return (
    <>
      {data.map((item, index) => (
        <ContentContainer
          key={item.customClass}
          ref={(ef) => {
            if (!ef) return;
            refList.current[index + 1] = ef;
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
      {activeIndex > 0 && (
        <>
          <img
            className="dailybook-image-cover"
            src={data[activeIndex - 1].coverImage}
            alt="cover"
            width={420}
            height={631}
          />
          <img
            className="dailybook-image-cover-second"
            src={data[activeIndex % data.length].coverImage}
            alt="second cover"
            width={370}
            height={631}
          />
          <img
            className="dailybook-image-cover-third"
            src={data[(activeIndex + 1) % data.length].coverImage}
            alt="second cover"
            width={320}
            height={631}
          />
        </>
      )}

      {/**
       * TODO:
       * 1. 다이얼 돌아가게 해야함.
       * 2. svg로 해야할까?
       * 3. active index 방어로직 대충 만들어놓음 처리 필요
       */}
      {activeIndex > 0 && (
        <div className="dailybook-date-dialog">
          {activeIndex > 1 && (
            <div className="dailybook-date-dialog-prev">
              {data[activeIndex - 2].date}
            </div>
          )}
          <div className="dailybook-date-dialog-cur">
            {data[activeIndex - 1].date}
          </div>
          {activeIndex < data.length && (
            <div className="dailybook-date-dialog-next">
              {data[activeIndex].date}
            </div>
          )}
        </div>
      )}

      {/**
       * TODO:
       * 1. 스크롤 중에는 안보이도록
       * 2. 이미지로 처리되어 있는데 에바임
       *  */}
      {activeIndex > 0 && (
        <img
          className="dailybook-scroll-down-floating"
          src="./images/scroll-down.webp"
          alt="scroll down"
          width={49}
          height={104}
        />
      )}
    </>
  );
};

export default DailyBookContainer;
