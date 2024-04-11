import { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';
import PaginationComponent from './PaginationComponent';
import NotFound from './NotFound';
import Status from './Status';
import Filter from './Filter';
import FetchCharacters from './FetchCharacters';
import AppliedFilters from './AppliedFilters';
import { Character } from './types';
import { Filters } from './types';

const CharactersCards = () => {
    const [search, setSearch] = useState<string>('');
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [filtering, setFiltering] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filters>({
        species: '',
        status: '',
        name: '',
        gender: '',
    });
    const [currentPageCharacters, setCurrentPageCharacters] = useState<
        Character[]
    >([]);
    useEffect(() => {
        FetchCharacters({
            search: search,
            setCharacters: setCharacters,
            setTotalPages: setTotalPages,
            filters: filters,
            currentPage: currentPage,
        });
    }, [search, filters, currentPage]);

    useEffect(() => {
        // Applies the alphabetical order filter to all characters
        const sortedCharacters = [...characters];
        if (filters.name === 'A-Z') {
            sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
        } else if (filters.name === 'Z-A') {
            sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
        }

        // Divides the characters into pages
        const pages = [];
        for (let i = 0; i < sortedCharacters.length; i += 20) {
            pages.push(sortedCharacters.slice(i, i + 20));
        }

        // Sets the characters of the current page
        setCurrentPageCharacters(pages[currentPage - 1] || []);
    }, [characters, currentPage, filters]);

    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(
        []
    );
    useEffect(() => {
        let newFilteredCharacters = [...characters];

        // Apply the filters here
        if (filters.name === 'A-Z') {
            newFilteredCharacters = newFilteredCharacters.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        } else if (filters.name === 'Z-A') {
            newFilteredCharacters = newFilteredCharacters.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }

        if (filters.status === 'Alive') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.status === 'Alive'
            );
        } else if (filters.status === 'Dead') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.status === 'Dead'
            );
        } else if (filters.status === 'unknown') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.status === 'unknown'
            );
        }

        if (filters.species === 'Alien') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Alien'
            );
        } else if (filters.species === 'Animal') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Animal'
            );
        } else if (filters.species === 'Cronenberg') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Cronenberg'
            );
        } else if (filters.species === 'Human') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Human'
            );
        } else if (filters.species === 'Humanoid') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Humanoid'
            );
        } else if (filters.species === 'Mythological Creature') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Mythological Creature'
            );
        } else if (filters.species === 'Poopybutthole') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Poopybutthole'
            );
        } else if (filters.species === 'Robot') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'Robot'
            );
        } else if (filters.species === 'unknown') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.species === 'unknown'
            );
        }

        if (filters.gender === 'Female') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.gender === 'Female'
            );
        } else if (filters.gender === 'Male') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.gender === 'Male'
            );
        } else if (filters.gender === 'Genderless') {
            newFilteredCharacters = newFilteredCharacters.filter(
                (character) => character.gender === 'Genderless'
            );
        }

        // Divides the filtered characters into pages
        const pages = [];
        for (let i = 0; i < newFilteredCharacters.length; i += 20) {
            pages.push(newFilteredCharacters.slice(i, i + 20));
        }

        // Sets the characters of the current page
        setCurrentPageCharacters(pages[currentPage - 1] || []);
        // Sets the filtered characters
        setFilteredCharacters(newFilteredCharacters);
    }, [characters, filters, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 sm:m-10 mb-9">
                <SearchComponent
                    setSearch={setSearch}
                    setFilters={setFilters}
                    setCurrentPage={setCurrentPage}
                    setFiltering={setFiltering}
                />
                <Filter
                    setFilters={setFilters}
                    setFiltering={setFiltering}
                    setCurrentPage={setCurrentPage}
                    filters={filters}
                />
            </div>
            <AppliedFilters filters={filters} />

            <div className="flex justify-center">
                <PaginationComponent
                    totalCharacters={totalPages * 20}
                    current={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>

            {currentPageCharacters.length > 0 ? (
                <div className=" flex flex-wrap justify-center">
                    {currentPageCharacters.map((item) => (
                        <div
                            key={item.id}
                            className="w-[350px] sm:w-full sm:max-w-xl rounded-2xl rounded-t-full sm:rounded-3xl sm:rounded-l-full flex border-4 border-[#40B5CB] flex-col sm:flex-row sm:mt-10 mb-10 sm:mx-2 xl:mx-8 2xl:mx-20 "
                            id="widget"
                        >
                            <div className="py-6 pr-10 relative rounded-xl mx-auto w-auto bg-transparent flex items-center rounded-t-full sm:rounded-r-sm sm:rounded-l-full">
                                <div className="sm:w-32 sm:h-32 relative left-5 sm:inline-block mx-auto overflow-hidden sm:rounded-full">
                                    <img
                                        src={item.image}
                                        alt="character from the rick and morty series"
                                        className="object-cover border-[#40B5CB] border-4 sm:w-full h-full rounded-full"
                                    />
                                </div>
                                <Status item={item} />
                            </div>
                            <div className="bg-[#212121] relative h-44 sm:h-full">
                                <div className="absolute bg-[#40B5CB] w-full h-1 sm:w-1 sm:h-full"></div>
                                <div className="absolute right-0 bottom-0 triangle">
                                    <span className="absolute text-in-triangle bg-[#212121] text-[#C8E63E] font-bold w-8 h-8 text-center rounded-full flex items-center justify-center">
                                        {item.id}
                                    </span>
                                </div>
                                <div className="flex flex-col sm:ml-2 p-4 sm:p-4 w-[392px]">
                                    <div className="flex flex-wrap justify-between items-center">
                                        <h4 className="text-[#C8E63E] text-2xl sm:text-lg 2xl:text-2xl font-semibold sm:mb-3">
                                            {item.name}
                                        </h4>
                                        <span className="font-normal text-center text-sm text-black bg-[#40B5CB] mr-[70px] py-1 px-2 sm:mr-2 sm:-mt-2 rounded-md">
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
                <NotFound
                    search={filtering ? '' : search}
                    filtering={filtering}
                />
            )}

            <div className="flex justify-center mt-6">
                <PaginationComponent
                    totalCharacters={totalPages * 20}
                    current={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default CharactersCards;
