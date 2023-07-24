import nodemailer from 'nodemailer'
const sendEmail = async(freelance)=>{

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ttiko646@gmail.com',
      pass: 'uapuzvvwkyhgbkxf',
    },
  });
  const mailOptions = {
    from: 'ttiko646@gmail.com',
    to: freelance.email,
    subject: 'Candudature accepté',
    text: `Cher ${freelance.nom},\n\n freelance votre candidature est accepté.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
export default sendEmail