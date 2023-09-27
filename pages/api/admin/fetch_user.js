import connection from "../../../server/config";
import Data from "../../../server/models/data";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({
      msg: "Only POST requests are allowed!!!",
    });
    return;
  }

  await connection();
  return new Promise(async (resolve, reject) => {
    try {
      const { user, country } = req.body;
      console.log("Data:- ", req.body);
      const data = await Data.create({
        user,
        country,
      });
      res
        .status(200)
        .json({ message: "User detail added successfully!", data });
      resolve();
    } catch (err) {
      console.log(err);
      resolve();
    }
  });
}
export const config = {
  api: {
    externalResolver: true,
  },
};
