import { FunctionComponent, useRef } from 'react';

import { PROFILES_REPEAT, TITLE } from './constants';
import { useIntroInteraction } from './hooks/useInteraction';
import { AboutContainerProps } from './types';

const AboutContainer: FunctionComponent<AboutContainerProps> = ({
  scrollValue,
}) => {
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const aboutContainerScrollY = aboutContainerRef.current?.offsetTop || 0;

  const titleBoxRef = useRef<HTMLDivElement>(null);

  const {
    titleOpacity,
    titleLetterSpacing,
    titleTop,
    profileBoxPaddingTop,
    selectedName,
    selectedTop,
    selectedJob,
  } = useIntroInteraction(scrollValue, aboutContainerScrollY);

  return (
    <div ref={aboutContainerRef}>
      <section className="about">
        <div
          className="about-title-box"
          ref={titleBoxRef}
          style={{
            opacity: `${titleOpacity}`,
            top: `${titleTop}px`,
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
        <div
          className="about-profile-box"
          style={{
            paddingTop: `${profileBoxPaddingTop}px`,
            top: `${selectedTop}px`,
          }}
        >
          {PROFILES_REPEAT.map((profile, index) => (
            <div
              className="about-name-box"
              key={index}
              style={{
                opacity: `${titleOpacity}`,
              }}
            >
              <div
                className={
                  selectedName === index ? 'about-selected-name' : 'about-name'
                }
                style={{ transition: `color ${selectedName ? 1 : 3}s` }}
              >
                {profile.name}
              </div>
            </div>
          ))}
          <div
            className="about-selected-job"
            style={{
              opacity: `${titleOpacity}`,
              top: `${profileBoxPaddingTop + 110}px`,
            }}
          >
            {selectedJob}
          </div>
        </div>
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
      </section>
    </div>
  );
};

export default AboutContainer;
