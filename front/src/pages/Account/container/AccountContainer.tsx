import React, { useCallback, useState } from 'react'
import Account from '../Account'
import { AccountType } from 'user';
import { usePostAccountMutation } from '../../../api/auth-api';

const AccountContainer = () => {
    const [postAccount, { isLoading, isSuccess }] = usePostAccountMutation();
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

            try {
                const response = await postAccount({
                    email,
                    nickName,
                    password,
                });
                const data = await response.data;
                if (data) {
                    console.log('data', data)
                    return data;
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        [data],
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