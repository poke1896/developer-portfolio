import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";

type Project = {
  id: number;
  name: string;
  html_url: string;
};

export default function Portfolio(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects(); // Fetch inicial de proyectos

    const intervalId = setInterval(fetchProjects, 3000); // Ejecutar fetch cada 5 segundos

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    };
  }, []);

  const fetchProjects = (): void => {
    fetch("https://api.github.com/users/poke1896/repos")
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

  return (
    <>
      <Head>
        <title>Valverde | Portfolio</title>
      </Head>
      <Wrapper pageIndex={4} className="bg-black flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white" style={{ fontSize: "3rem", margin: "2rem 0", fontWeight: "bold", borderBottom: "2px solid turquoise" }}>Portfolio</h1>
          <div className="flex flex-wrap justify-center">
            {projects.map((project) => (
              <div key={project.id} className="projectCard bg-gray-800 p-4 rounded-lg m-2">
                <Link className="text-white" href={project.html_url}>
                  {project.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
