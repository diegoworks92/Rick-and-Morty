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
            className={`absolute ml-[228px] -mt-[243px] sm:ml-[164px] sm:-mt-[180px] border border-black rounded-full w-4 h-4 ${status()}`}
        ></div>
    );
};

export default Status;
