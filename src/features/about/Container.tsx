import { FunctionComponent, useRef } from 'react';

import { PROFILES_REPEAT, TITLE } from './constants';
import { useGetStartScrollY } from './hooks/\buseGetStartScrollY';
import { useIntroInteraction } from './hooks/useInteraction';
import { AboutContainerProps } from './types';

const AboutContainer: FunctionComponent<AboutContainerProps> = ({
  scrollValue,
}) => {
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const titleBoxRef = useRef<HTMLDivElement>(null);

  const aboutContainerScrollY = aboutContainerRef.current?.offsetTop || 0;
  const { startIntroScrollY } = useGetStartScrollY(aboutContainerScrollY);
  const lastProfileScrollY =
    aboutContainerScrollY + (PROFILES_REPEAT.length - 1) * 200 + 200;

  const {
    titleOpacity,
    titleLetterSpacing,
    titleTop,
    imageOpacity,
    profileBoxPaddingTop,
    profileBoxOpacity,
    selectedName,
    selectedTop,
    selectedJob,
    profileJobTop,
    imageTop,
    endOpacity,
    lineTop,
    lineTextTop,
    endTextBottom,
    nameMarginLeft,
    endTextRotate,
  } = useIntroInteraction(
    scrollValue,
    startIntroScrollY,
    aboutContainerScrollY,
    lastProfileScrollY,
  );

  const handleScrollTopClick = () => {
    // TODO
    window.scrollTo({ top: aboutContainerScrollY, behavior: 'smooth' });
  };

  return (
    <div ref={aboutContainerRef}>
      <section className="about">
        {scrollValue >= startIntroScrollY && (
          <div
            className="about-bg-image-box"
            style={{
              backgroundColor: `${
                selectedName >= 0
                  ? PROFILES_REPEAT[selectedName].color
                  : '#bfe0b0'
              }`,
              backgroundImage: `url(${
                selectedName >= 0
                  ? PROFILES_REPEAT[selectedName].src
                  : 'https://raw.githubusercontent.com/Nexters/who-really-wants-to-play/images/images/profile/sc.webp'
              })`,
            }}
          >
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
                    opacity: `${profileBoxOpacity}`,
                  }}
                >
                  <div
                    className={
                      selectedName === index
                        ? 'about-selected-name'
                        : 'about-name'
                    }
                    style={{
                      transition: `color ${selectedName ? 1 : 3}s, margin 2s`,
                      marginLeft: `${nameMarginLeft * index}px`,
                    }}
                  >
                    {profile.name}
                  </div>
                </div>
              ))}
              <div
                className="about-selected-job"
                style={{
                  opacity: `${profileJobTop}`,
                  top: `${profileBoxPaddingTop + 110}px`,
                }}
              >
                {selectedJob}
              </div>
            </div>
            {scrollValue >= aboutContainerScrollY &&
              PROFILES_REPEAT.map((profile, index) => (
                <div
                  className="about-image-box"
                  key={index}
                  style={{ opacity: `${imageOpacity}`, top: `${imageTop}%` }}
                >
                  <img
                    className={
                      selectedName === index
                        ? 'about-selected-img'
                        : 'about-img'
                    }
                    src={profile.src}
                    alt="basicImage"
                    width={603}
                    height={603}
                  />
                </div>
              ))}
          </div>
        )}
        <section
          className="about-end-container"
          style={{ opacity: `${endOpacity}` }}
        >
          <div className="about-line" style={{ top: `${lineTop}%` }}></div>
          <div
            className="about-line-text"
            style={{ top: `${lineTextTop}%` }}
            onClick={handleScrollTopClick}
          >
            Want to go to the top?
          </div>
          <div className="about-end-text-box">
            <div
              className="about-end-text"
              style={{ bottom: `${endTextBottom}px` }}
            >
              <span style={{ transform: `rotate(-${endTextRotate}deg)` }}>
                E
              </span>
              <span>n</span>
              <span style={{ transform: `rotate(${endTextRotate}deg)` }}>
                d
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutContainer;
