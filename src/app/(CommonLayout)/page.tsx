import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/blogs/Blog";
import Project from "@/components/projectArea/Project";
import Skill, { NewSkill } from "@/components/skill/Skill";

const Homepage = async () => {
  const res = await fetch(`${process.env.API_URL}/api/skill`);
  const data = await res.json();

  // Extract the skill array from the data
  const skills: NewSkill[] = data.skill;

  return (
    <div className="bg-[#161516]">
      <div className="mx-4">
        <Banner />
        <Skill skills={skills} />
        <Project />
        <Blog />
      </div>
    </div>
  );
};

export default Homepage;
