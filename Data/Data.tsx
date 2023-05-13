import {
    ContactsProps,
    countUpItemsProps,
    NavLink,
    ProjectProps,
    ServiceProps,
  } from "@/Types";
  import { BsVectorPen, BsCode } from "react-icons/bs";
  import { FiBarChart } from "react-icons/fi";
  import { HiMagnifyingGlass } from "react-icons/hi2";
  
  
  const services: ServiceProps[] = [
    { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
    { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
    { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
    { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
  ];
  
  const countUpItems: countUpItemsProps[] = [
    {
      id: 1,
      number: 9,
      text: "Years of Experience",
    },
    {
      id: 2,
      number: 178,
      text: "Satisfied Customers",
    },
    {
      id: 3,
      number: 742,
      text: "Design Items",
    },
    {
      id: 4,
      number: 112,
      text: "Clients Served",
    },
  ];
  const navLinks: NavLink[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skill", label: "skill" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];
  

  
  
  const projects: ProjectProps[] = [
    {
      id: 1,
      img: "/project1.png",
      name: "Random Password Generator",
      tools: ["React", "Typescript", "Tailwind CSS"],
    },
    {
      id: 2,
      img: "/project2.jpg",
      name: "React E-commerce Website",
      tools: ["React", "Tailwind CSS"],
    },
    {
      id: 3,
      img: "/project3.jpg",
      name: "Shopping Cart",
      tools: ["React", "Redux-Toolkit", "Tailwind CSS"],
    },
    {
      id: 4,
      img: "/project4.jpg",
      name: "Autocomplete SearchBar",
      tools: ["React", "Typescript", "Tailwind CSS"],
    },
  ];
  
  const skills = [
    { name: "Python", level: 85 },
    { name: "Java", level: 70 },
    { name: "C++", level: 80 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 73 },
    { name: "JavaScript", level: 75 },
    { name: "TypeScript", level: 63 },
    { name: "ReactJS", level: 72 },
    { name: "NextJS", level: 68 },
    { name: "SQL", level: 75 },
  ];
  
  const contacts: ContactsProps[] = [
    { id: 1, title: "Address", text: "Costa Rica, Puntarenas, Golfito" },
    { id: 2, title: "Phone", text: "+506 64709761" },
    { id: 3, title: "Email", text: "adrian.host96@gmail.com" },
  ];
  
  export {navLinks, projects, countUpItems, services, skills, contacts };