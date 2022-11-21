
import React from 'react';

export const ReportIcon = ({ width = 24, height = 24, fill = "#646566", ...props }) => {
    return (
        <>
            <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 14H9.00019C8.44819 14 8.00019 13.552 8.00019 13C8.00019 12.448 8.44819 12 9.00019 12H12.0002C12.5522 12 13.0002 12.448 13.0002 13C13.0002 13.552 12.5522 14 12.0002 14ZM8.00019 17C8.00019 16.448 8.44819 16 9.00019 16H15.0002C15.5532 16 16.0002 16.448 16.0002 17C16.0002 17.552 15.5532 18 15.0002 18H9.00019C8.44819 18 8.00019 17.552 8.00019 17ZM17.4445 20H6.55549C6.24949 20 6.00049 19.776 6.00049 19.5V4.5C6.00049 4.224 6.24949 4 6.55549 4H12.0005V7.15C12.0005 8.722 13.2175 10 14.7145 10H18.0005V19.5C18.0005 19.776 17.7515 20 17.4445 20ZM14.0005 4.978L16.7425 8H14.7145C14.3205 8 14.0005 7.619 14.0005 7.15V4.978ZM19.7405 8.328L14.2965 2.328C14.1065 2.119 13.8385 2 13.5555 2H6.55549C5.14649 2 4.00049 3.122 4.00049 4.5V19.5C4.00049 20.878 5.14649 22 6.55549 22H17.4445C18.8535 22 20.0005 20.878 20.0005 19.5V9C20.0005 8.751 19.9075 8.512 19.7405 8.328Z" fill={fill}/>
            </svg>
        </>
    );
};
