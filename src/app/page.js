import About from '@/components/About';
import Contact from '@/components/Contact';
import Banner from '@/components/Banner';
import MySkills from '@/components/MySkills';
import Experience from '@/components/Experience';


const page = () => {
  return (
    <div>
    <Banner />
      <About />
      <Experience />
      <Contact />
      <MySkills />
    </div>
  );
};

export default page;