import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { data } from '../constants';
import Image from '../../shared/components/Image';

import { AppData } from '~/features/types';

type DailyBookCoverImageProps = Pick<AppData, 'activeIndex'>;

const DailyBookCoverImage: FunctionComponent<DailyBookCoverImageProps> = ({
  activeIndex,
}) => {
  return (
    <div className="dailybook-image">
      <div className="dailybook-image-box">
        <Link to={`/detail/${activeIndex - 1}`} preventScrollReset>
          <Image
            className="dailybook-image-cover"
            src={data[activeIndex - 1].coverImage}
            alt="cover"
            width={600}
            height={600}
          />
        </Link>
      </div>
      <div className="dailybook-image-box-second">
        <Image
          className="dailybook-image-cover-background"
          src={data[activeIndex % data.length].coverImage}
          alt="second cover"
          width={500}
          height={500}
        />
      </div>
      <div className="dailybook-image-box-third">
        <Image
          className="dailybook-image-cover-background"
          src={data[(activeIndex + 1) % data.length].coverImage}
          alt="second cover"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default DailyBookCoverImage;
