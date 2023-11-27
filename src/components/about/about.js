import { LinkPrimary } from '../ui/link';
import { SectionHeading } from '../ui/heading';
import Section from '../ui/section';

const About = () => {
  return (
    <Section ariaLabel='About' id='about'>
      <SectionHeading>About</SectionHeading>
      <div>
        <p className='mb-4'>
          Few years back I tried my hand in web development and it became my
          passion. Fast-forward to today, and I&lsquo;ve had the privilege of
          building softwares for a{' '}
          <LinkPrimary
            href='https://www.appoctet.com/'
            target='_blank'
            rel='noreferrer'
          >
            start-up
          </LinkPrimary>
          , and an excellent{' '}
          <LinkPrimary
            href='https://in.linkedin.com/company/digitalsalt-technologies'
            target='_blank'
            rel='noreferrer'
          >
            service based company
          </LinkPrimary>
          .
        </p>
        <p className='mb-4'>
          These days I am building a saas product @{' '}
          <LinkPrimary
            href='https://www.linkedin.com/company/unthread-world/mycompany/'
            target='_blank'
            rel='noreferrer'
          >
            Unthread Technologies
          </LinkPrimary>
          . In the free time I&lsquo;ve build few of my side project to learn
          new skills and practice existing skills. I am currently dedicating my
          efforts to mastering Data Structures and Algorithms in order to
          successfully navigate through the screening process of major tech
          companies.
        </p>
        <p className='mb-4'>
          When I&lsquo;m not at the laptop, I&lsquo;m usually sleeping or binge
          watching thriller, mind boggling{' '}
          <LinkPrimary
            href='https://www.primevideo.com/dp/amzn1.dv.gti.4eb1c578-2d81-f757-917d-e4c16fbbfebe'
            target='_blank'
            rel='noreferrer'
          >
            movies
          </LinkPrimary>{' '}
          and{' '}
          <LinkPrimary
            href='https://www.youtube.com/watch?v=MGRm4IzK1SQ&t=65s'
            target='_blank'
            rel='noreferrer'
          >
            anime
          </LinkPrimary>
          .
        </p>
      </div>
    </Section>
  );
};

export default About;
