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

  const aboutInfo = {
    // 속성들 묶어서 사용해보려 했지만 ... 이게 좋은 방법인지 모르겠어서 보류
    type: 'sticky',
    windowHeight: window.innerHeight,
    profilesHeight: 6 * 150,
    values: {
      nameBox_marginLeft_in: [40, 0],
      nameBox_opacity_in: [0, 1],
    },
  };

  const [sectionHeight, setSectionHeignt] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const [selectedNameNum, setSelectedNameNum] = useState<number>(8);

  const [nameBoxMarginTop, setNameBoxMarginTop] = useState<number>(0);
  const [nameBoxMarginLeft, setNameBoxMarginLeft] = useState<number>(40);
  const [nameBoxOpacity, setNameBoxOpacity] = useState<number>(0);

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
    setYOffset(0);
    setSectionHeignt(6 * 150 + aboutInfo.windowHeight);
    // 로드 시 애니메이션 안되는 경우 있는데 왜그런지 모르겠음 ?
    setNameBoxMarginLeft(0);
    setNameBoxOpacity(1);
  };

  const playAnimation = () => {
    // 왜 ..... pageYOffset의 최댓값이 900인지 모르겠음 ?
    // const scrollRatio = yOffset ? yOffset / 900 : 0;

    if (yOffset < 150) {
      setNameBoxMarginTop(0);
      setSelectedNameNum(8);
      return;
    }
    if (yOffset < 300) {
      setNameBoxMarginTop(-150);
      setSelectedNameNum(9);
      return;
    }
    if (yOffset < 450) {
      setNameBoxMarginTop(-300);
      setSelectedNameNum(10);
      return;
    }
    if (yOffset < 600) {
      setNameBoxMarginTop(-450);
      setSelectedNameNum(11);
      return;
    }
    if (yOffset < 750) {
      setNameBoxMarginTop(-600);
      setSelectedNameNum(12);
      return;
    }
    if (yOffset < 900) {
      setNameBoxMarginTop(-750);
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
        style={{
          marginTop: `${nameBoxMarginTop}px`,
          transition: 'margin 1s',
        }}
      >
        {Profiles.map((profile, index) => (
          <>
            <div
              key={index}
              style={{
                marginLeft: `${nameBoxMarginLeft * index}px`,
                opacity: nameBoxOpacity,
                transition: 'margin 2s, opacity 3s',
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
          </>
        ))}
      </div>
    </section>
  );
};

export default AboutContainer;
