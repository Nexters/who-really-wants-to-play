import { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { DailyBookData } from '~/features/dailyBook/types';

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
        <div
          className={classNames('keyword-wrapper', idx % 2 === 1 && 'reverse')}
          key={idx}
        >
          {row.map(({ id, title }: DailyBookData) => (
            <Link key={id} to={`/detail/${id}`}>
              <span className="keyword">{title}</span>
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
};

export default OtherMemories;
