import connection from "../../../server/config";
import Data from "../../../server/models/data";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({
      msg: "Only GET requests are allowed!!!",
    });
    resolve();
    return;
  }

  try {
    await connection();
    return new Promise(async (resolve, reject) => {
      const count = await Data.count();
      const geo = await Data.find();
      resolve();
      return res.json({
        TotalUserCount: count,
        locations: geo,
      });
    });
  } catch (error) {
    console.log({ error });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
