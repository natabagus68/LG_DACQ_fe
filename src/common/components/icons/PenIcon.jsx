import React from 'react';

export const PenIcon = ({ width = 19, height = 19, ...props }) => {
    return (
        <>
            <svg width={ width } height={ height } { ...props } viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.57003 15.5214H16.4272M12.9986 2.94995C13.3017 2.64684 13.7128 2.47656 14.1415 2.47656C14.3537 2.47656 14.5639 2.51837 14.76 2.59959C14.9561 2.68082 15.1342 2.79987 15.2843 2.94995C15.4344 3.10003 15.5535 3.2782 15.6347 3.4743C15.7159 3.67039 15.7577 3.88056 15.7577 4.09281C15.7577 4.30505 15.7159 4.51522 15.6347 4.71132C15.5535 4.90741 15.4344 5.08558 15.2843 5.23566L5.76051 14.7595L2.71289 15.5214L3.4748 12.4738L12.9986 2.94995Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    );
};
