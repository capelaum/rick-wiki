// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

import { api } from "../../../services/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  console.log("🚀 ~ id", id);

  try {
    const { data } = await api.get(`/episode/${id}`);
    console.log("🚀 ~ data", data);
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);

    res.status(err.status).json(null);
  }
}
