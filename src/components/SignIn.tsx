import React from 'react'
import { Row } from "antd";
import { Col } from "antd";
import Input from 'antd/es/input/Input';
import { Button } from 'antd/es/radio';
import styles from './SignIn.module.css'

const SignIn = () => {
  return (
     <Row align="middle" className={styles.siginin_row}>
        <Col span={24}> 
          <Row className={styles.signin_contents}>
            <Col span={12}>
                <div className={styles.signin_title}>My Books</div>
                <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
                <div className={styles.siginin_underline} />
                <div className={styles.email_title}>Email
                  <span className={styles.required}> *</span>
                  <div className={styles.input_area}>
                    <Input 
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      className={styles.input} />
                  </div>
                </div>
                <div className={styles.password_title}>Password
                  <span className={styles.required}> *</span>
                  <div className={styles.input_area}>
                    <Input 
                      placeholder="Password"
                      autoComplete="current-password"
                      name="password"
                      className={styles.input}
                      />
                  </div>
                </div>
                <div className={styles.button_area}>
                  <Button
                    className={styles.button}
                    >Sign In</Button>
                </div>
            </Col>
          </Row>
        </Col>
     </Row>
  )
}

export default SignIn