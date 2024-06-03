import Banner from "@/components/Banner/Banner";
import Project from "@/components/projectArea/Project";
import Navbar from "@/components/shared/Navbar";
import Skill from "@/components/skill/Skill";

const Homepage = () => {
  return (
    <div className="bg-[#161516]">
      <Navbar />
      <Banner />
      <Skill />
      <Project />
    </div>
  );
};

export default Homepage;
