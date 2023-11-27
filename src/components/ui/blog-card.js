import Image from 'next/image';

import { LinkTertiary } from './link';

const BlogCard = (props) => {
  const { title, date, link, img } = props;
  return (
    <div className='group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
      <Image
        src={img}
        width={200}
        height={48}
        className='opacity-70 z-10 col-span-2 rounded border-2 aspect-[4/2] object-cover border-slate-200/10 transition group-hover:opacity-100 group-hover:border-slate-200/30 sm:col-span-2'
        alt='test'
      />
      <div className='z-10 col-span-6'>
        <span className='-mt-1 text-sm font-semibold leading-6'>{date}</span>
        <h3 className='-mt-1'>
          <LinkTertiary
            target='_blank'
            rel='noreferrer'
            href={link}
            bubbleUp={true}
            ariaLabel={title}
          >
            {title}
          </LinkTertiary>
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
