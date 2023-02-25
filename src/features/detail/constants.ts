import { DetailData } from '~/features/detail/types';

export const data: Map<string, DetailData> = new Map<string, DetailData>([
  [
    '0',
    {
      bgColor: 'rgb(167,188,217)',
      date: '02.01',
      coverTitle: 'Haru Firm',
      keywords: [
        'Haru Firm',
        'First Picture',
        'MZ Culture',
        'Picture Keyword 1',
        'How We Play',
      ],
      descriptionTitle: 'First Meet',
      description:
        'We met for the first time at the orientation of the 22nd generation of Nexters. Young-hwan was absent due to work, but the others gathered together to greet each other.',
      imgSrcs: [
        './images/23.01.12.webp',
        './images/23.01.07.webp',
        './images/23.01.14.webp',
        './images/23.01.12.webp',
        './images/23.01.07.webp',
        './images/23.01.14.webp',
        './images/23.01.12.webp',
        './images/23.01.07.webp',
        './images/23.01.14.webp',
        './images/23.01.12.webp',
        './images/23.01.07.webp',
        './images/23.01.14.webp',
      ],
    },
  ],
]);
