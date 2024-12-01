import React, { useCallback, useState } from 'react'
import Login from '../Login'
import { LoginType } from 'user'
import { usePostLoginMutation } from '../../../api/auth-api'
import { useNavigate } from 'react-router-dom'

const LoginContainer = () => {
    const [postLogin, { isSuccess, error, isLoading }] = usePostLoginMutation();
    const navigate = useNavigate();
    const [data, setData] = useState<LoginType>({
        email: "",
        password: ""
    });
    const [errMsg, setErrMsg] = useState<string>("");
    const UpdateChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            setData((prev) => ({
                ...prev,
                [name]: value
            }))
        },
        [data],
    );
    const LoginSubmit = useCallback(
        async () => {
            const { email, password } = data;
            try {
                const response = await postLogin({ email, password });
                const responseError = await response.error;
                const responseData = await response.data;
                if (responseError) {
                    const msg = responseError as { data: { msg: string } };
                    setErrMsg(msg.data.msg)
                }
                const { token } = responseData;
                localStorage.setItem('token', token);
                return navigate('/');
            } catch (err) {
                if (error && "data" in error) {
                    const { msg } = error.data as { msg: string };
                    console.error('Error message:', msg);
                    setErrMsg(msg);
                }
            }
        },
        [data, errMsg],
    );
    return (
        <Login
            data={data}
            errMsg={errMsg}
            UpdateChange={UpdateChange}
            LoginSubmit={LoginSubmit}
        />
    )
}

export default LoginContainer;


