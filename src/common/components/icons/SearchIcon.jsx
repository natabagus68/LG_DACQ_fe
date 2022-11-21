import React from 'react';

export const SearchIcon = ({ width = '1.1vw', height = '1.1vw', fill='white', ...props }) => {
    return (
        <>
            <svg width={ width } height={ height } { ...props } viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 13L10.1 10.1M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z" stroke={fill} strokeWidth={ 2 } strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    );
};
