import { Prisma } from "@prisma/client";
export interface Props {
  projects: Prisma.ProjectsSelect[];
}
