const { connectToDatabase } = require("../../../lib/db");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let { db } = await connectToDatabase();
      console.log(req.body);
      console.log(db);

      return res.json({
        message: JSON.parse(JSON.stringify(posts)),
        success: true,
      });
    } catch (error) {
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  }
}
