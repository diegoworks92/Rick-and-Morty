const Status = ({ item }) => {
    const status = () => {
        if (item.status === 'Alive') {
            return 'bg-green-700';
        } else if (item.status === 'Dead') {
            return 'bg-red-700';
        } else {
            return 'bg-zinc-700';
        }
    };

    return (
        <div
            className={`${status()} w-10 h-10 sm:w-7 sm:h-7 absolute rounded-full right-16 sm:right-6 top-9 sm:top-6 border-4 border-rick `}
        ></div>
    );
};

export default Status;
