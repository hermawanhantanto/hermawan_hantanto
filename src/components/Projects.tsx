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
    title: "Shortgram",
    description: "A social media web platform for sharing photos",
    imgSrc:
      "https://storage.cloud.google.com/my-storage-dicoding123/shortgram.png",
    imgAlt: "Shortgram",
    linkGithub: "https://github.com/hermawanhantanto/shortgram",
    linkDemo: "https://shortgram.vercel.app/",
  },
  {
    title: "Visit Bali",
    description: "A tourism web platform for Bali Island",
    imgSrc:
      "https://storage.cloud.google.com/my-storage-dicoding123/visit_bali.png",
    imgAlt: "Visit Bali",
    linkGithub: "https://github.com/hermawanhantanto/visit_bali",
    linkDemo: "https://visit-bali.vercel.app/",
  },
  {
    title: "Devflow",
    description: "A community web platform for developers",
    imgSrc:
      "https://storage.cloud.google.com/my-storage-dicoding123/Devflow.png",
    imgAlt: "Devflow",
    linkGithub: "https://github.com/hermawanhantanto/devoverflow",
    linkDemo: "https://devflow-woad.vercel.app/",
  },
  {
    title: "Nike Landing Page Clone",
    description: "A clone of Nike landing page",
    imgSrc:
      "https://storage.cloud.google.com/my-storage-dicoding123/nike-landing-page.png",
    imgAlt: "Nike Landing Page Clone",
    linkGithub: "https://github.com/hermawanhantanto/Nike-Landing-Page",
    linkDemo: "https://nike-clone-landing-page.vercel.app",
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
