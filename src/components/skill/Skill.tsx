import Image from "next/image";

export interface NewSkill {
  name: string;
  image: string;
  percentage: number;
}

const Skill = ({ skills }: { skills: NewSkill[] }) => {
  // console.log(skills);
  return (
    <div className="py-8">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">
        MY WORK SKILLS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4  mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-[rgb(83,40,102)] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-2 border-white text-white"
          >
            <Image
              src={skill.image}
              alt={`${skill.name} Icon`}
              width={64}
              height={20}
              className="mb-4 h-16"
            />
            <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
            <div className="w-full rounded-full h-4 mb-2">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <p className="text-white">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
