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
        className={`dailybook-content-container scroll-snap ${customClass}`}
        data-id={id + 1}
        ref={ref}
      >
        <div className={`${customClass}-gradient`} />
        <span className="dailybook-content-title">{title}</span>
        <span className="dailybook-content-description">{description}</span>
      </div>
    );
  },
);

export default ContentContainer;
