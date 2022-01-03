import { NextApiRequest, NextApiResponse } from "next";

import { api } from "../../../services/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { data } = await api.get("/episode");
    console.log("🚀 ~ data", data);

    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);

    res.status(err.status).json(null);
  }
}
