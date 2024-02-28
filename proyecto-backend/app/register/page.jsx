import "@styles/Register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="register_content">
        <form action="">
          <input placeholder="Username" name="username" required />
          <input placeholder="Email" name="email" required />
          <input placeholder="Password" name="password" required />
          <input placeholder="Confirm Password" name="confirmPassword" required />
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  )
}

export default Register