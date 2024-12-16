import React from 'react'
import "./css/index.css";
import CustomInputContainer from '../../components/common/CustomInput/container/CustomInputContainer';
import { LoginType } from 'user';
import CustomButtonContainer from '../../components/common/CustomButton/container/CustomButtonContainer';
import { Link } from 'react-router-dom';

type Props = {
    data: LoginType;
    errMsg: string;
    UpdateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    LoginSubmit: () => void;
}

const Login = ({ data: { email, password }, errMsg, UpdateChange, LoginSubmit }: Props) => {
    const loginArr = [
        {
            type: "text",
            placeholder: "email",
            name: "email",
            value: email,
        },
        {
            type: "password",
            placeholder: "비밀번호",
            name: "password",
            value: password
        }
    ]
    return (
        <main className='login-page'>
            <section className='login-section'>
                <h3 className='login-title'>로그인</h3>
                <div className='login-card'>
                    <div className='input-wrapper'>
                        {loginArr.map(({
                            type,
                            placeholder,
                            name,
                            value
                        }, idx) => (
                            <CustomInputContainer
                                key={idx}
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                value={value}
                                UpdateChange={UpdateChange}
                            />
                        ))}
                    </div>
                    {errMsg && (
                        <div className='err-msg-box'>
                            <span className='err-msg'>{errMsg}</span>
                        </div>
                    )}
                    <div className='btn-box'>
                        <CustomButtonContainer text={"로그인"} Active={LoginSubmit} />
                    </div>
                    <Link className='link' to={"/account"}>아이디가 없으신가요? &rarr;</Link>
                </div>
            </section>
        </main>
    )
}

export default Login