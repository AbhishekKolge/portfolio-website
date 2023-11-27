import placeholderImage from '@/assets/projects/placeholder.webp';
import hedgedImage from '@/assets/projects/hedged.webp';
import mahindraLifespacesImage from '@/assets/projects/mahindra-lifespaces.webp';
import captainBizImage from '@/assets/projects/captain-biz.webp';

const data = [
  {
    id: 1,
    title: 'Hedged',
    link: 'https://hedged.in',
    description: `Users who don't have enough knowledge of trading can use the Hedged app to get started with trading and analyse their portfolio while getting access to a wide range of personalised trade advice, news, observation charts, and much more.`,
    img: hedgedImage,
    tags: [
      'Node.js',
      'Socket.io',
      'MySQL',
      'Sequelize',
      'Next.js',
      'React Native',
      'Docker',
      'AWS',
    ],
  },
  {
    id: 2,
    title: 'Mahindra Lifespaces',
    link: '',
    description:
      'Mahindra Lifespaces mobile app streamlined the process of onboarding and managing users who bought property from Mahindra. With the help of the application, customers can do documentation and payment processes in the comfort of their homes.',
    img: mahindraLifespacesImage,
    tags: ['React Native', 'Redux Toolkit', 'RTK Query', 'Styled Components'],
  },
  {
    id: 3,
    title: 'Unthread',
    link: '',
    description:
      'A global E-Commerce platform primarily focused on online jewellery and fashion stores. User can register on Unthread and create a store with existing theme template.',
    img: placeholderImage,
    tags: ['Next.js', 'Storybook', 'Microservices', 'Node.js', 'MongoDB'],
  },
  {
    id: 4,
    title: 'CaptainBiz',
    link: 'https://captainbiz.com/invoice',
    description:
      'A Invoice generator where user can print or share invoices over email and WhatsApp. Invoice templates suitable for all types of businesses - traders, manufacturers, wholesalers, retailers, and services-based businesses. Include important notes for your clients, along with payment terms and conditions.',
    img: captainBizImage,
    tags: ['React.js', 'SCSS', 'Redux Toolkit'],
  },
];

export default data;
