import React, { useCallback, useState } from 'react'
import Search from '../Search'

const SearchContainer = () => {
    const [searchText, setSearchText] = useState<string>("");

    const SearchUpdate = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target
            setSearchText(value)
        },
        [searchText],
    );
    const SearchBtn = useCallback(
        async () => {
            // 
        },
        [searchText],
    )


    return (
        <Search SearchUpdate={SearchUpdate} SearchBtn={SearchBtn} />
    )
}

export default SearchContainer