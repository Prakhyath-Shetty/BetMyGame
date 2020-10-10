import * as express from "express";
import * as jwt from "jsonwebtoken";

export function authMiddlewareFactory() {
  return (config: { role: string }) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction): void => {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];

      if (token === null) {
        res.status(403).json({ Error: "UnAuthorized" });
        return;
      }

      jwt.verify(token as string, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
        console.error(err);
        if (err) return res.status(403).json({ Error: "UnAuthorized" });
        console.log("authenticated", user);
        next(); // * pass the execution off to whatever request the client intended
      });
      next();
    };
  };
}
