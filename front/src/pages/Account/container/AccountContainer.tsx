import React, { useCallback, useState } from 'react'
import Account from '../Account'
import { AccountType } from 'user';
import { usePostAccountMutation } from '../../../api/auth-api';
import { useNavigate, useNavigation } from 'react-router-dom';

const AccountContainer = () => {
    const [postAccount, { isLoading, isSuccess }] = usePostAccountMutation();
    const navigate = useNavigate();
    const [data, setData] = useState<AccountType>({
        email: "",
        nickName: "",
        password: "",
        passwordCheck: "",
    });
    const [errMsg, setErrMsg] = useState<string>("");
    const UpdateChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setData((prev) => ({
                ...prev,
                [name]: value
            }))
        },
        [data],
    );

    const LoginSubmit = useCallback(
        async () => {
            const { email, nickName, password, passwordCheck } = data;
            if (password !== passwordCheck) {
                setErrMsg("비밀번호를 올바르게 읿력해주세요")
            }
            if (email.length < 0 && nickName.length < 0) {
                setErrMsg("이메일 또는 닉네임을 입력해주세요.")
            }
            try {
                const response = await postAccount({
                    email,
                    nickName,
                    password,
                });
                const data = await response.data;
                if (data) {
                    return navigate('/login')
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        [data, errMsg],
    )
    return (
        <Account
            data={data}
            errMsg={errMsg}
            LoginSubmit={LoginSubmit}
            UpdateChange={UpdateChange}
        />
    )
}

export default AccountContainer