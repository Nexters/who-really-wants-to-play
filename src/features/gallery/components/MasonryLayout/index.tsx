import { ANIMATION_DURATION } from '../../constants';
import MasonryItem from '../MasonryItem';
import { masonryHorizontalOrder } from '../../utils/masonryHorizontalOrder';
import { getMinusTranslateValue, getZigzagAnimationValue } from '../../helpers';

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
  const ratioNumValue = Math.floor(animationRatio / 0.02);
  const zigzagTurn = ratioNumValue % 2 === 0 ? 1 : 0;

  return (
    <div className="grid-container" style={{ gap, columnCount }}>
      {orderedImgList.map((img, idx) => {
        const animationDurationPerImg = animationPartTime * (idx + 1);
        const isAnimationTurn =
          ratioNumValue && zigzagTurn === img.id % 2 ? true : false;
        const zigzagPx = getZigzagAnimationValue(isAnimationTurn);

        return (
          <MasonryItem
            {...img}
            key={img.id ?? img.alt}
            animationDuration={`${animationDurationPerImg}s`}
            style={{
              transform: getMinusTranslateValue('Y', zigzagPx, 'px'),
            }}
          />
        );
      })}
    </div>
  );
};

export default MasonryLayout;
