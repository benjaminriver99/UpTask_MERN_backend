import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <bbenjamin@balanceados-sa.com.ar>',
    to: email,
    subject: "UpTask - Comprobá tu cuenta",
    text: "Comprobá tu cuenta en UpTask Balanceados",
    html: `<p>Hola: ${nombre} Comprobá tu cuenta en UpTask</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    
    <p>Si no creaste esta cuenta, podés ignorar el mensaje</p>
    
    
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Reestablecé tu Contraseña",
    text: "Reestablecé tu Contraseña",
    html: `<p>Hola: ${nombre} Solicitaste reestablecer tu contraseña</p>
    <p>Seguí el siguiente enlace para generar una nueva contraseña: 
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer contraseña</a>
    
    <p>Si tu solicitaste este email, podés ignorar el mensaje</p>
    
    
    `,
  });
};