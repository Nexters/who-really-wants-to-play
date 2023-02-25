import { FunctionComponent } from 'react';

type Props = {
  description: string;
};

const DetailV3: FunctionComponent<Props> = ({ description }) => {
  return (
    <div className="detail-block scroll-snap">
      {/*  좌, 우 이미지 슬라이드 - 상하*/}
      <p>{description}</p>
    </div>
  );
};

export default DetailV3;
