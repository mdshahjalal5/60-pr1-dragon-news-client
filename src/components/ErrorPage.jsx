import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error, 'error');
    return (
        <div className='' >
            <h2>{error.status} </h2>
            <p>{error.statusText} </p>
        </div>
    );
};

export default ErrorPage;