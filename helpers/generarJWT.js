import jwt from "jsonwebtoken";
// Para generar el Json Web Token
const generarJWT = (id) => {
  return jwt.sign( { id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

export default generarJWT;