import { DetailData } from '~/features/detail/types';

export type DailyBookData = {
  id: number;
  title: string;
  date: string;
  description: string;
  customClass: string;
  coverImage: string;
  detail: DetailData;
};
