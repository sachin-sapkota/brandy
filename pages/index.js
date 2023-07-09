import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';

const Home = () => {
  return (
    <>
      <Head>
        <title>Brandy - Digital Marketing</title>
        <meta
          name="description"
          content="Boost your online presence and drive business growth with our comprehensive digital marketing services. We offer expert strategies tailored to enhance your SEO, PPC, social media, and content marketing efforts. Stay ahead of the competition with our cutting-edge techniques and leverage the power of trending keywords to reach your target audience effectively."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Brandy Benefits"
        title="Why should you choose Brandy for your digital marketing needs"
      >
        Brandy is a comprehensive digital marketing solution designed for
        businesses and individuals. It offers a wide range of features and tools
        to optimize your online presence and drive growth. Powered by advanced
        technologies and intuitive design, Brandy makes it easy to create and
        manage effective marketing campaigns.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Discover the power of Brandy"
      >
        This section is dedicated to showcasing a promotional or instructional
        video about Brandy's capabilities. Studies show that landing pages with
        videos experience a 3% higher conversion rate. Therefore, make sure to
        include one to captivate your audience.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="What our clients say about Brandy"
      >
        Testimonials play a crucial role in establishing trust and increasing
        brand awareness. Take this opportunity to highlight feedback from our
        satisfied customers who have experienced success with Brandy.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Address common questions and concerns your customers may have in this
        section. Providing clear and informative answers can boost conversion
        rates and encourage support or chat inquiries.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
