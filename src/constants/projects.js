import aerio from "../assets/projects/aerio.png";
import chef from "../assets/projects/chef.png";
import draw from "../assets/projects/draw.png";
import gloflex from "../assets/projects/gloflex.png";
import hospital from "../assets/projects/hospital.png";
import hugot from "../assets/projects/hugot.png";
import weather from "../assets/projects/weather.png";

const projects = [
  {
    image: draw,
    title: "Draw Collab",
    desc: "Draw with people together in real time with Draw Collab! Take note of one minute server cold start though. Built using Socket.IO, the app synchronizes drawing actions across all connected clients in real time.",
    tags: [
      "JavaScript",
      "ExpressJS",
      "SocketIO",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    github:
      "https://github.com/francogabrieloliveros/collaborative-drawing-app-client.git",
    website: "https://collaborative-drawing-app-client.vercel.app/",
  },
  {
    image: gloflex,
    title: "GLOFLEX",
    desc: "GLOFLEX is an assistive technology device designed to bridge communication barriers between deaf or mute individuals and the wider community. By converting predefined sign language gestures into audible speech, the system aims to reduce social isolation and promote inclusive communication.",
    tags: ["Arduino", "C"],
    github: "https://github.com/francogabrieloliveros/gloflex.git",
  },
  {
    image: hospital,
    title: "Hospital Logbook with JavaFX",
    desc: "Manage hospital operations using Hospital Logbook system built with JavaFX. With its intuitive UI, you can record staffs, patients, lab exams, lab requests while automatically logging actions. It also has a dashboard which summarizes all the information held by the system.",
    tags: ["Java", "JavaFX", "CSS"],
    github: "https://github.com/francogabrieloliveros/CMSC22_FINAL_PROJECT.git",
  },
  {
    image: aerio,
    title: "Aerio Katharos",
    desc: "Approximate the smallest cost to meet the pollutant reduction goals of City of Greenvale. By selecting different mitigation projects, Simplex Minimization will provide the optimum cost.",
    tags: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    github:
      "https://github.com/francogabrieloliveros/greenvale-pollutant-reduction-project",
    website: "https://greenvale-pollutant-reduction-proje.vercel.app/",
  },
  {
    image: hugot,
    title: "Hugot Hanay",
    desc: "Inspired by Minute Cryptic, test your Filipino knowledge with Hugot Hanay's blending wit, wordplay, and linguistic creativity to highlight that Filipino is not an inferior language, but a language of its own.",
    tags: ["JavaScript", "React", "Tailwind CSS", "Vite"],
    github: "https://github.com/francogabrieloliveros/hugot-hanay.git",
    website: "https://hugot-hanay.vercel.app/",
  },
  {
    image: chef,
    title: "Chef Bot",
    desc: "Can't thing of a dish to cook? Ask chef bot! Powered by Mistral AI, chef bot gives you recipe reccomendations based on the ingredients you have left on your kitchen and have given to chefbot.",
    tags: ["JavaScript", "React", "Mistral AI", "Vite"],
    github: "https://github.com/francogabrieloliveros/chef_bot.git",
    website: "https://chef-bot-three.vercel.app/",
  },
  {
    image: weather,
    title: "Weather Program",
    desc: "See the weather anywhere in the world. Just type your city name and the website will give you the temperature, humidity, with an intuitive background, as well as weather predictions in the next few hours.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/francogabrieloliveros/weather_program.git",
    website: "https://weather-program-steel.vercel.app/",
  },
];

export default projects;
