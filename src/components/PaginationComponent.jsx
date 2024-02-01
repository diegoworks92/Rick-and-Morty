import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const PaginationComponent = ({ total = 42, current, onPageChange }) => {
    return (
        <div className="flex justify-center">
            <ResponsivePagination
                total={total}
                current={current}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default PaginationComponent;
