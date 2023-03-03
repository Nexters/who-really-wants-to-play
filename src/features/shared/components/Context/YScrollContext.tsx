import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

export const YScrollContext = createContext({
  yScroll: 0,
} as { yScroll: number; setYScroll?: Dispatch<SetStateAction<number>> });

export const YScrollProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [yScroll, setYScroll] = useState(0);
  const value = { yScroll, setYScroll };
  return (
    <YScrollContext.Provider value={value}>{children}</YScrollContext.Provider>
  );
};
