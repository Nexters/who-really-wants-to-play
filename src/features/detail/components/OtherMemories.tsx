import { FunctionComponent } from 'react';

import { DailyBookData } from '~/features/dailyBook/types';
import KeywordSliderRow from '~/features/detail/components/KeywordSliderRow';

type Props = {
  keywordDataList: DailyBookData[];
};

const OtherMemories: FunctionComponent<Props> = ({ keywordDataList }) => {
  const rows = [
    keywordDataList.slice(0, 3),
    keywordDataList.slice(3, 6),
    keywordDataList.slice(6, 9),
  ];
  return (
    <section className="detail-memories-container detail-block scroll-snap">
      <div className="title-wrapper">
        <hr />
        <h4>Other Memories.</h4>
      </div>
      {rows.map((row, idx) => (
        <KeywordSliderRow row={row} key={idx} reverse={idx % 2 === 0} />
      ))}
    </section>
  );
};

export default OtherMemories;
