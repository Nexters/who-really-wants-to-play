import { StyleProps } from '~/types';
import classnames from 'classnames';

type Props = {
  title: string;
} & StyleProps;

const SubTitle = (props: Props) => {
  const { title, className } = props;
  return <h2 className={classnames('sub-title', className)}>{title}</h2>;
};

export default SubTitle;
