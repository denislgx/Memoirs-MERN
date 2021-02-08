import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[0];
    const isCustomAuth = token.length < 500; // if not Google Auth.

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; // 'sub' => Google's name for a specific ID.
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
