import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import prisma from '@lib/prisma';
import { User } from '@prisma/client';
import { validatePassword } from '@lib/auth';

passport.serializeUser<string>((user, done) => {
  // serialize the user id into session
  done(null, (user as User).id);
});

passport.deserializeUser(
  async (
    req: NextApiRequest,
    id: string,
    done: (err: any, user?: false | User | null) => void
  ) => {
    // deserialize the user id back into user object
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  }
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      // Looks up for the user
      const user = await prisma.user.findFirst({
        where: { email, deleted: false },
      });
      // Verifies if user exists and if the password is valid
      if (!user || !validatePassword(user, password)) {
        done(null, null);
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
