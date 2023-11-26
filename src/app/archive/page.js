import { GoBackLink } from '@/components/ui/link';
import { MainHeading } from '@/components/ui/heading';
import { LinkTertiary } from '@/components/ui/link';
import Badge from '@/components/ui/badge';

const Archive = () => {
  return (
    <section className='w-full'>
      <div className='lg:py-24'>
        <GoBackLink href='/'>Abhishek Kolge</GoBackLink>
        <MainHeading>All Projects</MainHeading>
        <table className='mt-12 w-full border-collapse text-left'>
          <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur'>
            <tr>
              <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
                Year
              </th>
              <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
                Project
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
                Made at
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
                Built with
              </th>
              <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell'>
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-slate-300/10 last:border-none'>
              <td className='py-4 pr-4 align-top text-sm'>
                <div className='translate-y-px'>2023</div>
              </td>
              <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
                <div>
                  <div className='block sm:hidden'>
                    <LinkTertiary href='/'>Unthread</LinkTertiary>
                  </div>
                  <div className='hidden sm:block'>Unthread</div>
                </div>
              </td>
              <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                <div className='translate-y-px whitespace-nowrap'>
                  Unthread Technologies
                </div>
              </td>
              <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                <ul className='flex -translate-y-1.5 flex-wrap'>
                  <li className='my-1 mr-1.5'>
                    <Badge>Next.js</Badge>
                  </li>
                  <li className='my-1 mr-1.5'>
                    <Badge>Storybook</Badge>
                  </li>
                  <li className='my-1 mr-1.5'>
                    <Badge>Node.js</Badge>
                  </li>
                  <li className='my-1 mr-1.5'>
                    <Badge>MongoDB</Badge>
                  </li>
                </ul>
              </td>
              <td className='hidden py-4 align-top sm:table-cell'>
                {/* <ul className='translate-y-1'>
                  <li className='mb-1 flex items-center'>
                    <LinkTertiary
                      href='/'
                      className='text-slate-400 text-sm'
                    ></LinkTertiary>
                  </li>
                </ul> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Archive;
