const correctPassword = "Dv3277426269@p";

export default function handler(req, res) {
  if (req.method === "POST") {
    const enteredPassword = req.body.password;

    if (enteredPassword === correctPassword) {
      res.redirect(302, "https://braininventoryblogs.com/wordpress");
    } else {
      res.status(401).json({ error: "Wrong password" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
