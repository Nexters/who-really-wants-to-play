import { FunctionComponent } from 'react';

type Props = {
  keywordIds: string[];
};
const OtherMemories: FunctionComponent<Props> = ({ keywordIds }) => {
  return (
    <div className="detail-block scroll-snap">
      <div>
        <hr />
        <h4>Other Memories.</h4>
        {/*  TODO: hover 인터랙션, 누르면 그 id 상세페이지로 */}
        {keywordIds.map((id) => (
          <div key={id}>id에 맞는 키워드</div>
        ))}
      </div>
    </div>
  );
};

export default OtherMemories;
