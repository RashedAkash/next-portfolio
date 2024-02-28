import About from '@/components/About';
import Contact from '@/components/Contact';
import Banner from '@/components/Banner';
import MySkills from '@/components/MySkills';


const page = () => {
  return (
    <div>
    <Banner />
      <About />
      <Contact />
      <MySkills />
    </div>
  );
};

export default page;