import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Pagination = ({ total = 120, current, onPageChange }) => {
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

export default Pagination;
