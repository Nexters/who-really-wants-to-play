import { MutableRefObject } from 'react';

export type RefList = HTMLDivElement[];

export type AppData = {
  refList: MutableRefObject<RefList>;
  activeIndex: number;
};
