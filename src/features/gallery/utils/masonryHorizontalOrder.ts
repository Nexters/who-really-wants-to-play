import { ImgListWithId } from '~/types';

export const masonryHorizontalOrder = (
  imgList: ImgListWithId,
  cols: number,
) => {
  let curCol = 0;
  const result = [];
  while (curCol < cols) {
    for (let i = 0; i < imgList.length; i += cols) {
      const curImg = imgList[i + curCol];
      if (curImg) result.push(curImg);
    }
    curCol++;
  }
  return result;
};
