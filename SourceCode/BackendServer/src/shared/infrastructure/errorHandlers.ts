import * as express from "express";

export const clientErrorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
};

export const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500);
  res.render("error", { error: err });
};
