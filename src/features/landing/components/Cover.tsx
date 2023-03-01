import { FunctionComponent } from 'react';

import ScrollToEnter from '~/features/landing/components/ScrollToEnter';
import { CIRCLE_COLORS } from '~/features/landing/constants';

const Cover: FunctionComponent = () => {
  return (
    <div className="landing-cover-container">
      <div className="logo">Jjin Nolsa</div>
      <div className="cover-title">
        Gallery of our memories
        <br />
        that we met at Nexter 22nd
        <br />
        jjinn-nolsa
      </div>
      <div className="circle-wrapper">
        {CIRCLE_COLORS.map((color) => (
          <div
            key={color}
            className="circle"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <ScrollToEnter />
    </div>
  );
};

export default Cover;