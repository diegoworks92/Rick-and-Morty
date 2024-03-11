import { useState } from 'react';
import Button from './Button';

const SearchComponent = ({ setSearch, setFilters, setCurrentPage }) => {
    const [inputValue, setInputValue] = useState('');

    const searchBtn = (e) => {
        e.preventDefault();
        setSearch(inputValue);
        setCurrentPage(1); // Reset the current page to 1
    };

    const resetBtn = (e) => {
        e.preventDefault();
        setInputValue('');
        setSearch('');
        setFilters({
            species: '',
            status: '',
            name: '',
            gender: '',
        });
    };

    return (
        <form className="gap-3 sm:gap-4 sm:ml-0 mb-5 flex justify-center sm:justify-start h-10">
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
