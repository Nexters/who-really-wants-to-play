import '~/style/index.scss';
import { ImgProps } from '~/types';

const Image = (props: ImgProps) => {
  const { src, alt, width, height, className } = props;
  return <img {...{ className, src, alt, width, height }} />;
};

export default Image;
