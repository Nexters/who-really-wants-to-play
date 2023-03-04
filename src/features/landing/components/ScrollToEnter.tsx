import { FunctionComponent } from 'react';

type Props = {
  text?: string;
};

const ScrollToEnter: FunctionComponent<Props> = ({
  text = 'Scroll to Enter',
}) => {
  return <div className="landing-scroll-to-enter">{text}</div>;
};

export default ScrollToEnter;
