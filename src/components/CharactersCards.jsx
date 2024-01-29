import { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';
import PaginationComponent from './PaginationComponent';

import NotFound from './NotFound';
import Status from './Status';
import Filter from './Filter';
import FetchCharacters from './FetchCharacters';

export const CharactersCards = () => {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [filters, setFilters] = useState({
        species: '',
        status: '',
        name: '',
        gender: '',
    });

    let filteredCharacters = characters;

    if (filters.name === 'A-Z') {
        filteredCharacters = filteredCharacters.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else if (filters.name === 'Z-A') {
        filteredCharacters = filteredCharacters.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    if (filters.status === 'Alive') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.status === 'Alive'
        );
    } else if (filters.status === 'Dead') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.status === 'Dead'
        );
    } else if (filters.status === 'unknown') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.status === 'unknown'
        );
    }

    if (filters.species === 'Alien') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Alien'
        );
    } else if (filters.species === 'Animal') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Animal'
        );
    } else if (filters.species === 'Cronenberg') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Cronenberg'
        );
    } else if (filters.species === 'Human') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Human'
        );
    } else if (filters.species === 'Humanoid') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Humanoid'
        );
    } else if (filters.species === 'Mythological Creature') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Mythological Creature'
        );
    } else if (filters.species === 'Poopybutthole') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Poopybutthole'
        );
    } else if (filters.species === 'Robot') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'Robot'
        );
    } else if (filters.species === 'unknown') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.species === 'unknown'
        );
    }

    if (filters.gender === 'Female') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.gender === 'Female'
        );
    } else if (filters.gender === 'Male') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.gender === 'Male'
        );
    } else if (filters.gender === 'Genderless') {
        filteredCharacters = filteredCharacters.filter(
            (character) => character.gender === 'Genderless'
        );
    }

    <FetchCharacters
        search={search}
        setCharacters={setCharacters}
        setTotalPages={setTotalPages}
        filters={filters}
        currentPage={currentPage}
    />;

    useEffect(() => {
        FetchCharacters({
            search: search,
            setCharacters: setCharacters,
            setTotalPages: setTotalPages,
            filters: filters,
            currentPage: currentPage,
        });
    }, [search, currentPage, filters]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="flex flex-wrap justify-around m-10">
                <SearchComponent setSearch={setSearch} />
                <Filter setFilters={setFilters} />
            </div>
            <PaginationComponent
                total={totalPages}
                current={currentPage}
                onPageChange={handlePageChange}
            />

            {filteredCharacters.length > 0 ? (
                <div className=" flex flex-wrap justify-center">
                    {filteredCharacters.map((item) => (
                        <div
                            key={item.id}
                            className="w-[345px] sm:w-full sm:max-w-xl rounded-2xl rounded-t-full sm:rounded-3xl sm:rounded-l-full flex border-4 border-[#40B5CB] flex-col sm:flex-row sm:mt-10 mb-10 sm:mx-2 2xl:mx-12 "
                            id="widget"
                        >
                            <div className="py-6 pr-10 relative rounded-xl mx-auto w-auto bg-transparent flex items-center rounded-t-full sm:rounded-r-sm sm:rounded-l-full">
                                <div className="sm:w-32 sm:h-32 relative left-5 sm:inline-block mx-auto overflow-hidden sm:rounded-full">
                                    <img
                                        src={item.image}
                                        className="object-cover border-[#40B5CB] border-4 sm:w-full h-full rounded-full"
                                    />
                                </div>
                                <Status item={item} />
                            </div>
                            <div className="bg-[#010101]">
                                <div className="flex flex-col ml-2 p-4 w-[392px]">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-[#C8E63E] text-lg 2xl:text-2xl font-semibold mb-3">
                                            {item.name}
                                        </h4>
                                        <span className="font-normal text-center text-sm text-black bg-[#40B5CB] mr-[70px] py-1 px-2 sm:mr-2 -mt-2 rounded-md">
                                            {item.species}
                                        </span>
                                    </div>
                                    <div className="mt-2 font-medium text-white">
                                        <span className="text-[#C8E63E]">
                                            Origin:
                                        </span>{' '}
                                        {item.origin.name}
                                    </div>
                                    <div className="mt-2 font-medium text-white">
                                        <span className="text-[#C8E63E]">
                                            Location:{' '}
                                        </span>
                                        {item.location.name}
                                    </div>
                                    <div className="mt-2 font-medium text-white">
                                        <span className="text-[#C8E63E]">
                                            Gender:
                                        </span>{' '}
                                        {item.gender}
                                        <span className="text-[#C8E63E] ml-7">
                                            Status:
                                        </span>{' '}
                                        {item.status}
                                    </div>
                                </div>{' '}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NotFound search={search} />
            )}

            <PaginationComponent
                total={totalPages}
                current={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
