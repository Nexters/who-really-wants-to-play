import { FunctionComponent } from 'react';

type Props = {
  bgColor: string;
  date: string;
  title: string;
  imgSrc: string;
};

const Cover: FunctionComponent<Props> = ({ bgColor, date, title, imgSrc }) => {
  return (
    <div
      className="detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div>{date}</div>
      <h1>{title}</h1>
      <img src={imgSrc} alt={title} />
    </div>
  );
};

export default Cover;
