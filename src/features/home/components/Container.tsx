import { forwardRef } from 'react';

type ContentContainerProps = {
  id: number;
  title: string;
  description: string;
  customClass: string;
};

const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ title, description, customClass, id }, ref) => {
    return (
      <div
        className={`home-content-container scroll-snap ${customClass}`}
        data-id={id}
        ref={ref}
      >
        <span className="home-content-title">{title}</span>
        <span className="home-content-description">{description}</span>
      </div>
    );
  },
);

export default ContentContainer;
