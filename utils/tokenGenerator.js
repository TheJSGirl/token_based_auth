import randomString from 'randomstring';
import config from '../config';

export default function tokenGenerator() {
  const token = randomString.generate({
    length: 45,
    charset: 'alphabetic',
  });

  const iat = new Date().getTime();

  return {
    token,
    iat,
    exp: iat + config.token.exp,

  };
}

