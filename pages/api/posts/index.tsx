import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";

export default async function fetchPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.posts.findMany();
  console.log("From api route -->", result);
  res.json(result);
}
