import { SkillBarProps } from "@/Types";
import { useEffect, useRef, useState } from "react";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiHtml5
} from "react-icons/si";
import { DiJava, DiReact } from "react-icons/di";


export default function Skills({ skills }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number[]>(skills.map(() => 0));
  const [animatedProgress, setAnimatedProgress] = useState<number[]>(
    skills.map(() => 0)
  );

  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible && !visible) {
          setVisible(true);
          setProgress(skills.map((skill) => skill.level));
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [skills, visible]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedProgress((prevProgress) =>
        prevProgress.map((value, index) => {
          const diff = progress[index] - value;
          const step = Math.ceil(diff / 10);
          return value + step;
        })
      );
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [progress]);

  return (
    <div className="bg-red text-white">
      <div className="text-WhiteGray font-semibold uppercase text-sm text-center py-4">
        Technologies
      </div>
      <div className="font-semibold text-3xl mt-4 text-center">
        MY SKILLS
      </div>
      <div ref={ref} className="grid md:grid-cols-2 gap-4 p-10">
        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-White">{skill.name}</span>
              <span className="font-bold text-WhiteGray text-sm">
                {animatedProgress[index]}%
              </span>
            </div>
            <div className="relative w-full h-2 bg-WhiteGray rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-Turquoise rounded-full"
                style={{
                  width: `${visible ? animatedProgress[index] : 0}%`,
                  transition: "width 1s",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col grid grid-cols-5 gap-4 justify-center items-center text-White p-4 md:p-10">

        <SiPython className="text-White text-6xl" />
        <SiCplusplus className="text-White text-6xl" />
        <DiJava className="text-White text-6xl" />
        <SiJavascript className="text-White text-6xl" />
        <SiCss3 className="text-White text-6xl" />
        <SiTypescript className="text-White text-6xl" />
        <DiReact className="text-White text-6xl" />
        <SiNextdotjs className="text-White text-6xl" />
        <SiMysql className="text-White text-6xl" />
        <SiHtml5 className="text-White text-6xl" />

      </div>

    </div>

  );
}
