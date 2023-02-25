import { FunctionComponent } from 'react';

type Props = {
  title: string;
  description: string;
};
const DetailV1: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div className="detail-block scroll-snap">
      <h2>{title}</h2>
      <p>{description}</p>
      {/*    하단 이미지 슬라이드 - 좌우*/}
    </div>
  );
};

export default DetailV1;
