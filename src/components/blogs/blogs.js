import { SectionHeading } from '../ui/heading';
import Section from '../ui/section';
import BlogCard from '../ui/blog-card';

import data from './data';

const Blogs = () => {
  return (
    <Section id='blogs'>
      <SectionHeading>Blogs</SectionHeading>
      <div>
        <ul className='group/list'>
          {data.map((item) => {
            return (
              <li key={item.id} className='mb-12'>
                <BlogCard {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Blogs;
