import React, { useCallback, useState } from 'react'
import Account from '../Account'

const AccountContainer = () => {
    const [data, setData] = useState({
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