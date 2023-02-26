import { FunctionComponent } from 'react';

import CloseButton from '~/features/detail/components/CloseButton';

type Props = {
  bgColor: string;
  date: string;
  title: string;
  imgSrc: string;
};

const Cover: FunctionComponent<Props> = ({ bgColor, date, title, imgSrc }) => {
  // TODO: 배경에 사진 흐리게 넣기
  return (
    <section
      className="detail-cover-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div className="logo">Jjin-Nolsa</div>
      <CloseButton onClick={() => console.log('close')} />
      <img className="cover-image" src={imgSrc} alt={title} />
      <div className="contents-wrapper">
        <div className="date" style={{ backgroundColor: bgColor }}>
          {date}
        </div>
        <h1 className="title">{title}</h1>
        <div className="scroll-down">
          <img src="./svg/detail-scroll-down.svg" />
        </div>
      </div>
    </section>
  );
};

export default Cover;
