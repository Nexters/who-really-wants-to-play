import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { DailyBookData } from '~/features/dailyBook/types';
import Keyword from '~/features/detail/components/Keyword';

type Props = {
  reverse?: boolean;
  row: DailyBookData[];
};
const KeywordSliderRow: FunctionComponent<Props> = ({
  reverse = false,
  row,
}) => {
  return (
    <div className={classNames('keyword-wrapper', { reverse })}>
      {row.map(({ id, title }: DailyBookData) => (
        <Keyword id={id} title={title} key={id} />
      ))}
      {row.map(({ id, title }: DailyBookData) => (
        <Keyword id={id} title={title} key={id} />
      ))}
    </div>
  );
};

export default KeywordSliderRow;
