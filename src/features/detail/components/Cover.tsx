import { FunctionComponent } from 'react';

type Props = {
  bgColor: string;
  date: string;
  title: string;
  imgSrc: string;
};

const Cover: FunctionComponent<Props> = ({ bgColor, date, title, imgSrc }) => {
  // TODO: 배경에 사진 흐리게 넣기
  return (
    <div
      className="detail-cover-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div className="logo">Jjin-Nolsa</div>
      <button className="close-button">
        <img src="./svg/close.svg" />
      </button>

      <img className="cover-image" src={imgSrc} alt={title} />
      <div className="contents-wrapper">
        <div className="date">{date}</div>
        <h1 className="title">{title}</h1>
        <div className="scroll-down">
          <img src="./svg/detail-scroll-down.svg" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
