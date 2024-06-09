import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/blogs/Blog";
import Project from "@/components/projectArea/Project";
import Navbar from "@/components/shared/Navbar";
import Skill from "@/components/skill/Skill";

const Homepage = () => {
  return (
    <div className="bg-[#161516]">
      <div className="mx-4">
        <Banner />
        <Skill />
        <Project />
        <Blog />
      </div>
    </div>
  );
};

export default Homepage;
