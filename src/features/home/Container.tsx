import { FunctionComponent, useEffect, useRef, useState } from 'react';

import ContentContainer from './components/Container';
import { data } from './constants';

const HomeContainer: FunctionComponent = () => {
  const refList = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!refList.current) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const parsedId = Number(target.dataset.id);
            if (isNaN(parsedId)) return;
            setActiveIndex(parsedId);
          }
        });
      },
      { rootMargin: '-50% 0px' },
    );
    refList.current.forEach((ref) => {
      if (!ref) return;
      io.observe(ref);
    });
    return () => {
      refList.current.forEach((ref) => {
        if (!ref) return;
        io.unobserve(ref);
      });
    };
  }, [refList]);

  return (
    <div className="home-container scroll-snap-container">
      {data.map((item, index) => (
        <ContentContainer
          key={item.customClass}
          ref={(ef) => (refList.current[index] = ef)}
          {...item}
        />
      ))}

      {/**
       * TODO:
       * 1. 컴포넌트화
       * 2. 애니메이션
       * 3. hover 필터 css가 아닌 돔으로 처리
       */}
      <img
        className="home-image-cover"
        src={data[activeIndex].coverImage}
        alt="cover"
        width={420}
        height={631}
      />
      <img
        className="home-image-cover-second"
        src={data[(activeIndex + 1) % data.length].coverImage}
        alt="second cover"
        width={370}
        height={631}
      />
      <img
        className="home-image-cover-third"
        src={data[(activeIndex + 2) % data.length].coverImage}
        alt="second cover"
        width={320}
        height={631}
      />

      {/**
       * TODO:
       * 1. 다이얼 돌아가게 해야함.
       * 2. svg로 해야할까?
       * 3. active index 방어로직 대충 만들어놓음 처리 필요
       */}
      <div className="home-date-dialog">
        {activeIndex > 0 && (
          <div className="home-date-dialog-prev">
            {data[activeIndex - 1].date}
          </div>
        )}
        <div className="home-date-dialog-cur">{data[activeIndex].date}</div>
        {activeIndex + 1 < data.length && (
          <div className="home-date-dialog-next">
            {data[activeIndex + 1].date}
          </div>
        )}
      </div>

      {/**
       * TODO:
       * 1. 스크롤 중에는 안보이도록
       * 2. 이미지로 처리되어 있는데 에바임
       *  */}
      <img
        className="home-scroll-down-floating"
        src={'./images/scroll-down.webp'}
        alt="scroll down"
        width={49}
        height={104}
      />
    </div>
  );
};

export default HomeContainer;
