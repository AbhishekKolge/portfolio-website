import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from './data';

const Social = (props) => {
  const { className } = props;
  return (
    <ul className={className}>
      {data.map((item) => {
        return (
          <li className='mr-5 text-xs' key={item.id}>
            <Link
              target='_blank'
              href={item.link}
              className='block hover:text-slate-200'
            >
              <span className='sr-only'>{item.name}</span>
              <FontAwesomeIcon className='h-6 w-6' icon={item.icon} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
