import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Wrapper from "@/components/Wrapper";
import { AiFillGithub } from "react-icons/ai";

type Project = {
  id: number;
  name: string;
  html_url: string;
};

const proyect_github = "https://api.github.com/users/poke1896/repos";

// Proyectos Web
const customProjectsWeb = [
  {
    id: "custom-1",
    name: "Catálogo Moth",
    image: "/image/s1.png",
    url: "https://catalogo-moth-forge.vercel.app/"
  },
  {
    id: "custom-4",
    name: "TO DO LISt",
    image: "/image/s3.png",
    url: "https://react-redux-to-dolist.vercel.app/"
  }
];

// Proyectos Móviles
const customProjectsMobile = [
  {
    id: "custom-3",
    name: "App de Tareas",
    image: "/image/app-tareas.jpg",
    url: "https://play.google.com/store/apps/details?id=com.miapp.tareas"
  },
  {
    id: "custom-2",
    name: "Gestión Emergencias",
    image: "/image/s2.jpg",
    url: " "
 
  }
];

export default function Portfolio(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
    const intervalId = setInterval(fetchProjects, 9000);
    return () => clearInterval(intervalId);
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
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const projectTransition = {
    type: "spring",
    stiffness: 400,
    damping: 25
  };

  return (
    <>
      <Head>
        <title>Valverde | Portfolio</title>
      </Head>
      <Wrapper pageIndex={4}>
        <div className="flex flex-col text-center pt-40 items-center">

          <h1 className="text-white text-4xl font-bold border-b-2 border-turquoise mb-10">
            Portfolio
          </h1>

          {/* Proyectos Web */}
          <h2 className="text-white text-2xl font-semibold mb-6">Web Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 md:px-8 mb-16">
            {customProjectsWeb.map((project) => (
              <motion.div
                key={project.id}
                className="bg-Blur shadow-ShadowBlur p-4 rounded-lg"
                initial="initial"
                whileHover="hover"
                transition={projectTransition}
                variants={projectVariants}
              >
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-md mb-2"
                  />
                  <p className="text-white font-medium text-lg">{project.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Proyectos Móviles */}
          <h2 className="text-white text-2xl font-semibold mb-6">Mobile Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 md:px-8 mb-16">
            {customProjectsMobile.map((project) => (
              <motion.div
                key={project.id}
                className="bg-Blur shadow-ShadowBlur p-4 rounded-lg"
                initial="initial"
                whileHover="hover"
                transition={projectTransition}
                variants={projectVariants}
              >
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[500px] object-cover rounded-md mb-2"
                  />
                  <p className="text-white font-medium text-lg">{project.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Repositorios de GitHub */}
          <h2 className="text-white text-2xl font-semibold mb-6">GitHub Repositories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-8">
            {projects.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                className="shadow-ShadowBlur bg-Blur p-4 rounded-lg"
                initial="initial"
                whileHover="hover"
                transition={projectTransition}
                variants={projectVariants}
              >
                <Link
                  className="text-white flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.html_url}
                >
                  <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                  {project.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botón para ver todos los repos */}
          <Link
            href="https://github.com/poke1896?tab=repositories"
            target="_blank"
            className="mt-6 text-white bg-turquoise px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
          >
            all projects on
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
