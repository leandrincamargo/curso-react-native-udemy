import { Express } from 'express';
import bcrypt from 'bcrypt-nodejs';

module.exports = (app: Express) => {
  const obterHash = (password: string, callback: any) => {
    bcrypt.genSalt(10, (_, salt) => {
      bcrypt.hash(password, salt, null, (_, hash) => callback(hash));
    });
  };

  const save = (req: any, res: any) => {
    obterHash(req.body.password, (hash: any) => {
      const password = hash;

      app
        .db('users')
        .insert({ name: req.body.name, email: req.body.email.toLowerCase(), password })
        .then((_: any) => res.status(204).send())
        .catch((err: any) => res.status(400).json(err));
    });
  };
  return { save };
};
