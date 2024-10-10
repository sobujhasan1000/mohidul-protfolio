import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export interface NewSkill {
  name: string;
  image: string;
  percentage: number;
}

const SkillCard = ({
  image,
  name,
  percentage,
}: {
  image: string;
  name: string;
  percentage: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center">
        <Image
          className="mb-4 h-16"
          width="64"
          height="20"
          alt={`${name} Icon`}
          src={image}
        />
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
        <div className="w-full rounded-full h-4 mt-2 bg-gray-200">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-xs font-medium dark:text-white/40 mt-2">
          {percentage}%
        </p>
      </div>
    </figure>
  );
};

const SkillMarquee = ({ skills }: { skills: NewSkill[] }) => {
  const firstRow = skills.slice(0, skills.length / 2);
  const secondRow = skills.slice(skills.length / 2);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-red-100 md:shadow-xl">
      {/* First Row Marquee */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Second Row Marquee (Reversed) */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Left and Right Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default SkillMarquee;
