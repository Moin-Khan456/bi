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

  const { fname, lname, email, phone, password } = req.body;
  try {
    return new Promise(async (resolve, reject) => {
      await connection();
      if (!fname || !lname || !email || !phone || !password)
        res.json({
          error: true,
          success: false,
          message: "some of the fields are missing!!!",
        });
      const check = await Users.findOne({ email: email });
      console.log(check, "check");

      if (check == null) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const users = new Users({
          fname,
          lname,
          email,
          phone,
          password: hashedPassword,
        });
        Users.create(users)
          .then((resp) =>
            res.json({
              error: false,
              success: true,
              message: "Users registered successfully....",
            })
          )
          .catch((err) => {
            res.json({
              error: true,
              success: false,
              message:
                "An internal server error has been occurred while registering!!!!",
              err,
            });
          });
      } else {
        res.json({
          error: true,
          success: false,
          message: "An users already registered with this email!!!!",
        });
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

// import connection from "../../../server/config";
// import Data from "../../../server/models/data";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     res.status(405).send({
//       msg: "Only POST requests are allowed!!!",
//     });
//     return;
//   }

//   await connection();
//   return new Promise(async (resolve, reject) => {
//     try {
//       const data = await Data.create(req.body);
//       console.error("Checkpoint");
//       res
//         .status(200)
//         .json({ message: "User detail added successfully!", data });
//       resolve();
//     } catch (err) {
//       console.log(err);
//       resolve();
//     }
//   });
// }
// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };
