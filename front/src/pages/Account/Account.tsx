import React from 'react'
import "./css/index.css";
import CustomInputContainer from '../../components/common/CustomInput/container/CustomInputContainer';
import CustomButtonContainer from '../../components/common/CustomButton/container/CustomButtonContainer';
import { Link } from 'react-router-dom';
import { AccountType } from 'user';

type Props = {
    errMsg: string;
    data: AccountType;
    UpdateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    LoginSubmit: () => void;
}
const Account = ({ errMsg, data, UpdateChange, LoginSubmit }: Props) => {
    const inputArr = [
        {
            type: "email",
            placeholder: "이메일",
            name: "email",
            value: data.email
        },
        {
            type: "text",
            placeholder: "닉네임",
            name: "nickName",
            minLength: 5,
            maxLength: 10,
            value: data.nickName

        },
        {
            type: "password",
            placeholder: "비밀번호",
            name: "password",
            minLength: 8,
            maxLength: 16,
            value: data.password

        },
        {
            type: "password",
            placeholder: "비밀번호 확인",
            name: "passwordCheck",
            minLength: 8,
            maxLength: 16,
            value: data.passwordCheck
        }
    ]
    return (
        <main className='account-page'>
            <section className='account-section'>
                <div className='account-card'>
                    <h3 className='account-title'>회원가입</h3>
                    <div className='input-wrapper'>
                        {inputArr.map(({
                            type,
                            placeholder,
                            minLength,
                            maxLength,
                            value,
                            name
                        }, idx) => (
                            <CustomInputContainer
                                key={idx}
                                type={type}
                                placeholder={placeholder}
                                minLength={minLength}
                                maxLength={maxLength}
                                value={value}
                                UpdateChange={UpdateChange}
                                name={name}
                            />
                        ))}
                    </div>
                    {errMsg && <div className='err-msg-box'>
                        <span className='err-msg'>{errMsg}</span>
                    </div>}
                    <CustomButtonContainer text='회원가입' Active={LoginSubmit} />
                    <Link className='link' to={"/login"}>이미 회원이신가요? &rarr;</Link>
                </div>
            </section>
        </main>
    )
}

export default Account