import '~/style/index.scss';
import { getGridRowEnd } from '../../utils/getGridRowEnd';
import { useMasonryLayout } from '../../hooks/useMasonryLayout';

import { ImgProps } from '~/types';
import Image from '~/features/shared/components/Image';
import { useRef } from 'react';

interface Props {
  imgList: ImgProps[];
  gap: string;
}

const MasonryLayout = (props: Props) => {
  const { gap, imgList } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  useMasonryLayout(handleLayout);

  function handleLayout() {
    itemRefs.current.forEach((itemRef) => {
      const container = containerRef.current;
      if (!itemRef || !container) return;
      getGridRowEnd(container, itemRef);
      itemRef.style.gridRowEnd = getGridRowEnd(container, itemRef);
    });
  }

  return (
    <div className={'grid-container'} style={{ gap: gap }} ref={containerRef}>
      {imgList.map((img, idx) => (
        <div
          className="grid-item"
          key={img.id ?? img.alt}
          ref={(elem) => {
            if (!elem) return;
            itemRefs.current[idx] = elem;
          }}
        >
          <Image {...img} />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
