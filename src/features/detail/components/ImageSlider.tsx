import { FunctionComponent } from 'react';

import Image from '~/features/shared/components/Image';

type Props = {
  imgSrcs: string[];
  paused: boolean;
  direction: 'up' | 'down';
  onClickImage: (src: string) => void;
};

const ImageSlider: FunctionComponent<Props> = ({
  imgSrcs,
  direction,
  paused,
  onClickImage,
}) => {
  return (
    <div className={`image-slide ${direction} ${paused ? 'pause' : ''}`}>
      {imgSrcs.map((src, idx) => (
        <Image
          key={src}
          className="image-slide-element"
          src={src}
          alt={`이미지 슬라이드 ${idx + 1}번째`}
          onClick={() => onClickImage(src)}
        />
      ))}
      {imgSrcs.length > 2 &&
        imgSrcs.map((src, idx) => (
          <Image
            key={src}
            className="image-slide-element"
            src={src}
            alt={`이미지 슬라이드 ${idx + 1}번째`}
            onClick={() => onClickImage(src)}
          />
        ))}
    </div>
  );
};

export default ImageSlider;
