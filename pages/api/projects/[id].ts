import { prisma } from '@/lib/prisma/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'PUT'){
    const projectId = parseInt(req.query.id as string);
    const {name} = JSON.parse(req.body);

    const result = await prisma.projects.update({
        where: {id: projectId},
        data: {name} 
    })
    res.json(result);
  }

  if(req?.method === 'DELETE'){
    const projectId = parseInt(req.query.id as string)
    const result = await prisma.projects.delete({
        where: {id: projectId},
    })
    res.json(result);
  }
}
