import React from 'react';

export const BurgerIcon = ({width=20,height=14, ...props}) => {
    return (
        <>
            <svg width={ width } height={ height } {...props} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19" stroke="white" strokeWidth={ 2 } strokeLinecap="square" strokeLinejoin="round" />
                <path d="M1 7H19" stroke="white" strokeWidth={ 2 } strokeLinecap="square" strokeLinejoin="round" />
                <path d="M1 13H19" stroke="white" strokeWidth={ 2 } strokeLinecap="square" strokeLinejoin="round" />
            </svg>
        </>
    );
};
