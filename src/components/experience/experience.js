import Section from '../ui/section';
import ExperienceCard from '../ui/experience-card';
import { LinkSecondary } from '../ui/link';
import { SectionHeading } from '../ui/heading';

import data from './data';

const Experience = () => {
  return (
    <Section ariaLabel='Experience' id='experience'>
      <SectionHeading>Experience</SectionHeading>
      <div>
        <ol className='group/list'>
          {data.map((item) => {
            return (
              <li key={item.id} className='mb-12'>
                <ExperienceCard {...item} />
              </li>
            );
          })}
        </ol>
        <div className='mt-12'>
          <LinkSecondary
            ariaLabel='View Full Résumé'
            target='_blank'
            href='https://bit.ly/abhishek_resume_v3'
          >
            View Full Résumé
          </LinkSecondary>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
