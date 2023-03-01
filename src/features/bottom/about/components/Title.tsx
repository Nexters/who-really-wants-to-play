import { FunctionComponent } from 'react';

import { TITLE } from '../constants';
import { IntroInfoValues } from '../types';

const TitleContainer: FunctionComponent<IntroInfoValues> = ({
  titleOpacity,
  titleLetterSpacing,
  titleTop,
}) => {
  return (
    <div
      className="about-title-box"
      style={{
        opacity: `${titleOpacity}`,
        bottom: `${titleTop}px`,
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
