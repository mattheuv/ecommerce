import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'carmela.emard16@ethereal.email',
        pass: 'MNwZBpDqbavK9A99qK'
    }
});


export const mailOptions = {
    from: "Servidor node",
    to: "carmela.emard16@ethereal.email",
    subject: "Ha iniciado sesión",
    html: "<h1>Sign in</h1>",
    atachments: [{
        path: 'nodemailer.png'
    }]
}

export const mailOptionsLogOut = {
    from: "Servidor node",
    to: "carmela.emard16@ethereal.email",
    subject: "Ha cerrado sesión",
    html: "<h1>Log out sucess</h1>"
}

