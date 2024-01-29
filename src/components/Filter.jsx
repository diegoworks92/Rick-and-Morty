import { Button, Dropdown } from 'keep-react';
import { SquaresFour } from 'phosphor-react';

const Filter = ({ setFilters }) => {
    return (
        <Dropdown
            label="Filter"
            dismissOnClick={false}
            floatingArrow="true"
            className="bg-[#40B5CB] hover:bg-[#BCDA3F] text-black rounded-lg transform transition-transform duration-150 ease-in-out active:scale-90 h-10 ml-3"
        >
            <div className="flex justify-center m-2 ">
                <Dropdown
                    label="Name"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon=""
                    className="focus:outline-none border-none rounded-none w-36 bg-[#40B5CB] hover:bg-[#BCDA3F] text-black"
                >
                    {' '}
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                name: 'A-Z',
                            }))
                        }
                    >
                        Sort A-Z
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                name: 'Z-A',
                            }))
                        }
                    >
                        Sort Z-A
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Dropdown
                    label="Status"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon=""
                    className="focus:outline-none border-none rounded-none w-36 bg-[#40B5CB] hover:bg-[#BCDA3F] text-black"
                >
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                status: '',
                            }))
                        }
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                status: 'Alive',
                            }))
                        }
                    >
                        Alive
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                status: 'Dead',
                            }))
                        }
                    >
                        Dead{' '}
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                status: 'unknown',
                            }))
                        }
                    >
                        Unknown
                    </Dropdown.Item>{' '}
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Dropdown
                    label="Species"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon=""
                    className="focus:outline-none border-none rounded-none w-36 bg-[#40B5CB] hover:bg-[#BCDA3F] text-black"
                >
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: '',
                            }))
                        }
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Alien',
                            }))
                        }
                    >
                        Alien
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Animal',
                            }))
                        }
                    >
                        Animal
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Cronenberg',
                            }))
                        }
                    >
                        Cronenberg
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Human',
                            }))
                        }
                    >
                        Human
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Humanoid',
                            }))
                        }
                    >
                        Humanoid
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Mythological Creature',
                            }))
                        }
                    >
                        Mythological Creature
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Poopybutthole',
                            }))
                        }
                    >
                        Poopybutthole
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Robot',
                            }))
                        }
                    >
                        Robot
                    </Dropdown.Item>

                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                species: 'unknown',
                            }))
                        }
                    >
                        Unknown
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Dropdown
                    label="Gender"
                    size="sm"
                    placement="right"
                    trigger="hover"
                    arrowIcon=""
                    className="focus:outline-none border-none rounded-none w-36 bg-[#40B5CB] hover:bg-[#BCDA3F] text-black"
                >
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                gender: '',
                            }))
                        }
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Female',
                            }))
                        }
                    >
                        Female
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Genderless',
                            }))
                        }
                    >
                        Genderless
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SquaresFour size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Male',
                            }))
                        }
                    >
                        Male
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="flex justify-center m-2">
                <Button
                    size="sm"
                    type="linkGray"
                    className="focus:outline-none border-none rounded-none w-36 bg-[#40B5CB] hover:bg-[#BCDA3F] text-black"
                    onClick={() =>
                        setFilters({
                            species: '',
                            status: '',
                            name: '',
                            gender: '',
                        })
                    }
                >
                    Reset
                </Button>
            </div>
        </Dropdown>
    );
};

export default Filter;
