import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Image from '~/features/shared/components/Image';
import CloseButton from '~/features/detail/components/CloseButton';
import { PAGE_NAME, PHOTO_PATH_PREFIX } from '~/features/shared/constants';
import { AppData } from '~/features/types';
import { fetchImage } from '~/features/landing/helper';
import { getImageUrlWithCdn } from '~/features/shared/utils/url';

type Props = AppData & {
  bgColor: string;
  date: string;
  title: string;
  imgSrc: string;
};

const Cover: FunctionComponent<Props> = ({
  activeIndex,
  refList,
  bgColor,
  date,
  title,
  imgSrc,
}) => {
  const [scale, setScale] = useState(1);

  const calcScale = async () => {
    const image = await fetchImage(getImageUrlWithCdn(imgSrc), { q: 1 });
    const w = image.width;
    const h = image.height;
    const scaleX = window.innerWidth / w;
    const scaleY = (window.innerHeight / h) * 2;
    const scale = w * scaleY < window.innerWidth ? scaleX : scaleY;
    setScale(scale);
  };

  useEffect(() => {
    calcScale();
  }, [calcScale]);

  // TODO: 배경에 사진 흐리게 넣기
  return (
    <section
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.DETAIL_COVER] = ef;
      }}
      data-id={PAGE_NAME.DETAIL_COVER}
      className="detail-cover-container detail-block scroll-snap"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Link to="/" preventScrollReset>
        <div className="logo">Jjin-Nolsa</div>
      </Link>
      <Link to="/" preventScrollReset>
        <CloseButton />
      </Link>
      <Image
        className={classNames('cover-image', {
          blur: activeIndex === PAGE_NAME.DETAIL_COVER,
          show: activeIndex === PAGE_NAME.DETAIL_KEYWORD,
          hidden: ![PAGE_NAME.DETAIL_COVER, PAGE_NAME.DETAIL_KEYWORD].includes(
            activeIndex,
          ),
        })}
        src={imgSrc}
        alt={title}
        style={{ transform: ` scale(${scale}) ` }}
      />
      <div className="contents-wrapper">
        <div className="date" style={{ backgroundColor: bgColor }}>
          {date}
        </div>
        <h1 className="title">{title}</h1>
        <div className="scroll-down">
          <Image
            src={`${PHOTO_PATH_PREFIX}/svg/detail-scroll-down.svg`}
            alt="스크롤 다운 이미지"
            width={52.5}
            height={69.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Cover;
