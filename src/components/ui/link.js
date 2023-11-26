import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUp,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

const LinkPrimary = (props) => {
  const { href, target, rel, children } = props;
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
    >
      {children}
    </Link>
  );
};

const LinkSecondary = (props) => {
  const { href, children, target, rel } = props;
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='inline-flex items-center font-medium leading-tight text-slate-200 group'
    >
      <span className='whitespace-nowrap'>
        <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
          {children}
        </span>
        <FontAwesomeIcon
          className='ml-1 inline-block h-[12px] w-[12px] shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
          icon={faArrowRight}
        />
      </span>
    </Link>
  );
};

const LinkTertiary = (props) => {
  const { href, children, className, bubbleUp, target, rel } = props;
  return (
    <Link
      className={twMerge(
        `inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base ${className}`
      )}
      href={href}
      target={target}
      rel={rel}
    >
      {bubbleUp && (
        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
      )}
      <span>
        {children}
        <FontAwesomeIcon
          className='inline-block h-[13px] w-[13px] shrink-0 transition-transform rotate-45 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
          icon={faArrowUp}
        />
      </span>
    </Link>
  );
};

const GoBackLink = (props) => {
  const { href, children } = props;

  return (
    <Link
      className='group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300'
      href={href}
    >
      <FontAwesomeIcon
        className='mr-1 h-3 w-3 transition-transform group-hover:-translate-x-2'
        icon={faArrowLeft}
      />
      {children}
    </Link>
  );
};

export { LinkPrimary, LinkSecondary, LinkTertiary, GoBackLink };
