import React from 'react';
import { AppNameText, KeyIcon } from '../../common/components/icons';
import { Input } from '../../common/components/input/Input';
import appLogo from './../../assets/app-logo.png';
import { useGetAuthenticatedUserQuery, useLoginMutation } from './authApiSlice';

export const Login = () => {
    const {
        data: { data: auth } = {},
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAuthenticatedUserQuery();

    const [authenticate, { authenticateIsLoading }] = useLoginMutation();
    return (
        <>
            <div className="hidden md:flex md:flex-[50%] bg-green-500 flex-col justify-center items-center p-10">
                <img className="mb-[38px]" src={ appLogo } alt="" />
                <AppNameText />
            </div>
            <div className="flex-[50%] flex justify-center items-center md:p-10">
                <form onSubmit={ e => {
                    e.preventDefault();
                    authenticate({
                        email: 'asd@asd.asd',
                        company_code: 'asd',
                        password: '123123'
                    });
                } }>
                    <div className="bg-white shadow-[0px_0px_13px_rgba(4_67_50_0.15)] rounded-xl border-[1px] border-gray-100 py-[92px] px-10 md:px-[74px] md:w-[479px]">
                        <div className=" font-bold text-green-500 text-4xl">Welcome back.</div>
                        <div className=" text-gray-400 mb-[48px]">Log in to your account</div>
                        <div className="relative mb-[25px]">
                            <div className="absolute h-full flex items-center pl-3">
                                <svg width={ 20 } height={ 17 } viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.34842 1.83464C4.68479 1.83464 2.49992 4.03752 2.49992 6.78676C2.49992 8.41253 3.26566 9.8512 4.44557 10.7536C4.81114 11.0332 4.88084 11.5562 4.60124 11.9218C4.32164 12.2874 3.79863 12.3571 3.43306 12.0775C1.85286 10.8689 0.833252 8.94657 0.833252 6.78676C0.833252 3.14558 3.73604 0.167969 7.34842 0.167969C10.0459 0.167969 12.3486 1.82997 13.341 4.18603C13.7253 4.08096 14.1292 4.02493 14.5454 4.02493C17.1118 4.02493 19.1666 6.13913 19.1666 8.71526C19.1666 10.6313 18.0331 12.2858 16.3993 13.0127C15.9788 13.1998 15.4862 13.0105 15.2992 12.59C15.1121 12.1695 15.3013 11.677 15.7218 11.4899C16.7636 11.0264 17.4999 9.96245 17.4999 8.71526C17.4999 7.03106 16.163 5.69159 14.5454 5.69159C14.0661 5.69159 13.6154 5.80773 13.2164 6.01388C12.992 6.12981 12.7271 6.13771 12.4962 6.03535C12.2653 5.93299 12.0932 5.73143 12.0284 5.4873C11.4673 3.37304 9.57574 1.83464 7.34842 1.83464ZM4.16658 6.83464C4.16658 4.99369 5.65897 3.5013 7.49992 3.5013C8.42018 3.5013 9.25467 3.87532 9.85695 4.47766C10.1824 4.80311 10.1823 5.33075 9.8569 5.65617C9.53144 5.98159 9.00381 5.98157 8.67839 5.65611C8.37591 5.35361 7.9604 5.16797 7.49992 5.16797C6.57945 5.16797 5.83325 5.91416 5.83325 6.83464C5.83325 7.29512 6.0189 7.71063 6.3214 8.0131C6.64685 8.33852 6.64687 8.86616 6.32145 9.19161C5.99603 9.51707 5.46839 9.51709 5.14294 9.19167C4.54061 8.58939 4.16658 7.7549 4.16658 6.83464ZM7.49992 13.5013C7.49992 11.6604 8.99231 10.168 10.8333 10.168C12.6742 10.168 14.1666 11.6604 14.1666 13.5013C14.1666 15.3422 12.6742 16.8346 10.8333 16.8346C8.99231 16.8346 7.49992 15.3422 7.49992 13.5013ZM10.8333 11.8346C9.91278 11.8346 9.16658 12.5808 9.16658 13.5013C9.16658 14.4218 9.91278 15.168 10.8333 15.168C11.7537 15.168 12.4999 14.4218 12.4999 13.5013C12.4999 12.5808 11.7537 11.8346 10.8333 11.8346Z" fill="#5D6369" />
                                </svg>
                            </div>
                            <Input type="text" className="pl-10 w-full" placeholder="Company Code" />
                        </div>
                        <div className="relative mb-[25px]">
                            <div className="absolute h-full flex items-center pl-3">
                                <svg width={ 20 } height={ 15 } viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3333 0.417969C18.4571 0.420466 18.5746 0.443103 18.6919 0.498901C18.8129 0.556772 18.9194 0.643967 18.9999 0.751302C19.0527 0.829963 19.0404 0.806358 18.9999 0.751302C19.1079 0.895221 19.1666 1.07145 19.1666 1.2513C19.1663 1.20691 19.1644 1.18765 19.1666 1.2513V13.7513C19.1666 14.2115 18.7935 14.5846 18.3333 14.5846H1.66659C1.20635 14.5846 0.833252 14.2115 0.833252 13.7513V1.2513C0.833252 1.10211 0.873724 0.953975 0.949855 0.826027C1.105 0.564618 1.37371 0.423873 1.66659 0.417969H18.3333ZM17.4999 2.91797L10.4999 8.16797C10.2333 8.36797 9.87658 8.38797 9.59192 8.22797L9.49992 8.16797L2.49992 2.91797V12.918H17.4999V2.91797ZM4.16658 2.08464L9.99992 6.45964L15.8333 2.08464H4.16658Z" fill="#5C5E61" />
                                </svg>
                            </div>
                            <Input type="email" className="pl-10 w-full" placeholder="input your email" />
                        </div>
                        <div className="relative mb-[25px]">
                            <div className="absolute h-full flex items-center pl-3">
                                <KeyIcon />
                            </div>
                            <Input type="password" className="pl-10 w-full" placeholder="input password" />
                        </div>
                        <button type="submit" className="font-body font-bold bg-green-500 rounded text-white w-full py-2 px 5">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};
