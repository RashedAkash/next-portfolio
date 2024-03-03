import About from '@/components/About';

export const metadata = {
  title: "About",
  description: "This is about page",
};

const page = () => {
  return (
    <div className=' py-16'>
      <About />
    </div>
  );
};

export default page;