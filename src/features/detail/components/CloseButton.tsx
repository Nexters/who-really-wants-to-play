import { FunctionComponent } from 'react';

type Props = {
  onClick: () => void;
};
const CloseButton: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <img src="./svg/close.svg" />
    </button>
  );
};

export default CloseButton;
