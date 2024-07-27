import React from 'react';
import StatusMessage from './StatusMessage';

interface NotFoundProps {
    search: string;
    filtering: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ search, filtering }) => {
    return (
        <StatusMessage
            text={
                filtering ? (
                    <p>No characters were found with the chosen filter.</p>
                ) : (
                    <p>
                        No characters were found with the search term "{search}
                        ".
                    </p>
                )
            }
        />
    );
};

export default NotFound;
