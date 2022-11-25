import React from 'react'
import styles from '../scss/SignIn.module.scss';

const SignIn = () => {
  return (
     <section className={styles.signin_row}>
      <div className={styles.img_container}>
        <img src="" alt="" />
      </div>
      <div className={styles.content_container}>
        <div className={styles.title_container}>
          <span className={styles.title}>AIRBOOK</span>
        </div>
        <div className={styles.subtitle_container}>
          <span className={styles.subtitle}>save your book and share it</span>
        </div>
        <div className={styles.siginin_underline} />
        <div className={styles.signin_container}>
          <div className={styles.email_container}>
            <span className={styles.email_title}>Email</span>
            <span className={styles.required}> *</span>
            <div className={styles.input_area}>
              <input 
                type="email"
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input} />
            </div>
          </div>
          <div className={styles.password_container}>
            <span className={styles.password_title}>Password</span>
            <span className={styles.required}> *</span>
            <div className={styles.input_area}>
              <input 
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                name="password"
                className={styles.input}
                />
            </div>
          </div>
        </div>
        <div className={styles.button_area}>
          <button
            className={styles.button}
            >Sign In</button>
        </div>
      </div>
     </section>
  )
}

export default SignIn