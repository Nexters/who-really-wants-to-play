import { FunctionComponent, useState } from 'react';

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
  ];
  const [selectedName, setSelectedName] = useState<number>(0);

  return (
    <div className="about-container">
      <div className="about-name-box">
        {Profiles.map((profile, index) => {
          if (selectedName === index) {
            return (
              <div key={index}>
                <div className="about-selected-name">{profile.name}</div>
                <div className="about-selected-job">{profile.job}</div>
              </div>
            );
          }
          return (
            <div key={index}>
              <div className="about-name">{profile.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContainer;
