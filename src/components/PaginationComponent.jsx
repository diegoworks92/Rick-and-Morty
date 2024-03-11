import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const PaginationComponent = ({ totalCharacters, current, onPageChange }) => {
    const total = Math.ceil(totalCharacters / 20);

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <div className="flex justify-center m-10">
            <ResponsivePagination
                total={total}
                current={current}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default PaginationComponent;
