import classnames from 'classnames';
import { forwardRef, LegacyRef } from 'react';

import { StyleProps } from '~/types';

type Props = {
  title: string;
} & StyleProps;

const SubTitle = (props: Props, ref: LegacyRef<HTMLHeadingElement> | null) => {
  const { title, className, style } = props;
  return (
    <h2 {...{ ref, style }} className={classnames('sub-title', className)}>
      {title}
    </h2>
  );
};

export default forwardRef(SubTitle);
