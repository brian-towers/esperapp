export const handler = (event: any, context: any, callback: any) => {
  const CustomMessage_ForgotPassword = `<style>
        p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        }
        </style>

        <div id=":x9" class="a3s aXjCH " role="gridcell" tabindex="-1"><p>Hello,</p>
        <p>Follow this link to reset your Password. </p>
        <p><a href="https://your-website.com/reset-password?confirmation_code=${event.request.codeParameter}&user_name=${event.userName}"> Reset Password </a></p>
        <p>If you didn’t ask to change password, you can ignore this email.</p>
        <p>Thanks,</p>
        <p>Your website team</p>
        </div>`;

  if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    event.response.emailMessage = CustomMessage_ForgotPassword;
  }

  callback(null, event);
};
