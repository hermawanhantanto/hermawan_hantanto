import { title } from "process";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProjectCard from "./ProjectCard";

export interface IProject {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  linkGithub: string;
  linkDemo: string;
}

const myProjects = [
  {
    title: "Visit Bali",
    description: "A tourism web platform for Bali Island",
    imgSrc:
      "https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/visit_bali.png",
    imgAlt: "Visit Bali",
    linkGithub: "https://github.com/hermawanhantanto/visit_bali",
    linkDemo: "https://visit-bali.vercel.app/",
  },
  {
    title: "Shortgram",
    description: "A social media web platform for sharing photos",
    imgSrc:
      "https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/shortgram.png",
    imgAlt: "Shortgram",
    linkGithub: "https://github.com/hermawanhantanto/shortgram",
    linkDemo: "https://shortgram.vercel.app/",
  },
  {
    title: "Devflow",
    description: "A community web platform for developers",
    imgSrc:
      "https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/devflow.png",
    imgAlt: "Devflow",
    linkGithub: "https://github.com/hermawanhantanto/devoverflow",
    linkDemo: "https://devflow-woad.vercel.app/",
  },
  {
    title: "Puri Medika",
    description: "A website for a medical clinic",
    imgSrc:
      "https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/puri_medika.png",
    imgAlt: "Puri Medika",
    linkGithub: "https://github.com/hermawanhantanto/puri_medika.git",
    linkDemo: "https://pw-2023-d-7-react.vercel.app/",
  },
  {
    title: "Nike Landing Page",
    description: "A clone of Nike landing page",
    imgSrc:
      "https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/nike_landing_page.png",
    imgAlt: "Nike Landing Page Clone",
    linkGithub: "https://github.com/hermawanhantanto/Nike-Landing-Page",
    linkDemo: "https://nike-clone-landing-page.vercel.app",
  },
  {
    title: "Edspert Landing Page",
    description: "A clone Edspert Education landing page",
    imgSrc:
      "https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/edspert.png",
    imgAlt: "Edspert Landing Page Clone",
    linkGithub: "https://github.com/hermawanhantanto/edspert-final-project.git",
    linkDemo: "https://edspert-final-project-five.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="max-lg:px-5">
      <MaxWidthWrapper className="flex flex-col">
        <h2 className="text-4xl sm:text-5xl font-bold max-lg:text-center">
          Latest Projects
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {myProjects.map((project: IProject) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imgAlt={project.imgAlt}
              imgSrc={project.imgSrc}
              linkDemo={project.linkDemo}
              linkGithub={project.linkGithub}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
