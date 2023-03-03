import { FunctionComponent } from 'react';

import { DailyBookData } from '~/features/dailyBook/types';
import KeywordSliderRow from '~/features/detail/components/KeywordSliderRow';
import { AppData } from '~/features/types';
import { PAGE_NAME } from '~/features/shared/constants';

type Props = AppData & {
  keywordDataList: DailyBookData[];
};

const OtherMemories: FunctionComponent<Props> = ({
  refList,
  keywordDataList,
}) => {
  const rows = [
    keywordDataList.slice(0, 3),
    keywordDataList.slice(3, 6),
    keywordDataList.slice(6, 9),
  ];
  return (
    <section
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.DETAIL_MEMORIES] = ef;
      }}
      data-id={PAGE_NAME.DETAIL_MEMORIES}
      className="detail-memories-container detail-block scroll-snap"
    >
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
