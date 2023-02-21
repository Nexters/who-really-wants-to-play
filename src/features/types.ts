import { MutableRefObject } from 'react';

export type RefList = HTMLElement[];

export type AppData = {
  refList: MutableRefObject<RefList>;
  activeIndex: number;
};
