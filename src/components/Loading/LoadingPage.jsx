import './LoadingPage.css';


const LoadingPage = () => {
    return (
        <div className='h-[90svh] w-full flex justify-center items-center'>
            <div className="w-full flex justify-center items-center">
                <div className="book">
                    <div className="book__pg-shadow"></div>
                    <div className="book__pg"></div>
                    <div className="book__pg book__pg--2"></div>
                    <div className="book__pg book__pg--3"></div>
                    <div className="book__pg book__pg--4"></div>
                    <div className="book__pg book__pg--5"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;