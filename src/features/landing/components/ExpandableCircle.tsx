import { FunctionComponent } from 'react';

const ExpandableCircle: FunctionComponent<{ expand: boolean }> = ({
  expand,
}) => {
  return <div className={`expandable-circle ${expand ? 'expand' : ''}`} />;
};

export default ExpandableCircle;
