import { FunctionComponent } from 'react';

import BackgroundGraphicSvg from '~/features/landing/components/svg/BackgroundGraphicSvg';
import ScrollToEnter from '~/features/landing/components/ScrollToEnter';

/**
 * < onload >
 * 1. bg - 밑에서 위로 올라오기
 * 2. title - 위에서 아래로 떨어지기 & 바운스
 * 3. scroll to enter - 밑에서 위로 올라오기 & 위 - 아래로 움직이기 Loop
 */
const LandingContainer: FunctionComponent = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Jjin-Nolsa</h1>
      <BackgroundGraphicSvg />
      <ScrollToEnter />
    </div>
  );
};

export default LandingContainer;
