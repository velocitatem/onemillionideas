import React from 'react';

export const Card = ({ children, className }) => {
    return <div className={`border rounded-lg shadow-sm p-4 bg-white ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
    return <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
    return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className }) => {
    return <div className={`${className}`}>{children}</div>;
};
