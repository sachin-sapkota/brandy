import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/benefit-two.png';

const benefitOne = {
  title: 'Boost your digital marketing',
  desc: 'You can use this space to highlight the benefits of using our digital marketing website. It can also contain an image or illustration like in the example along with some bullet points.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Understand your customers',
      desc: 'Gain valuable insights about your target audience and understand their behavior and preferences.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Improve acquisition',
      desc: 'Enhance your customer acquisition strategies and attract more leads to your business.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Drive customer retention',
      desc: 'Increase customer loyalty and retention rates by implementing effective digital marketing campaigns.',
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Discover more advantages',
  desc: 'You can use this same layout with a flip image to highlight other advantages of using our digital marketing website. It can also contain an image or illustration as in the above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Data-driven decision making',
      desc: 'Make informed business decisions based on data-driven insights and analytics.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Targeted marketing campaigns',
      desc: 'Reach your ideal audience with precision targeting and personalized marketing campaigns.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Social media integration',
      desc: 'Effortlessly connect and engage with your audience across various social media platforms.',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
