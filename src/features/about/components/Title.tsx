import { FunctionComponent } from 'react';

import { TITLE } from '../constants';
import { IntroInfoValues } from '../types';

const TitleContainer: FunctionComponent<IntroInfoValues> = ({
  titleOpacity,
  titleLetterSpacing,
}) => {
  return (
    <div
      className="about-title-box"
      style={{
        opacity: `${titleOpacity}`,
      }}
    >
      <div
        className="about-title"
        style={{
          letterSpacing: `${titleLetterSpacing}px`,
        }}
      >
        {TITLE}
      </div>
    </div>
  );
};

export default TitleContainer;
