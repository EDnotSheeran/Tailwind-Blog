import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export function getAllUsers(req: NextApiRequest) {
  // For demo purpose only. You are not likely to have to return all users.
  return req.session.users;
}

export function createUser(
  req: NextApiRequest,
  { username, password, name }: UserFields
) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    name,
    hash,
    salt,
  };

  // Here you should insert the user into the database
  // await db.createUser(user)
  req.session?.users?.push(user);
}

export function findUserByUsername(req: NextApiRequest, username: string) {
  // Here you find the user based on id/username in the database
  // const user = await db.findUserById(id)
  return req.session?.users?.find(user => user.username === username);
}

export function findUserById(req: NextApiRequest, id: string) {
  // Here you find the user based on id/username in the database
  // const user = await db.findUserById(id)
  return req.session?.users?.find(user => user.id === id);
}

export function updateUserByUsername(
  req: NextApiRequest,
  username: string,
  update: { name: string }
) {
  // Here you update the user based on id/username in the database
  // const user = await db.updateUserById(id, update)
  console.log('findUserByUsername');
  console.log(req);
  console.log(username);
  console.log(update);
  const user = req.session?.users?.find(u => u.username === username) || [];
  Object.assign(user, update);
  return user;
}

export function deleteUser(req: NextApiRequest) {
  // Here you should delete the user in the database
  // await db.deleteUser(req.user)
  console.log('deleteUser');
  console.log(req.session);
  if (req.session.users)
    req.session.users = req.session.users.filter(
      user => user.username !== req.user.username
    );
}

// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
export function validatePassword(user: User, inputPassword: crypto.BinaryLike) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
