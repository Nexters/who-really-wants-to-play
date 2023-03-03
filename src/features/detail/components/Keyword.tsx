import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';

type Props = {
  id: number;
  title: string;
};

const Keyword: FunctionComponent<Props> = ({ id, title }) => {
  return (
    <Link key={id} to={`/detail/${id}`}>
      <span className="keyword">{title}</span>
    </Link>
  );
};

export default Keyword;
