import { useCallback, useState } from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom';
type Props = {
    isLogin: boolean;
}
const HeaderContainer = ({ isLogin }: Props) => {
    const naviate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const CreateMenuOpen = useCallback(
        () => {
            setIsMenuOpen((prev) => !prev);
        },
        [isMenuOpen],
    );
    const LoginPageNavigate = useCallback(
        () => {
            naviate('/login');
        },
        [],
    )

    return (
        <Header
            isMenuOpen={isMenuOpen}
            LoginPageNavigate={LoginPageNavigate}
            isLogin={isLogin}
            CreateMenuOpen={CreateMenuOpen}
        />
    )
}

export default HeaderContainer