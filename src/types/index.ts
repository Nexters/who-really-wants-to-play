export type StyleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type DefaultProps = {
  children?: React.ReactNode;
} & StyleProps;

export type ImgProps = {
  id?: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
} & StyleProps;
