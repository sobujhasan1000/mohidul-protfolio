import Banner from "@/components/Banner/Banner";

import Project from "@/components/projectArea/Project";
import Skill, { NewSkill } from "@/components/skill/Skill";
import Blog, { BlogPost } from "@/components/blogs/Blog";

const Homepage = async () => {
  // Fetch skills
  const skillRes = await fetch(`${process.env.API_URL}/api/skill`);
  const skillData = await skillRes.json();
  const skills: NewSkill[] = skillData.skill;

  // Fetch blogs
  const blogRes = await fetch(`${process.env.API_URL}/api/blog`);
  const blogData = await blogRes.json();
  const blogs: BlogPost[] = blogData.blog;

  return (
    <div className="">
      <div className=" bg-[#545b68]">
        <Banner />
        <Skill skills={skills} />
        <Project />
        <Blog blogs={blogs} />
      </div>
    </div>
  );
};

export default Homepage;
