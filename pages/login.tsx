import React, { useState } from 'react'
import Image from 'next/image';
import { Input, Button } from '@/src/components/UI';

import styles from '../styles/Login.module.scss';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <main className={styles.login_page}>
            <div className={styles.login_page__container}>
                <div className={styles.login_illustration}>
                    <div className={styles.login_logo}>
                        <Image
                            src={"/logo.svg"}
                            alt="Lendsqr"
                            width={174}
                            height={36}
                        />
                    </div>
                    <div className={styles.illustration_container}>
                        <Image
                            src={"/login-img.png"}
                            alt="pablo img"
                            width={500}
                            height={300}
                        />
                    </div>
                </div>
                <div className={styles.login_page__form}>
                    <div className={styles.login_page__form_container}>
                        <h1>Welcome!</h1>
                        <h3>Enter details to login.</h3>
                        <form>
                            <Input type='email' label='Email' />
                            <Input 
                                type={showPassword ? 'text' : 'password'} 
                                label='Password' 
                                TrailingIcon={() => (
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="relative pr-3 hover:cursor-pointer"
                                    >
                                        {!showPassword ? (
                                            <>SHOW</>
                                        ) : (
                                            <>CLOSE</>
                                        )}
                                    </span>
                                )}
                            />
                            <div className={styles.forgot_password}>
                                <p>Forgot Password</p>
                            </div>
                            <Button>Log in</Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login