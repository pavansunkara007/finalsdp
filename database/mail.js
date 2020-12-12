var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pavansaisunkara@gmail.com',
    pass: 'Pavan@15474767'
  }
});

var mailOptions = {
  from: 'pavansaisunkara@gmail.com',
  to: '',
  subject: '2nd E-mail panichesthundi roy',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});