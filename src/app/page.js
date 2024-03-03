import About from '@/components/About';
import Contact from '@/components/Contact';
import Banner from '@/components/Banner';
import MySkills from '@/components/MySkills';
import Experience from '@/components/Experience';
import Project from '@/components/Project';

export const metadata = {
  title: "Home",
  description: "This is Home page",
};
const page = () => {
  return (
    <div>
      <Banner />
      <Project />
      <About />
      <Experience />
      <Contact />
      <MySkills />
    </div>
  );
};

export default page;