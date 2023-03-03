import { FunctionComponent, useState } from 'react';

import ImageSlider from '~/features/detail/components/ImageSlider';
import ImageModal from '~/features/detail/components/ImageModal';
import { AppData } from '~/features/types';
import { PAGE_NAME } from '~/features/shared/constants';

type Props = AppData & {
  title: string;
  description: string;
  imgSrcs: string[];
  bgColor: string;
};
const Description: FunctionComponent<Props> = ({
  refList,
  title,
  description,
  imgSrcs,
  bgColor,
}) => {
  const [selectedImg, setSelectedImg] = useState<string>('');

  return (
    <section
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.DETAIL_DESCRIPTION] = ef;
      }}
      data-id={PAGE_NAME.DETAIL_DESCRIPTION}
      className="detail-description-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div className="description-wrapper">
        <h2 className="title">{title}</h2>
        <hr className="short-line" />
        <p className="description">{description}</p>
      </div>
      {imgSrcs.length > 2 ? (
        <>
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
        </>
      ) : (
        <div className="image-wrapper">
          <ImageSlider
            imgSrcs={imgSrcs}
            paused={!!selectedImg}
            direction="down"
            onClickImage={setSelectedImg}
          />
        </div>
      )}
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
