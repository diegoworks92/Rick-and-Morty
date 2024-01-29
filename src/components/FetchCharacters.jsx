const FetchCharacters = async ({
    search,
    setCharacters,
    setTotalPages,
    currentPage,
}) => {
    let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

    if (search) {
        url += `&name=${search}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
    } else {
        setCharacters([]);
        setTotalPages(0);
    }
};

export default FetchCharacters;
