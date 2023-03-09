import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { data } from '../constants';
import Image from '../../shared/components/Image';

type DailyBookCoverImageProps = {
  dailyBookIndex: number;
};

const MAX_IMAGE_COUNT = 3;

const BackgroundImage: FunctionComponent<
  DailyBookCoverImageProps & { index: number }
> = ({ dailyBookIndex, index }) => {
  const navigation = useNavigate();

  const curIndex = (index - dailyBookIndex) % MAX_IMAGE_COUNT;
  const coverImage = curIndex === 0;
  const active =
    dailyBookIndex <= index && index < dailyBookIndex + MAX_IMAGE_COUNT;
  const view = dailyBookIndex - 1 === index;
  const gradualDecline = view ? curIndex - 1 : curIndex * 100;
  const activeSeqClass = (() => {
    if (!active) return '';

    switch (curIndex) {
      case 0:
        return 'first';
      case 1:
        return 'second';
      case 2:
        return 'third';
    }

    throw new Error('Overflow curIndex');
  })();

  const handleImageClick = () => {
    navigation(`/detail/${dailyBookIndex}`, { preventScrollReset: true });
  };

  return (
    <div
      className={classNames(`dailybook-image-box`, activeSeqClass, {
        view,
      })}
    >
      {(active || view) && (
        <Image
          onClick={handleImageClick}
          className={`dailybook-image-cover${coverImage ? '' : '-background'}`}
          src={data[index % data.length].coverImage}
          alt="cover"
          width={600 - gradualDecline}
          height={600 - gradualDecline}
          options={{ fit: 'crop' }}
        />
      )}
    </div>
  );
};

const DailyBookCoverImage: FunctionComponent<DailyBookCoverImageProps> = ({
  dailyBookIndex,
}) => {
  return (
    <div className="dailybook-image">
      {data.map((item, index) => {
        const paint =
          dailyBookIndex - 1 <= index &&
          index < dailyBookIndex + MAX_IMAGE_COUNT;
        if (!paint) return null;

        return (
          <BackgroundImage
            key={item.id}
            index={index}
            dailyBookIndex={dailyBookIndex}
          />
        );
      })}
    </div>
  );
};

export default DailyBookCoverImage;
