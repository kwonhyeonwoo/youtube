import { useCallback, useState } from 'react'
import Header from '../Header'

const HeaderContainer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const CreateMenuOpen = useCallback(
        () => {
            setIsMenuOpen((prev) => !prev);
        },
        [isMenuOpen],
    )
    return (
        <Header
            isMenuOpen={isMenuOpen}
            CreateMenuOpen={CreateMenuOpen}
        />
    )
}

export default HeaderContainer