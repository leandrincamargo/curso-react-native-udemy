import { Express } from 'express';
import { authSecret } from '../.env';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

module.exports = (app: Express) => {
  const params = {
    secretOrKey: authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  const strategy = new Strategy(params, (payload, done) => {
    app
      .db('users')
      .where({ id: payload.id })
      .first()
      .then((user: any) => {
        if (user) {
          done(null, { id: user.id, email: user.email });
        } else {
          done(null, false);
        }
      })
      .catch((err: any) => done(err, false));
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: false }),
  };
};
