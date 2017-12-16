import operations from './operations';
import response from '../../utils/response';
// import chekauth from '../../config/middleware/checkAuth';

export default async function signUp(ctx) {

  const data = ctx.request.fields;

  const result = await operations.create(ctx, data);

  response.successJson(ctx, result, 200);
}

