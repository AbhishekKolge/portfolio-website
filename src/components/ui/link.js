import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUp,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

const LinkPrimary = (props) => {
  const { href, target, rel, children, className } = props;
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={twMerge(
        `font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 ${className}`
      )}
    >
      {children}
    </Link>
  );
};

const LinkSecondary = (props) => {
  const { href, children, target, rel, ariaLabel } = props;
  return (
    <Link
      aria-label={ariaLabel}
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
          className='ml-1 inline-block shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
          icon={faArrowRight}
          fontSize={12}
        />
      </span>
    </Link>
  );
};

const LinkTertiary = (props) => {
  const { href, children, className, bubbleUp, target, rel, ariaLabel } = props;
  return (
    <Link
      className={twMerge(
        `inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base ${className}`
      )}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {bubbleUp && (
        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
      )}
      <span>
        {children}
        <FontAwesomeIcon
          className='inline-block shrink-0 transition-transform rotate-45 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-2 translate-y-px'
          icon={faArrowUp}
          fontSize={12}
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
        className='mr-1 transition-transform group-hover:-translate-x-2'
        icon={faArrowLeft}
        fontSize={12}
      />
      {children}
    </Link>
  );
};

export { LinkPrimary, LinkSecondary, LinkTertiary, GoBackLink };
