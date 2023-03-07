import HomePage from "@/components/Home"
import { prisma } from "@/lib/prisma/prisma"
import { Prisma } from "@prisma/client"
import { useRouter } from "next/router"

interface Props {
  projects : Prisma.ProjectsSelect[],
  refreshData: any,
}

export default function Home({projects} : Props) {
  const router = useRouter();
  const refreshData = () => {
   location.reload();
  }
  return (
    <>
      <HomePage projects={projects} refreshData={refreshData}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const projects = await prisma.projects.findMany();
  return {
    props : {projects}
  }
}
