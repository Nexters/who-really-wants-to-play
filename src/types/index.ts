export type StyleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type DefaultProps = {
  children?: React.ReactNode;
} & StyleProps;

export type ImgProps = {
  src: string;
  alt: string;
  id?: number;
  width?: number;
  height?: number;
} & StyleProps;

export type ImgListWithId = (ImgProps & { id: number })[];
