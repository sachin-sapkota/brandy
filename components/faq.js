import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: 'What digital marketing services do you offer?',
    answer:
      'We offer a wide range of digital marketing services, including search engine optimization (SEO), social media marketing, pay-per-click advertising (PPC), content marketing, email marketing, and more.',
  },
  {
    question: 'How can digital marketing benefit my business?',
    answer:
      'Digital marketing can benefit your business in several ways. It can help increase your online visibility, drive more traffic to your website, generate leads, improve brand awareness, engage with your target audience, and ultimately, boost your sales and revenue.',
  },
  {
    question: 'How do you measure the success of digital marketing campaigns?',
    answer:
      'We use various metrics and analytics tools to measure the success of digital marketing campaigns. These include website traffic, conversion rates, click-through rates (CTR), engagement metrics, return on investment (ROI), and more. We provide regular reports and insights to help you track the performance and effectiveness of your campaigns.',
  },
  {
    question:
      'Can you customize digital marketing strategies to suit my business needs?',
    answer:
      'Yes, we understand that each business is unique, and we tailor our digital marketing strategies to meet your specific needs and goals. We conduct thorough research and analysis of your industry, target audience, competitors, and business objectives to create customized strategies that deliver the best results for your business.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'The timeframe to see results from digital marketing can vary depending on various factors, such as the competitiveness of your industry, the specific strategies implemented, your target audience, and your business goals. Generally, you can start seeing some initial results within a few months, but significant improvements and long-term success require an ongoing commitment to digital marketing.',
  },
];

export default Faq;
