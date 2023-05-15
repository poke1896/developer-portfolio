import {
    ContactsProps,
    countUpItemsProps,
    NavLink,
    ProjectProps,
    ServiceProps,
  } from "@/Types";
 
  

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
    { path: "/skill", label: "Skill" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
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
    { id: 2, title: "Phone", text: "+506-64709761" },
    { id: 3, title: "Email", text: "adrian.host96@gmail.com" },
  ];
  
  export {navLinks, countUpItems, skills, contacts };