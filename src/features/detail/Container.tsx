import { FunctionComponent } from 'react';

import { AppData } from '~/features/types';
import Cover from '~/features/detail/components/Cover';
import KeywordList from '~/features/detail/components/KeywordList';
import DetailV1 from '~/features/detail/components/DetailV1';
import DetailV2 from '~/features/detail/components/DetailV2';
import Members from '~/features/detail/components/Members';
import DetailV3 from '~/features/detail/components/DetailV3';

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
      <DetailV1
        title="First Meet"
        description={
          'We met for the first time at the orientation of the 22nd generation of\n' +
          '        Nexters. Young-hwan was absent due to work, but the others gathered\n' +
          '        together to greet each other.'
        }
      />
      <DetailV2
        title="A word ,can represent a day."
        description={
          'We met for the first time at the orientation of the 22nd generation of\n' +
          '        Nexters. Young-hwan was absent due to work, but the others gathered\n' +
          '        together to greet each other.'
        }
      />
      <DetailV3
        description={
          'A word ,can ' +
          '        represent a day. ' +
          '        A word ,can represent a day. ' +
          '        represent a day. ' +
          '        a day. ' +
          '        first-picture ' +
          '        picture keyword 1'
        }
      />
      <Members />
    </>
  );
};

export default DetailContainer;
