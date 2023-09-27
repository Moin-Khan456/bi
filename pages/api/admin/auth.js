import connection from "../../../server/config";
import Users from "../../../server/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({
      msg: "Only POST requests are allowed!!!",
    });
    return;
  }

  const { email, password } = req.body;

  try {
    return new Promise(async (resolve, reject) => {
    await connection();
      if (!email || !password) {
        return res.json({
          error: true,
          success: false,
          message: "An required field is missing from the given input!!!",
        });
      }
      const users = await Users.findOne({ email: email });

      if (users == null) {
        return res.json({
          error: true,
          success: false,
          message: "Users not found with the inserted email!!!",
        });
      } else {
        const match = bcrypt.compareSync(password, users.password);

        if (!match) {
          return res.json({
            error: true,
            success: false,
            message: "Password mismatch!!!",
          });
        } else {
          const token = jwt.sign({ _id: users._id }, "3277426269", {
            expiresIn: "180000000000s",
          });

          return res.json({
            error: false,
            success: true,
            message: "Users logined successfully....",
            users: users,
            token: token,
          });
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
