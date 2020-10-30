import { Express } from 'express';
import bcrypt from 'bcrypt-nodejs';
import { authSecret } from '../.env';
import jwt from 'jwt-simple';

module.exports = (app: Express) => {
  const signin = async (req: any, res: any) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send('Dados incompletos');
    }

    const user = await app.db('users').whereRaw('LOWER(email) = LOWER(?)', req.body.email).first();
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).send('A senha informada é inválida');
        }

        const payload = { id: user.id };
        res.json({
          name: user.name,
          email: user.email,
          token: jwt.encode(payload, authSecret),
        });
      });
    } else {
      res.status(400).send('Usuário não cadastrado!');
    }
  };

  return { signin };
};
