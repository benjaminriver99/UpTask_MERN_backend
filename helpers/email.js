import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
  const { email, nombre, token} =  datos;


  // Datos del servidor del correo
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_HOST,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
        }
  });

  // Informacion del Email
  const info = await transport.sendMail({
    from: ' "UpTask - Administrador de Proyectos Balanceados <bbenjamin@balanceados-sa.com.ar>',
    to: email, // Envia al correo que pusimos en el formulario
        subject: "Uptask - Comprobá tu cuenta", // Esto es lo visibile del correo
        text: "Comprobá tu cuenta en Uptask", // Texto versión corta
        html: ` 
        <p>Hola: ${nombre} comprobá tu cuenta en UpTask Balanceados </p>
        <p>Tu cuenta ya casi está lista, solamente tenés que comprobarla en el siguiente enlace:</p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

        <p>Si no creaste esta cuenta, podés ignorar este mensaje.</p>
        `
  })

}

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token} =  datos;

  // Datos del servidor del correo
  const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_HOST,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
      },
  });

  // Informacion del Email
  const info = await transport.sendMail({
    from: ' "UpTask - Administrador de Proyectos Balanceados <bbenjamin@balanceados-sa.com.ar>',
    to: email, // Envia al correo que pusimos en el formulario
        subject: "Uptask - Reestablece tu password", // Esto es lo visibile del correo
        text: "Reestablece tu password", // Texto versión corta
        html: ` 
        <p>Hola: ${nombre}! Solicitaste reestablecer tu password </p>
        <p>Sigue el siguiente enlace para generar un nuevo password:</p>

        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a>

        <p>Si no solicitaste este correo, podés ignorar este mensaje</p>
        `
  })

}