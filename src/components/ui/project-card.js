import Image from 'next/image';

import { LinkTertiary } from './link';
import Badge from './badge';

const ProjectCard = (props) => {
  const { title, link, description, img, tags } = props;
  return (
    <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
      <div className='z-10 sm:order-2 sm:col-span-6'>
        <h3>
          {link ? (
            <LinkTertiary
              rel='noreferrer'
              target='_blank'
              bubbleUp={true}
              href={link}
              ariaLabel={title}
            >
              {title}
            </LinkTertiary>
          ) : (
            <span
              aria-label={title}
              className='font-medium leading-tight text-slate-200 text-base'
            >
              {title}
            </span>
          )}
        </h3>
        <p className='mt-2 text-sm leading-normal'>{description}</p>
        <ul className='mt-2 flex flex-wrap'>
          {tags.map((tag, index) => (
            <li key={index} className='mr-1.5 mt-2'>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={img}
        width={200}
        height={48}
        alt='project-img'
        className='opacity-70 rounded border-2 aspect-[4/2] object-cover border-slate-200/10 transition group-hover:opacity-100 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
      />
    </div>
  );
};

export default ProjectCard;
