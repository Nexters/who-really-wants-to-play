import { FunctionComponent } from 'react';

import { AppData } from '~/features/types';
import Cover from '~/features/detail/components/Cover';
import KeywordList from '~/features/detail/components/KeywordList';
import Description from '~/features/detail/components/Description';
import OtherMemories from '~/features/detail/components/OtherMemories';
import { data } from '~/features/detail/constants';
import { DetailData } from '~/features/detail/types';

type DetailContainerProps = AppData;

const DetailContainer: FunctionComponent<DetailContainerProps> = ({
  refList,
}) => {
  const {
    coverTitle,
    descriptionTitle,
    description,
    bgColor,
    date,
    imgSrcs,
    keywords,
  }: DetailData = data.get('0')!;

  return (
    <>
      <Cover
        bgColor={bgColor}
        date={date}
        title={coverTitle}
        imgSrc={imgSrcs[0]}
      />
      <KeywordList bgColor={bgColor} keywords={keywords} />
      <Description
        title={descriptionTitle}
        description={description}
        imgSrcs={imgSrcs}
      />
      <OtherMemories keywordIds={[]} />
    </>
  );
};

export default DetailContainer;
