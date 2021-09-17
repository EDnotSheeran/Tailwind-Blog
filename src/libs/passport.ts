import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserById, findUserByUsername, validatePassword } from './db';

passport.serializeUser((user, done) => {
  // serialize the username into session
  done(null, user.id);
});

passport.deserializeUser(
  (
    req: NextApiRequest,
    id: string,
    done: (err: any, user?: false | Express.User | null | undefined) => void
  ) => {
    // deserialize the username back into user object
    const user = findUserById(req, id);
    done(null, user);
  }
);

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password',
    },
    (req, username, password, done) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = findUserByUsername(
        req as unknown as NextApiRequest,
        username
      );
      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      if (!user || !validatePassword(user, password)) {
        done(null, null);
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
