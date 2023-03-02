import { FunctionComponent } from 'react';

type Props = { bgColor: string; keywords: string[] };
const KeywordList: FunctionComponent<Props> = ({ bgColor, keywords }) => {
  return (
    <section
      className="detail-keyword-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div className="keywords-wrapper">
        {keywords.map((keyword) => (
          <div className="keyword" key={keyword}>
            {keyword}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeywordList;