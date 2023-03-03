import { FunctionComponent, useRef } from 'react';
import { useParams } from 'react-router-dom';

import Cover from '~/features/detail/components/Cover';
import KeywordList from '~/features/detail/components/KeywordList';
import Description from '~/features/detail/components/Description';
import OtherMemories from '~/features/detail/components/OtherMemories';
import { data } from '~/features/dailyBook/constants';
import useScrollToTop from '~/features/shared/hooks/useScrollToTop';
import useAppContainer from '~/features/shared/hooks/useAppContainer';

const DetailContainer: FunctionComponent = () => {
  const appData = useAppContainer();

  const containerRef = useRef<HTMLDivElement>(null);
  useScrollToTop(containerRef);

  const { id } = useParams<{ id: string }>();

  const foundData = data.find((d) => d.id.toString() === id);
  if (!foundData) return <div>not found :(</div>;

  const {
    title,
    date,
    detail: { description, bgColor, imgSrcs, keywords },
  } = foundData;

  return (
    <div className="container scroll-snap-container" ref={containerRef}>
      <Cover
        {...appData}
        date={date}
        title={title}
        imgSrc={imgSrcs[0]}
        bgColor={bgColor}
      />
      <KeywordList {...appData} bgColor={bgColor} keywords={keywords} />
      <Description
        {...appData}
        title={title}
        description={description}
        imgSrcs={imgSrcs}
        bgColor={bgColor}
      />
      <OtherMemories
        {...appData}
        keywordDataList={data.filter(({ id: dataId }) => {
          return dataId.toString() !== id;
        })}
      />
    </div>
  );
};

export default DetailContainer;
