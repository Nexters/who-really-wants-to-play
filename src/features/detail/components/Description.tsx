import { FunctionComponent, useState } from 'react';

import ImageSlider from '~/features/detail/components/ImageSlider';
import ImageModal from '~/features/detail/components/ImageModal';

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
      <ImageSlider
        imgSrcs={imgSrcs}
        paused={!!selectedImg}
        direction="up"
        onClickImage={setSelectedImg}
      />
      <ImageSlider
        imgSrcs={imgSrcs}
        paused={!!selectedImg}
        direction="down"
        onClickImage={setSelectedImg}
      />
      <ImageModal
        show={!!selectedImg}
        src={selectedImg}
        alt={title}
        onClose={() => setSelectedImg('')}
      />
    </section>
  );
};

export default Description;
