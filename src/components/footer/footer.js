import { LinkPrimary } from '../ui/link';

const Footer = () => {
  return (
    <footer className='max-w-md text-sm text-slate-500 row-start-2 row-end-3'>
      <p>
        I&lsquo;m a <span className='text-slate-400'>developer</span>,{' '}
        <span className='text-slate-400'>not</span> a{' '}
        <span className='text-slate-400'>designer</span>, so I replicated the UI
        from Brittany Chiang&lsquo;s personal website. You can visit{' '}
        <LinkPrimary
          href='https://abhishek-portfolio-site.netlify.app'
          className='text-slate-400'
          target='_blank'
        >
          here
        </LinkPrimary>{' '}
        to check my old and first portfolio website which was built in early
        2020.
      </p>
    </footer>
  );
};

export default Footer;
