import { FunctionComponent } from 'react';

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
      {imgSrcs.map((src) => (
        <img
          key={src}
          className="image-slide-element"
          src={src}
          onClick={() => onClickImage(src)}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
