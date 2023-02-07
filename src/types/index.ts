export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface DefaultProps extends StyleProps {
  children?: React.ReactNode;
}

export interface ImgProps extends StyleProps {
  id?: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
