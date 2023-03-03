import { FunctionComponent } from 'react';

import Image from '~/features/shared/components/Image';
import { PHOTO_PATH_PREFIX } from '~/features/shared/constants';

type Props = {
  onClick?: () => void;
};
const CloseButton: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <Image src={`${PHOTO_PATH_PREFIX}/svg/close.svg`} alt="닫기 버튼" />
    </button>
  );
};

export default CloseButton;
