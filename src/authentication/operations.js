import tokenGenerator from '../../utils/tokenGenerator';
import User from './user';
import Token from './token';

export default async function create(ctx, data) {
  const userData = new User(data);

  const result = await userData.save();

  // create token
  const token = tokenGenerator();
  console.log(token);

  token.user = result._id;

  // save token
  const newToken = new Token({ token: token.token, user: token.user });

  // save token
  await newToken.save();
  ctx.request.header = {
    'x-auth': token,
  };
}
