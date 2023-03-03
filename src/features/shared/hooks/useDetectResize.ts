import { useEffect, useState } from 'react';

import { debounce } from '~/features/shared/utils/debounce';

export default function useWindowResize(delay: number) {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const detectSize = () => setSize([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => detectSize(), delay),
    );

    return () =>
      window.removeEventListener(
        'resize',
        debounce(() => detectSize(), delay),
      );
  }, [delay]);
  return size;
}
