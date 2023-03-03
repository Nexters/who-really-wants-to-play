import { FunctionComponent, PropsWithChildren } from 'react';

type FloatingProps = PropsWithChildren & {
  width?: number;
};

const Floating: FunctionComponent<FloatingProps> = ({
  children,
  width = '127px',
}) => {
  return (
    <div className="floating">
      <div className="floating-center" style={{ width }}>
        {children}
      </div>
    </div>
  );
};

export default Floating;
