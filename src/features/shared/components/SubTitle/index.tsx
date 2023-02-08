import classnames from 'classnames';

import { StyleProps } from '~/types';

type Props = {
  title: string;
} & StyleProps;

const SubTitle = (props: Props) => {
  const { title, className } = props;
  return <h2 className={classnames('sub-title', className)}>{title}</h2>;
};

export default SubTitle;
