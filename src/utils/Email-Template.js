export const email_template = (data) => {
  const template = `
<!DOCTYPE html>
<html>
<head>
  <title>Referral Code Email</title>
  <style>
    body {
      font-family: sans-serif;
    }

    .container {
      width: 500px;
      margin: 0 50px;
    }

    .header {
      text-align: center;
    }

    .body {
      padding: 20px;
    }

    .footer {
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Referral Code Email</h1>
    </div>

    <div class="body">
      <p>Hi ${data.name},</p>

      <p>Thank you for signing up for our service! Here is your referral code: <code>${data.referralCode}</code></p>

      <p>You can share your referral code with your friends and family, and they will get a discount on their first purchase. You will also get a commission on every sale that you generate.</p>

      <p>To visit our website, please click on the following link: [website link]</p>

      <p>Your user information is as follows:</p>

      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>

      <p>Thank you for being a customer!</p>
    </div>

    <div class="footer">
      <p>Sincerely,</p>
      <p>[Your name]</p>
    </div>
  </div>
</body>
</html>
`;

  return template;
};
