import { FunctionComponent } from 'react';

import BackgroundGraphic from '~/features/landing/components/BackgroundGraphic';
import ScrollToEnter from '~/features/landing/components/ScrollToEnter';

/**
 * < onload >
 * 1. bg - 밑에서 위로 올라오기
 * 2. title - 위에서 아래로 떨어지기 & 바운스
 * 3. scroll to enter - 밑에서 위로 올라오기 & 위 - 아래로 움직이기 Loop
 */
const LandingContainer: FunctionComponent = () => {
  return (
    <div id={'landing'} className={'container'}>
      <h1 className={'title'}>Jjin-Nolsa</h1>
      <BackgroundGraphic />
      <ScrollToEnter />
    </div>
  );
};

export default LandingContainer;
