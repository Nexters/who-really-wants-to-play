import { FunctionComponent } from 'react';

import { AppData } from '../types';
import { PAGE_NAME } from '../constants';

import GalleryContainer from './gallery/Container';
import AboutContainer from './about/Container';

type BottomContainerProps = AppData;

const BottomContainer: FunctionComponent<BottomContainerProps> = ({
  refList,
  scrollValue,
}) => {
  return (
    <div
      className="scroll-snap"
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.BOTTOM] = ef;
      }}
      data-id={PAGE_NAME.BOTTOM}
    >
      <GalleryContainer />
      <AboutContainer scrollValue={scrollValue} />
    </div>
  );
};

export default BottomContainer;
