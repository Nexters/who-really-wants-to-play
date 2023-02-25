import { FunctionComponent, useState } from 'react';

import CloseButton from '~/features/detail/components/CloseButton';

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
  const [selectedImg, setSelectedImg] = useState<string>('');

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
      <div className={`image-slide up ${selectedImg ? 'pause' : ''}`}>
        {imgSrcs.map((src) => (
          <img
            className="image-slide-element"
            src={src}
            onClick={() => setSelectedImg(src)}
          />
        ))}
      </div>
      <div className={`image-slide down ${selectedImg ? 'pause' : ''}`}>
        {imgSrcs.map((src) => (
          <img
            className="image-slide-element"
            src={src}
            onClick={() => setSelectedImg(src)}
          />
        ))}
      </div>
      {selectedImg && (
        <div className="modal">
          <div className="image-wrapper">
            <img src={selectedImg} alt={title} />
            <CloseButton onClick={() => setSelectedImg('')} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Description;
