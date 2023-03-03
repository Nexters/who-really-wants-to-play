import { FunctionComponent } from 'react';
import classNames from 'classnames';

import { AppData } from '~/features/types';
import { PAGE_NAME } from '~/features/shared/constants';

type Props = AppData & { bgColor: string; keywords: string[] };
const KeywordList: FunctionComponent<Props> = ({
  refList,
  activeIndex,
  bgColor,
  keywords,
}) => {
  const isActive = activeIndex === PAGE_NAME.DETAIL_KEYWORD;
  console.log(isActive);
  return (
    <section
      ref={(ef) => {
        if (!ef) return;
        refList.current[PAGE_NAME.DETAIL_KEYWORD] = ef;
      }}
      data-id={PAGE_NAME.DETAIL_KEYWORD}
      className="detail-keyword-container detail-block scroll-snap"
      style={{ backgroundColor: bgColor }}
    >
      <div className={classNames('keywords-wrapper', { animate: isActive })}>
        {keywords.map((keyword) => (
          <div className="keyword" key={keyword}>
            {keyword}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeywordList;
