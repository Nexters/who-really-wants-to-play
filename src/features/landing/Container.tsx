import { FunctionComponent, useState } from 'react';

import BackgroundGraphicSvg from '~/features/landing/components/svg/BackgroundGraphicSvg';
import ScrollToEnter from '~/features/landing/components/ScrollToEnter';
import ExpandableCircle from '~/features/landing/components/ExpandableCircle';

const LandingContainer: FunctionComponent = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="landing-container" onClick={() => setActive(true)}>
      <BackgroundGraphicSvg />
      <h1 className="landing-title">Jjin-Nolsa</h1>
      <ScrollToEnter />
      <ExpandableCircle expand={active} />
    </div>
  );
};

export default LandingContainer;
