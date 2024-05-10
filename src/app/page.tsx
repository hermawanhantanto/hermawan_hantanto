/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/Hero";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import InstagramIcon, { Instagram, XIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-slate-50 w-full min-h-screen">
      <section>
        <Hero />
      </section>

      <section className="py-20 bg-slate-100 my-20" id="about">
        <MaxWidthWrapper className="flex flex-col max-lg:p-5">
          <div className="flex flex-col">
            <h2 className="sm:text-5xl text-4xl font-bold text-center w-fit self-center relative">
              About Me
              <Icons.line className="inset-x-0 w-full text-green-600 absolute top-8" />
            </h2>
            <div className="flex flex-col gap-6 pt-20">
              <p className="text-gray-600">
                As a full-stack web developer with expertise in{" "}
                <span className="font-semibold">
                  React, Next.js, TypeScript, JavaScript, Tailwind CSS, MySQL,
                  MongoDB, Laravel, and Express.js
                </span>
                , I build dynamic and scalable web applications from start to
                finish. I am passionate about creating intuitive user interfaces
                and seamless user experiences, ensuring both the front-end and
                back-end work together flawlessly.
              </p>
              <p className="text-gray-600">
                My experience covers a wide range of projects, from crafting
                interactive user interfaces with React and Next.js to building
                robust back-end systems with Laravel and Express.js. I leverage
                the power of TypeScript and JavaScript to write{" "}
                <span className="font-semibold">
                  clean, efficient, and maintainable code
                </span>
                . Additionally, my proficiency in Tailwind CSS enables me to
                create visually appealing and responsive designs.
              </p>
              <p className="text-gray-600">
                Whether it&apos;s designing user-friendly interfaces, managing
                databases with MySQL or MongoDB, or implementing server-side
                logic, I have the skills and experience to bring your web
                development projects to life.
              </p>
              <p className="text-gray-600">
                I am a valuable asset to any team seeking a full-stack developer
                who is passionate about building high-quality web applications
                with a focus on performance, scalability, and user experience.
              </p>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center">
              <h4 className="font-semibold text-lg text-center">
                Follow me on:
              </h4>
              <div className="flex items-center gap-3 mt-8 justify-center">
                <div className="w-10 h-10 rounded-full bg-white shadow hover:bg-white/60">
                  <Link
                    className="w-full h-full flex items-center justify-center"
                    href="https://www.instagram.com/hermawanhant"
                  >
                    <Image
                      src="instagram.svg"
                      width={20}
                      height={20}
                      alt="instagram"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-white shadow hover:bg-white/60 ">
                  <Link
                    className="w-full h-full flex items-center justify-center"
                    href="https://www.linkedin.com/in/hermawan-hantanto-488944221"
                  >
                    <Image
                      src="linkedin.svg"
                      width={20}
                      height={20}
                      alt="linkedin"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-white shadow hover:bg-white/60 ">
                  <Link
                    className="w-full h-full flex items-center justify-center"
                    href="https://github.com/hermawanhantanto"
                  >
                    <Image
                      src="github.svg"
                      width={20}
                      height={20}
                      alt="github"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-white shadow hover:bg-white/60 ">
                  <Link
                    className="w-full h-full flex items-center justify-center"
                    href="https://twitter.com/HermawanHant"
                  >
                    <Image
                      src="twitter.svg"
                      width={20}
                      height={20}
                      alt="twitter"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-20" id="projects">
        <Projects />
      </section>
    </div>
  );
}
