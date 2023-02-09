import "./SignUpForm.scss";
function SignUpForm() {
  return (
    <form className="sign-up-form">
      <input placeholder="Username" type="text" />
      <input placeholder="Email Address" type="text" />
      <input placeholder="Password" type="password" />
      <input placeholder="Confirm Password" type="password" />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default SignUpForm;
