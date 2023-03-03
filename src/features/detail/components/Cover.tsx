import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import Image from '~/features/shared/components/Image';
import CloseButton from '~/features/detail/components/CloseButton';
import { PAGE_NAME, PHOTO_PATH_PREFIX } from '~/features/shared/constants';
import { AppData } from '~/features/types';

type Props = AppData & {
  bgColor: string;
  date: string;
  title: string;
  imgSrc: string;
};

const Cover: FunctionComponent<Props> = ({
  refList,
  bgColor,
  date,
  title,
  imgSrc,
}) => {
  // TODO: 배경에 사진 흐리게 넣기
  return (
    <section
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.DETAIL_COVER] = ef;
      }}
      data-id={PAGE_NAME.DETAIL_COVER}
      className="detail-cover-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <Link to="/" preventScrollReset>
        <div className="logo">Jjin-Nolsa</div>
      </Link>
      <Link to="/" preventScrollReset>
        <CloseButton />
      </Link>
      <Image className="cover-image" src={imgSrc} alt={title} />
      <div className="contents-wrapper">
        <div className="date" style={{ backgroundColor: bgColor }}>
          {date}
        </div>
        <h1 className="title">{title}</h1>
        <div className="scroll-down">
          <Image
            src={`${PHOTO_PATH_PREFIX}/svg/detail-scroll-down.svg`}
            alt="스크롤 다운 이미지"
          />
        </div>
      </div>
    </section>
  );
};

export default Cover;
