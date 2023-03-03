import { forwardRef } from 'react';

type ContentContainerProps = {
  id: number;
  title: string;
  description: string;
  customClass: string;
  active: boolean;
};

const LINE_HEIGHT = 30;
const CENTER_TO_TOP_RATIO = 3;

const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ title, description, customClass, id, active }, ref) => {
    const yTitle = window.innerHeight / CENTER_TO_TOP_RATIO + LINE_HEIGHT;

    return (
      <div
        className={`dailybook-content-container scroll-snap ${customClass}`}
        data-id={id + 1}
        ref={ref}
      >
        <div className={`${customClass}-gradient`} />
        <span className="dailybook-content-title">
          {Array.from(title, (str, index) => {
            return (
              <div
                style={
                  active
                    ? {
                        display: 'inline-block',
                        transform: `translate3d(0, -${yTitle}px, 0)`,
                        transition: `all 1s`,
                        transitionDelay: `calc(.1s * ${index})`,
                        opacity: 1,
                      }
                    : { opacity: 0 }
                }
              >
                {str}
              </div>
            );
          })}
        </span>
        <span className="dailybook-content-description">{description}</span>
      </div>
    );
  },
);

export default ContentContainer;
