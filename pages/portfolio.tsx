import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Wrapper from "@/components/Wrapper";
import {AiFillGithub} from "react-icons/ai"

type Project = {
  id: number;
  name: string;
  html_url: string;
};
const proyect_github ='https://api.github.com/users/poke1896/repos'

export default function Portfolio(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects(); // Fetch inicial de proyectos

    const intervalId = setInterval(fetchProjects, 9000); // Ejecutar fetch cada 3 segundos

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    };
  }, []);

  const fetchProjects = (): void => {
    fetch(proyect_github)
      .then((response) => response.json())
      .then((data) => {
        const formattedProjects = data.map((project: any) => ({
          id: project.id,
          name: project.name,
          html_url: project.html_url
        }));
        setProjects(formattedProjects);
      })
      .catch((error) => {
        console.log("Error fetching GitHub projects:", error);
      });
  };

  const projectVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.1
    }
  };

  const projectTransition = {
    type: "spring",
    stiffness: 500,
    damping: 25
  };

  return (
    <>
      <Head>
        <title>Valverde | Portfolio</title>
      </Head>
      <Wrapper pageIndex={4} >
        <div className="flex flex-col text-center pt-40 items-center text-center">
          <h1
            className="text-white"
            style={{
              fontSize: "3rem",
              margin: "2rem 0",
              fontWeight: "bold",
              borderBottom: "2px solid turquoise"
            }}
          >
            Portfolio
          </h1>
          <div className="flex flex-wrap grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="projectCard shadow-ShadowBlur bg-Blur p-4  rounded-lg"
                initial="initial"
                whileHover="hover"
                transition={projectTransition}
                variants={projectVariants}
              >
                
                <Link className="text-white" target="_blank" rel="noopener noreferrer" href={project.html_url} passHref>
                <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300  " />
                    {project.name}
                              
                </Link>
                
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
