/* eslint-disable @next/next/no-img-element */
import { Code, Eye } from "lucide-react";
import Link from "next/link";
import { IProject } from "./Projects";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "./ui/card";

const ProjectCard = ({
  title,
  description,
  imgSrc,
  imgAlt,
  linkGithub,
  linkDemo,
}: IProject) => {
  return (
    <Card className="bg-slate-100 cursor-pointer relative group">
      <CardHeader className="flex justify-center items-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="object-contain w-full h-full"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <div className="absolute bottom-0 justify-center bg-gray-200/75 inset-x-0 h-14 flex items-center group-hover:opacity-100 opacity-0 transition-all duration-200 ease-linear gap-4">
        <Link
          href={linkGithub}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow"
        >
          <Code className="w-5 h-5" />
        </Link>
        <Link
          href={linkDemo}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow"
        >
          <Eye className="w-5 h-5" />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
