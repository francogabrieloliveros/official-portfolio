import arrowLeftIcon from "./arrow-left.svg";
import arrowRightIcon from "./arrow-right.svg";
import cIcon from "./c.svg";
import calendarIcon from "./calendar.svg";
import downloadIcon from "./download.svg";
import expressIcon from "./express.svg";
import githubIcon from "./github.svg";
import globeIcon from "./globe.svg";
import javaIcon from "./java.svg";
import javascriptIcon from "./javascript.svg";
import locationIcon from "./location.svg";
import mongoIcon from "./mongo.svg";
import nodeIcon from "./node.svg";
import pythonIcon from "./python.svg";
import rIcon from "./r.svg";
import reactIcon from "./react.svg";
import resumeIcon from "./resume.svg";
import tailwindIcon from "./tailwind.svg";
import linkedinIcon from "./linkedin.svg";
import emailIcon from "./email.svg";

const createIcon = (src, altText) => {
  const Icon = ({ w = "19px", className = "" }) => (
    <img src={src} alt={altText} style={{ width: w }} className={className} />
  );
  return Icon;
};

const Icons = {
  arrowLeft: createIcon(arrowLeftIcon, "arrow left"),
  arrowRight: createIcon(arrowRightIcon, "arrow right"),
  c: createIcon(cIcon, "c"),
  calendar: createIcon(calendarIcon, "calendar"),
  download: createIcon(downloadIcon, "download"),
  express: createIcon(expressIcon, "express"),
  github: createIcon(githubIcon, "github"),
  globe: createIcon(globeIcon, "globe"),
  java: createIcon(javaIcon, "java"),
  javascript: createIcon(javascriptIcon, "javascript"),
  location: createIcon(locationIcon, "location"),
  mongo: createIcon(mongoIcon, "mongo"),
  node: createIcon(nodeIcon, "node"),
  python: createIcon(pythonIcon, "python"),
  r: createIcon(rIcon, "r"),
  react: createIcon(reactIcon, "react"),
  resume: createIcon(resumeIcon, "resume"),
  tailwind: createIcon(tailwindIcon, "tailwind"),
  linkedin: createIcon(linkedinIcon, "linkedin"),
  email: createIcon(emailIcon, "email"),
};

export default Icons;
