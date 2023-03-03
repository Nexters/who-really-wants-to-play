import { FunctionComponent } from 'react';

import Image from '~/features/shared/components/Image';

type Props = {
  onClick?: () => void;
};
const CloseButton: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <Image src="/svg/close.svg" alt="닫기 버튼" />
    </button>
  );
};

export default CloseButton;
