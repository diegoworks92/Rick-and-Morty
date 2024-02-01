import { Button, Dropdown } from 'keep-react';
import {
    SquaresFour,
    Question,
    XCircle,
    CheckCircle,
    GenderNeuter,
    GenderFemale,
    GenderMale,
    SortAscending,
    SortDescending,
    Robot,
    Alien,
    Person,
    PawPrint,
    PersonSimple,
    Eye,
    SmileyNervous,
    LinuxLogo,
} from 'phosphor-react';

const Filter = ({ setFilters, setFiltering }) => {
    return (
        <Dropdown
            label="Filter"
            dismissOnClick={false}
            floatingArrow="true"
            className="bg-[#40B5CB] hover:bg-[#BCDA3F] text-black rounded-lg transform transition-transform duration-150 ease-in-out active:scale-90 h-10 w-80 sm:w-full"
        >
            <div className="flex justify-center m-2">
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
                        icon={<SortAscending size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                name: 'A-Z',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Sort A-Z
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SortDescending size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                name: 'Z-A',
                            }));
                            setFiltering(true);
                            console.log(
                                'Filtro aplicado, filtering establecido en true'
                            );
                        }}
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
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: '',
                            }));
                            setFiltering(false);
                        }}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<CheckCircle size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: 'Alive',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Alive
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<XCircle size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: 'Dead',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Dead{' '}
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Question size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                status: 'unknown',
                            }));
                            setFiltering(true);
                        }}
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
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: '',
                            }));
                            setFiltering(false);
                        }}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Alien size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Alien',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Alien
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<PawPrint size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Animal',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Animal
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<SmileyNervous size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Cronenberg',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Cronenberg
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Person size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Human',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Human
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<PersonSimple size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Humanoid',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Humanoid
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Eye size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Mythological Creature',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Mythological Creature
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<LinuxLogo size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Poopybutthole',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Poopybutthole
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<Robot size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'Robot',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Robot
                    </Dropdown.Item>

                    <Dropdown.Item
                        icon={<Question size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                species: 'unknown',
                            }));
                            setFiltering(true);
                        }}
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
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: '',
                            }));
                            setFiltering(false);
                        }}
                    >
                        All
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<GenderFemale size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Female',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Female
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<GenderNeuter size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Genderless',
                            }));
                            setFiltering(true);
                        }}
                    >
                        Genderless
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={<GenderMale size={20} color="#5E718D" />}
                        className="whitespace-nowrap"
                        onClick={() => {
                            setFilters((filters) => ({
                                ...filters,
                                gender: 'Male',
                            }));
                            setFiltering(true);
                        }}
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
                    onClick={() => {
                        setFilters({
                            species: '',
                            status: '',
                            name: '',
                            gender: '',
                        });
                        setFiltering(false);
                    }}
                >
                    Reset
                </Button>
            </div>
        </Dropdown>
    );
};

export default Filter;
