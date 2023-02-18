import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  try {
    if (!authorization) return res.sendStatus(401);

    const token = authorization.replace('Bearer', '').trim();

    const data = verify(token, `${process.env.SECRET_KEY}`);

    const { id } = data as TokenPayload;
    req.userId = id;

    return next();
  } catch (error) {
    res.sendStatus(401);
  }
}

export { authMiddleware };
