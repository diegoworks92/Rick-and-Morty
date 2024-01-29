import { useState } from 'react';
import Button from './Button';

const SearchComponent = ({ setSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const searchBtn = (e) => {
        e.preventDefault();
        setSearch(inputValue);
    };

    const resetBtn = (e) => {
        e.preventDefault();
        setInputValue('');
        setSearch('');
    };

    return (
        <form className="gap-3 sm:gap-4 sm:ml-5 mb-5 flex justify-center sm:justify-start">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for characters"
                type="text"
                className="pt-2 pb-2 w-44 rounded-lg text-center"
            />
            <Button btn={searchBtn} nameBtn="Search" />
            <Button btn={resetBtn} nameBtn="Reset" />
        </form>
    );
};

export default SearchComponent;
