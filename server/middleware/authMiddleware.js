import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    if (decoded._id) {
      req.body.userId = decoded._id;
    } else {
      return res.status(401).json({ message: "Not authenticated" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authenticated" });
  }
};
