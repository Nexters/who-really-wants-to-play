import { FunctionComponent } from 'react';

import CloseButton from '~/features/detail/components/CloseButton';
import Image from '~/features/shared/components/Image';

type Props = {
  show: boolean;
  src: string;
  alt: string;
  onClose: () => void;
};

const ImageModal: FunctionComponent<Props> = ({ show, src, alt, onClose }) => {
  return (
    <>
      {show && (
        <div className="modal">
          <div className="image-wrapper">
            <Image src={src} alt={alt} />
            <CloseButton onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
