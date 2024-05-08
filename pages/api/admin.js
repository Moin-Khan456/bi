const { connectToDatabase } = require("../../lib/db");

export default function handler(req, res) {
  switch (req.method) {
    case "GET": {
      return getBlogs(req, res);
    }
    case "POST": {
      return addBlog(req, res);
    }
  }
}

async function getBlogs(req, res) {
  try {
    let { db } = await connectToDatabase();
    let blogsMetaData = await db.collection("blogsMetaData").find({});

    return res.json({
      message: JSON.parse(JSON.stringify(blogsMetaData)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function addBlog(req, res) {
  try {
    return res.json({
      message: JSON.parse(JSON.stringify([])),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
