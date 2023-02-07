import { FunctionComponent, useEffect, useState } from 'react';

const AboutContainer: FunctionComponent = () => {
  const Profiles = [
    {
      name: 'Kim Yeonghwan',
      job: 'Designer',
    },
    {
      name: 'Lee Hyebin',
      job: 'Designer',
    },
    {
      name: 'Lee Sangchul',
      job: 'Developer',
    },
    {
      name: 'An Yulim',
      job: 'Developer',
    },
    {
      name: 'Kim Dongyong',
      job: 'Developer',
    },
    {
      name: 'Cho Yejin',
      job: 'Developer',
    },
    {
      name: 'Kim Yeonghwan',
      job: 'Designer',
    },
    {
      name: 'Lee Hyebin',
      job: 'Designer',
    },
    {
      name: 'Lee Sangchul',
      job: 'Developer',
    },
    {
      name: 'An Yulim',
      job: 'Developer',
    },
    {
      name: 'Kim Dongyong',
      job: 'Developer',
    },
    {
      name: 'Cho Yejin',
      job: 'Developer',
    },
    {
      name: 'Kim Yeonghwan',
      job: 'Designer',
    },
    {
      name: 'Lee Hyebin',
      job: 'Designer',
    },
    {
      name: 'Lee Sangchul',
      job: 'Developer',
    },
    {
      name: 'An Yulim',
      job: 'Developer',
    },
    {
      name: 'Kim Dongyong',
      job: 'Developer',
    },
    {
      name: 'Cho Yejin',
      job: 'Developer',
    },
  ];

  const [selectedNameNum, setSelectedNameNum] = useState<number>(8);
  const [sectionHeight, setSectionHeignt] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const [marginTopOnScroll, setMarginTopOnScroll] = useState<number>(0);

  useEffect(() => {
    setLayout();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setYOffset(window.pageYOffset);
      playAnimation();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const setLayout = () => {
    const windowHeight = window.innerHeight;
    const profilesLength = 6 * 150;
    setSectionHeignt(profilesLength + windowHeight);

    setYOffset(window.pageYOffset);
  };

  const playAnimation = () => {
    // 왜 ..... pageYOffset의 최댓값이 900인지 모르겠음 ?
    // const scrollRatio = yOffset ? yOffset / 900 : 0;

    if (yOffset < 150) {
      setMarginTopOnScroll(0);
      setSelectedNameNum(8);
      return;
    }
    if (yOffset < 300) {
      setMarginTopOnScroll(-150);
      setSelectedNameNum(9);
      return;
    }
    if (yOffset < 450) {
      setMarginTopOnScroll(-300);
      setSelectedNameNum(10);
      return;
    }
    if (yOffset < 600) {
      setMarginTopOnScroll(-450);
      setSelectedNameNum(11);
      return;
    }
    if (yOffset < 750) {
      setMarginTopOnScroll(-600);
      setSelectedNameNum(12);
      return;
    }
    if (yOffset < 900) {
      setMarginTopOnScroll(-750);
      setSelectedNameNum(13);
      return;
    }
  };

  return (
    <section
      className="scroll-section"
      id="scroll-section-about"
      style={{ height: `${sectionHeight}px` }}
    >
      <div
        className="about-name-box"
        style={{ marginTop: `${marginTopOnScroll}px`, transition: 'margin 1s' }}
      >
        {Profiles.map((profile, index) => (
          <div key={index}>
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
            <div className="about-image-box">
              <img
                src={`./images/about/image${selectedNameNum}.png`}
                alt="basicImage"
                width={603}
                height={603}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContainer;
