import { FunctionComponent } from 'react';

type Props = {
  title: string;
  description: string;
};
const DetailV2: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div className="detail-block scroll-snap">
      {/*   좌측 이미지 슬라이드 - 상하*/}
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default DetailV2;
