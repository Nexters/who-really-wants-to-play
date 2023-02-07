import '~/style/index.scss';
import { ImgProps } from '~/types';
import Image from '~/features/shared/components/Image';

interface Props {
  imgList: ImgProps[];
  gap: string;
  columns?: number;
}

const MasonryLayout = (props: Props) => {
  const { gap, columns, imgList } = props;
  return (
    <div className={'grid-container'} style={{ gap: gap }}>
      {imgList.map((img) => (
        <Image {...img} key={img.id ?? img.alt} />
      ))}
    </div>
  );
};

export default MasonryLayout;
