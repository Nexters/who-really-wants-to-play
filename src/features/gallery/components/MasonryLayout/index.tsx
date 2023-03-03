import { ANIMATION_DURATION } from '../../constants';
import MasonryItem from '../MasonryItem';
import { masonryHorizontalOrder } from '../../utils/masonryHorizontalOrder';
import {
  getTranslateValue,
  getAnimationDirValue,
  getAnimationDir,
} from '../../helpers';

import { ImgListWithId } from '~/types';

type Props = {
  imgList: ImgListWithId;
  gap: string;
  columnCount: number;
  animationRatio: number;
  isHorizontalLayout?: boolean;
};

const MasonryLayout = (props: Props) => {
  const { gap, imgList } = props;
  const { animationRatio, columnCount, isHorizontalLayout } = props;
  const animationPartTime = ANIMATION_DURATION / imgList.length;
  const orderedImgList: ImgListWithId = isHorizontalLayout
    ? masonryHorizontalOrder(imgList, columnCount)
    : imgList;
  const movingValue = imgList.length * 10;

  return (
    <>
      <div className="grid-container" style={{ gap, columnCount }}>
        {orderedImgList.map((img, idx) => {
          const animationDurationPerImg = animationPartTime * (idx + 1);
          const animationDir = getAnimationDir(img.id % 2);
          const dirValue = getAnimationDirValue(
            animationDir,
            movingValue,
            animationRatio,
          );

          return (
            <MasonryItem
              {...img}
              key={img.id ?? img.alt}
              animationDuration={`${animationDurationPerImg}s`}
              style={{
                transform: getTranslateValue('Y', dirValue, 'px'),
              }}
            />
          );
        })}
      </div>
      <div style={{ height: movingValue }} />
    </>
  );
};

export default MasonryLayout;
