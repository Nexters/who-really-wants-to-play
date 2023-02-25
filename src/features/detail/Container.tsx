import { FunctionComponent } from 'react';

import { AppData } from '~/features/types';
import Cover from '~/features/detail/components/Cover';
import KeywordList from '~/features/detail/components/KeywordList';
import Description from '~/features/detail/components/Description';
import OtherMemories from '~/features/detail/components/OtherMemories';

type DetailContainerProps = AppData;

const DetailContainer: FunctionComponent<DetailContainerProps> = ({
  refList,
}) => {
  return (
    <>
      <Cover
        bgColor="rgb(167,188,217)"
        date="02.01"
        title="Haru Firm"
        imgSrc="./images/23.01.12.webp"
      />
      <KeywordList
        keywords={[
          'Haru Firm',
          'First Picture',
          'MZ Culture',
          'Picture Keyword 1',
          'How We Play',
        ]}
      />
      <Description
        title="First Meet"
        description={
          'We met for the first time at the orientation of the 22nd generation of\n' +
          '        Nexters. Young-hwan was absent due to work, but the others gathered\n' +
          '        together to greet each other.'
        }
        imgSrcs={[]}
      />
      <OtherMemories keywordIds={[]} />
    </>
  );
};

export default DetailContainer;
