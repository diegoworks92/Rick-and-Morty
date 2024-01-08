const SearchForm = ({ setSearch }) => {
    const searchBtn = (e) => {
        e.preventDefault();
    };

    return (
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
            <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for characters"
                type="text"
            />
            <button onClick={searchBtn} className="btn btn-primary fs-5">
                Search
            </button>
        </form>
    );
};

export default SearchForm;
