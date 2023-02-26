import { FunctionComponent } from 'react';

type Props = {
  keywordIds: string[];
};
const OtherMemories: FunctionComponent<Props> = ({ keywordIds }) => {
  return (
    <section className="detail-memories-container detail-block scroll-snap">
      <div className="title-wrapper">
        <hr />
        <h4>Other Memories.</h4>
      </div>
      <div className="keyword-wrapper">
        <div className="marquee">
          {keywordIds.map((id) => (
            <span key={id} className="keyword">
              {`Other Keyword (${id})`}
            </span>
          ))}
        </div>
        <div className="marquee marquee2">
          {keywordIds.map((id) => (
            <span key={id} className="keyword">
              {`Other Keyword (${id})`}
            </span>
          ))}
        </div>
      </div>
      <div className="keyword-wrapper">
        {keywordIds.map((id) => (
          <span key={id} className="keyword">
            {`Other Keyword (${id})`}
          </span>
        ))}
      </div>{' '}
      <div className="keyword-wrapper">
        {keywordIds.map((id) => (
          <span key={id} className="keyword">
            {`Other Keyword (${id})`}
          </span>
        ))}
      </div>
    </section>
  );
};

export default OtherMemories;
