import HomePage from "@/components/Home";
import { prisma } from "@/lib/prisma/prisma";
import { Prisma } from "@prisma/client";

interface Props {
  projects: Prisma.ProjectsSelect[];
}

export default function Home({ projects }: Props) {
  return (
    <>
      <HomePage projects={projects} />
    </>
  );
}

export const getServerSideProps = async () => {
  const projects = await prisma.projects.findMany();
  return {
    props: { projects },
  };
};
