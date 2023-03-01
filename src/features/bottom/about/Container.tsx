import { FunctionComponent, useRef, useState } from 'react';

import Title from './components/Title';
import { PROFILES_REPEAT } from './constants';
import { useIntroInteraction } from './hooks/useIntroInteraction';
import { AboutContainerProps } from './types';

const AboutContainer: FunctionComponent<AboutContainerProps> = ({
  scrollValue,
}) => {
  const [selectedNameNum, setSelectedNameNum] = useState<number>(0);

  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const aboutContainerHeight = aboutContainerRef.current?.offsetHeight || 0;

  const aboutContainerScrollY = aboutContainerRef.current?.offsetTop || 0;
  const { introInfo } = useIntroInteraction(scrollValue, aboutContainerScrollY);

  return (
    <div ref={aboutContainerRef}>
      <section className="about">
        <Title
          titleOpacity={introInfo.titleOpacity}
          titleLetterSpacing={introInfo.titleLetterSpacing}
          titleTop={introInfo.titleTop}
        />
        <div className="about-profile-box">
          {PROFILES_REPEAT.map((profile, index) => (
            <div
              className="about-name-box"
              key={index}
              style={{
                opacity: `${introInfo.titleOpacity}`,
              }}
            >
              <div
                className={
                  selectedNameNum === index
                    ? 'about-selected-name'
                    : 'about-name'
                }
              >
                {profile.name}
              </div>
              <div
                className={
                  selectedNameNum === index ? 'about-selected-job' : 'about-job'
                }
              >
                {profile.job}
              </div>
            </div>
          ))}
          {/* {PROFILES_REPEAT.map((profile, index) => (
            <div className="about-image-box">
              {index > 7 && index < 14 && (
                <img
                  className={
                    selectedNameNum === index
                      ? 'about-selected-img'
                      : 'about-img'
                  }
                  src={`./images/about/image${index}.png`}
                  alt="basicImage"
                  width={603}
                  height={603}
                />
              )}
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default AboutContainer;
