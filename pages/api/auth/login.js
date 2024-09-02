const { connectToDatabase } = require("../../../lib/db");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();

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
