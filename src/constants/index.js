import {
  layers,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    threejs,
    pizza,
    tic,
    webscope,
    cart,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: layers,
    },
    {
      title: "React Developer",
      icon: layers,
    },
    {
      title: "Web Extension Developer",
      icon: layers,
    },
    {
      title: "Python Programmer",
      icon: layers,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  
  
  
  const projects = [
    {
      name: "Pizza site",
      description:
        "Web-based platform to display different types of pizzas offered by a restaurent",
      image: pizza,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "A simple tic tac toe game in which we can go back to previous steps also",
      image: tic,
      source_code_link: "https://github.com/JP-GECT/TIC-TAC-TOE-GAME.git",
    },
    {
      name: "Shopping Site",
      description:
        "Not a complete website, can be used to display different products offered by an online shopping site",
      image: cart,
      source_code_link: "https://github.com/JP-GECT/shoppingsite.git",
    },
    {
      name: "WebScope",
      description:
        "A web extension to display the reading time and number of external links to other websites",
      
      image: webscope,
      source_code_link: "https://github.com/JP-GECT/WebScope.git",
    },
  ];
  
  export { services, technologies,  projects };