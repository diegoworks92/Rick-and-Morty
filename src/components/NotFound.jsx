const NotFound = ({ search, filtering }) => {
    return (
        <div className="relative mx-auto flex justify-center border-4 border-rick rounded-md sm:w-96">
            <img
                src="./notFound.webp"
                alt="image of item not found"
                className=""
            />
            <div className="absolute text-rick sm:w-56 p-5 text-xl ml-6 mr-24 sm:mr-40">
                {filtering ? (
                    <p>No characters were found with the chosen filter.</p>
                ) : (
                    <p>
                        No characters were found with the search term “{search}
                        ”.
                    </p>
                )}
            </div>
        </div>
    );
};

export default NotFound;
