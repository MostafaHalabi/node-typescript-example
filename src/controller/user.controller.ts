import { Request, Response } from 'express';
import { CreateUserInput } from '../schema/user.schema';
import { DocumentDefinition } from 'mongoose';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.status(200).json({
      status: 'Success',
      message: 'User was created successfully',
      user,
    });
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}
