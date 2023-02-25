import { FunctionComponent } from 'react';

type Props = { keywords: string[] };
const KeywordList: FunctionComponent<Props> = ({ keywords }) => {
  return (
    <div className="detail-block scroll-snap">
      {keywords.map((keyword) => (
        <p>{keyword}</p>
      ))}
    </div>
  );
};

export default KeywordList;
