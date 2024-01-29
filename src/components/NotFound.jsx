const NotFound = ({ search }) => {
    return (
        <div className="relative mx-auto flex justify-center border-4 border-[#40B5CB] rounded-md sm:w-96">
            <img src="./notFound.png" alt="" className=""></img>
            <div className="absolute text-[#40B5CB] sm:w-56 p-5 text-xl ml-6 mr-24 sm:mr-40">
                <p>
                    No characters were found with the search term “{search}” or
                    with the chosen filter.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
