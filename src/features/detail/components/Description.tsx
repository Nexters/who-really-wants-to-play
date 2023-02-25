import { FunctionComponent } from 'react';

type Props = {
  title: string;
  description: string;
  imgSrcs: string[];
};
const Description: FunctionComponent<Props> = ({
  title,
  description,
  imgSrcs,
}) => {
  return (
    <div className="detail-block scroll-snap">
      <h2>{title}</h2>
      <p>{description}</p>
      {/*    하단 이미지 슬라이드 - 좌우*/}
      <div>
        {imgSrcs.map((src) => (
          <img src={src} />
        ))}
      </div>
    </div>
  );
};

export default Description;
