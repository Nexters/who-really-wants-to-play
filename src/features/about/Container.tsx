import { FunctionComponent, useEffect, useRef, useState } from 'react';

// import Title from './components/Title';
import { PROFILES_REPEAT, TITLE } from './constants';
import { useIntroInteraction } from './hooks/useIntroInteraction';
import { AboutContainerProps } from './types';

const AboutContainer: FunctionComponent<AboutContainerProps> = ({
  scrollValue,
}) => {
  const [selectedNameNum, setSelectedNameNum] = useState<number>(0);

  const [titleOpacity, setTitleOpacity] = useState<number>(0);
  const [titleLetterSpacing, setTitleLetterSpacing] = useState<number>(100);

  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const titleBoxRef = useRef<HTMLDivElement>(null);
  // const titleBoxHeight = titleBoxRef.current?.offsetHeight || 0;

  useEffect(() => {
    aboutInLayout();
  }, []);

  const aboutInLayout = () => {
    setTitleOpacity(1);
    setTitleLetterSpacing(0);
  };
  const aboutOutLayout = () => {
    setTitleOpacity(0);
    setTitleLetterSpacing(100);
  };

  return (
    <div ref={aboutContainerRef}>
      <section className="about">
        <div
          className="about-title-box"
          style={{
            opacity: `${titleOpacity}`,
            transition: 'opacity 3s',
          }}
        >
          <div
            className="about-title"
            style={{
              letterSpacing: `${titleLetterSpacing}px`,
              transition: 'letter-spacing 2s',
            }}
          >
            {TITLE}
          </div>
        </div>
        <div className="about-profile-box">
          {PROFILES_REPEAT.map((profile, index) => (
            <div
              className="about-name-box"
              key={index}
              style={{
                opacity: `${titleOpacity}`,
                transition: 'opacity 3s',
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
