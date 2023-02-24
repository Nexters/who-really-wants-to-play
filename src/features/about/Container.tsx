import { FunctionComponent, useEffect, useState } from 'react';

import { PROFILES_REPEAT, TITLE } from './constants';

const AboutContainer: FunctionComponent = () => {
  const [selectedNameNum, setSelectedNameNum] = useState<number>(8);

  const [nameBoxMarginTop, setNameBoxMarginTop] = useState<number>(0);
  const [nameBoxMarginLeft, setNameBoxMarginLeft] = useState<number>(40);
  const [nameBoxOpacity, setNameBoxOpacity] = useState<number>(0);

  const [currentNum, setCurrentNum] = useState<number>(-1);

  useEffect(() => {
    setLayout();
  }, []);

  const setLayout = () => {
    setNameBoxMarginLeft(0);
    setNameBoxOpacity(1);
  };

  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {});
  }, []);

  return (
    <section className="about">
      <div className="about-title">{TITLE}</div>
      <div className="about-profile-box">
        {PROFILES_REPEAT.map((profile, index) => (
          <div
            className="about-name-box"
            key={index}
            style={{
              marginLeft: `${nameBoxMarginLeft * index}px`,
              opacity: nameBoxOpacity,
              transition: 'margin 2s, opacity 3s',
            }}
          >
            <div
              className={
                selectedNameNum === index ? 'about-selected-name' : 'about-name'
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
        {PROFILES_REPEAT.map((profile, index) => (
          <div className="about-image-box">
            {index > 7 && index < 14 && (
              <img
                className={
                  selectedNameNum === index ? 'about-selected-img' : 'about-img'
                }
                src={`./images/about/image${index}.png`}
                alt="basicImage"
                width={603}
                height={603}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContainer;
