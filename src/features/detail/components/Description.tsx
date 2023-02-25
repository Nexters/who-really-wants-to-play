import { FunctionComponent } from 'react';

type Props = {
  title: string;
  description: string;
  imgSrcs: string[];
  bgColor: string;
};
const Description: FunctionComponent<Props> = ({
  title,
  description,
  imgSrcs,
  bgColor,
}) => {
  return (
    <section
      className="detail-description-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div className="description-wrapper">
        <h2 className="title">{title}</h2>
        <hr className="short-line" />
        <p className="description">{description}</p>
      </div>
      {/*    하단 이미지 슬라이드 - 좌우*/}
      <div className="image-slide up">
        {imgSrcs.map((src) => (
          <img className="image-slide-element" src={src} />
        ))}
      </div>
      <div className="image-slide down">
        {imgSrcs.map((src) => (
          <img className="image-slide-element" src={src} />
        ))}
      </div>
    </section>
  );
};

export default Description;
