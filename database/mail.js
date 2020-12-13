var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pavansaisunkara@gmail.com',
    pass: 'Pavan@29284767'
  }
});

var mailOptions = {
  from: 'pavansaisunkara@gmail.com',
  to: 'ravi@gmail.com',
  subject: 'Notification Alert',
  text: 'Mr.Pavan wants to book an appointment with you on 13/12/20.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});