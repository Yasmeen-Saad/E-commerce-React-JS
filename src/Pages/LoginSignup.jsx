import styles from './Style/LoginSignup.module.css';

const LoginSignup = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignupContainer}>
        <h1>Sign Up</h1>
        <div className={styles.loginSignupFields}>
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email Address"/>
          <input type="password" placeholder="Your Password"/>
        </div>
        <button>Continue</button>
        <p className={styles.login}>
          Already have an account? <span>Login here</span>
        </p>
        <div className={styles.agree}>
          <input type="checkbox" name="" id=""/>
          <p>By continuing, you agree to VOGUE's Terms of Use and Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;