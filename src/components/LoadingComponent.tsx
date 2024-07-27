import StatusMessage from './StatusMessage';

const LoadingComponent: React.FC = () => {
    return (
        <StatusMessage
            text={<p className="mt-10 font-bold">Loading data...</p>}
        />
    );
};

export default LoadingComponent;
