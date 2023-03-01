import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import Cover from '~/features/detail/components/Cover';
import KeywordList from '~/features/detail/components/KeywordList';
import Description from '~/features/detail/components/Description';
import OtherMemories from '~/features/detail/components/OtherMemories';
import { data } from '~/features/dailyBook/constants';

const DetailContainer: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  const foundData = data.find((d) => d.id.toString() === id);
  if (!foundData) return <div>not found :(</div>;

  const {
    title,
    date,
    detail: { descriptionTitle, description, bgColor, imgSrcs, keywords },
  } = foundData;

  return (
    <div className="container scroll-snap-container">
      <Cover date={date} title={title} imgSrc={imgSrcs[0]} bgColor={bgColor} />
      <KeywordList bgColor={bgColor} keywords={keywords} />
      <Description
        title={descriptionTitle}
        description={description}
        imgSrcs={imgSrcs}
        bgColor={bgColor}
      />
      <OtherMemories
        keywordIds={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
      />
    </div>
  );
};

export default DetailContainer;
