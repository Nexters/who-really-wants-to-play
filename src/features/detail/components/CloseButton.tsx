import { FunctionComponent } from 'react';

import { PHOTO_PATH_PREFIX } from '~/features/shared/constants';

type Props = {
  onClick?: () => void;
};
const CloseButton: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <img src={`${PHOTO_PATH_PREFIX}/svg/close.svg`} />
    </button>
  );
};

export default CloseButton;
