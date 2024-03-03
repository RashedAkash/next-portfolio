import Project from '@/components/Project';


export const metadata = {
  title: "Projects",
  description: "This is Projects page",
};

const page = () => {
  return (
    <div className=' py-20'>
     <Project />
    </div>
  );
};

export default page;