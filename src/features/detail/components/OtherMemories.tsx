import { FunctionComponent } from 'react';
import classNames from 'classnames';

type Props = {
  keywordIds: string[];
};

const OtherMemories: FunctionComponent<Props> = ({ keywordIds }) => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
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
          {row.map((id) => (
            <span key={id} className="keyword">
              {`Other Keyword (${id})`}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default OtherMemories;
