import { useEffect, useState } from 'react';
import SearchComponent from './SearchComponent';
import Pagination from './Pagination';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import NotFound from './NotFound';
import Status from './Status';

export const CharactersCards = () => {
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${search}&page=${currentPage}`
            );
            const data = await response.json();
            if (data.results) {
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            } else {
                setCharacters([]);
                setTotalPages(0);
            }
        };

        fetchCharacters();
    }, [search, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const [openAccordion, setOpenAccordion] = useState(null);

    return (
        <>
            <SearchComponent setSearch={setSearch} />
            <Pagination
                total={totalPages}
                current={currentPage}
                onPageChange={handlePageChange}
            />

            {characters.length > 0 ? (
                <div className="text-[#40B5CB] relative card grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center mb-6">
                    {characters.map((item) => (
                        <div
                            key={item.id}
                            className="border-4 border-[#40B5CB] rounded-md m-4 sm:w-48 w-64 mb-20"
                        >
                            <img
                                src={item.image}
                                className="rounded-t-sm"
                                alt=""
                            />
                            <Status item={item} />
                            <h1
                                className=" border-t-4 border-[#40B5CB] flex justify-center text-center items-center text-xl h-14 hover:cursor-pointer font-bold"
                                onClick={() =>
                                    setOpenAccordion(
                                        openAccordion === item.id
                                            ? null
                                            : item.id
                                    )
                                }
                            >
                                {item.name}
                            </h1>
                            <div
                                className="flex justify-center hover:cursor-pointer pb-0 mb-1"
                                onClick={() =>
                                    setOpenAccordion(
                                        openAccordion === item.id
                                            ? null
                                            : item.id
                                    )
                                }
                            >
                                {openAccordion === item.id ? (
                                    <IoIosArrowUp className="text-xl" />
                                ) : (
                                    <IoIosArrowDown className="text-xl" />
                                )}
                            </div>
                            {openAccordion === item.id && (
                                <div className=" absolute border-4 rounded-b-md border-[#40B5CB] sm:w-48 w-64 -ml-1">
                                    <p className="pl-2 pt-1">
                                        Species: {item.species}
                                    </p>
                                    <p className="pl-2">
                                        Gender: {item.gender}
                                    </p>
                                    <p className="pl-2 pb-1">
                                        Status: {item.status}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <NotFound search={search} />
            )}

            <Pagination
                total={totalPages}
                current={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
