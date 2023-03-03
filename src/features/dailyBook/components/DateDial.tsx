import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { data } from '../constants';
import { getTransform } from '../helpers';

type DateDialProps = {
  dailyBookIndex: number;
};

const DateDial: FunctionComponent<DateDialProps> = ({ dailyBookIndex }) => {
  return (
    <div className="dailybook-date-dialog">
      {data.map((item, index) => {
        const visible =
          dailyBookIndex - 2 <= index && index <= dailyBookIndex + 2;
        const transform = getTransform({ index, dailyBookIndex });

        return (
          <div
            className={classNames(`dailybook-date-dialog-text`, { visible })}
            style={{ transform }}
            key={item.id}
          >
            {data[index].date}
          </div>
        );
      })}
    </div>
  );
};

export default DateDial;
