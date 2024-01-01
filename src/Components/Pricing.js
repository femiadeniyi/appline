import React, { useState } from 'react';


export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
        // Additional logic can be added here based on the selected plan
        if (isMonthly) {
            console.log('Monthly Plan Selected');
        } else {
            console.log('Yearly Plan Selected');
        }
    };

    return (
        <section id="pricing" className=" z-10 pt-[110px]">
            <div className="container">
                <div className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center">
                    <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                        Choose Your Plan
                    </h2>
                    <p class="text-base text-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                        ante in maximus.
                    </p>
                </div>
            </div>
            <div className="container  overflow-hidden">
                <div className="wow fadeInUp mb-[60px] flex items-center justify-center">
                    <label for="togglePlan" className="inline-flex items-center ml-8">
                        <input
                            type="checkbox"
                            id="togglePlan"
                            className="sr-only"
                            checked={isMonthly}
                            onChange={handleToggle}
                        />
                        <span className={`monthly text-sm font-medium ${isMonthly ? 'text-black' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <span className="mx-5 flex h-[34px] w-[60px] cursor-pointer items-center rounded-full bg-cyan-400  p-[3px]">
                            <span class={`dot block h-7 w-7 rounded-full bg-white duration-300 ${isMonthly ? 'transform translate-x-full' : ''}`}></span>
                        </span>
                        <span className={`yearly text-sm font-medium ${isMonthly ? 'text-gray-500' : 'text-black'}`}>
                            Yearly
                        </span>
                    </label>
                </div>
                <div className=" flex flex-wrap justify-items-center">
                    <div className="w-full px-6 md:w-1/2 lg:w-1/3">
                        <div className="wow fadeInUp mb-10 rounded-xl bg-white py-10 px-9 shadow-md dark:bg-dark dark:shadow-md-dark lg:mb-4 lg:px-7 xl:px-9">
                            <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
                                Free
                            </h3>
                            <p class="mb-7 text-base text-body">
                                Lorem Ipsum is simply dummythe.
                            </p>
                            <p className="border-b border-stroke pb-5 text-black dark:border-stroke-dark dark:text-white">
                                <span className="text-[40px] font-bold leading-none">
                                    <sup className="text-[22px] font-medium"> $ </sup>
                                    0
                                </span>
                                <span className="text-base text-body"> /month </span>
                            </p>
                            <div className="space-y-4 pt-[30px] pb-10">
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    60-day chat history
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    15 GB cloud storage
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    24/7 SupportName
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    Custom Branding Strategy
                                </p>
                            </div>
                            <a href="#" class="block w-full rounded-md bg-black py-[10px] px-8 text-center text-base font-medium text-white hover:bg-dark dark:bg-[#2A2E44] dark:hover:bg-cyan-400">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-6 md:w-1/2 lg:w-1/3">
                        <div className="wow fadeInUp relative mb-10 rounded-xl bg-white py-10 px-9 shadow-md dark:bg-dark dark:shadow-md-dark lg:mb-4 lg:px-7 xl:px-9">
                            <span className="absolute top-5 right-5 text-sm font-medium text-primary underline">
                                Most popular
                            </span>
                            <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
                                Unlimited
                            </h3>
                            <p className="mb-7 text-base text-body">
                                Lorem Ipsum is simply dummythe.
                            </p>
                            <p className="border-b border-stroke pb-5 text-black dark:border-stroke-dark dark:text-white">
                                <span className="text-[40px] font-bold leading-none">
                                    <sup class="text-[22px] font-medium"> $ </sup>
                                    35
                                </span>
                                <span class="text-base text-body"> /month </span>
                            </p>
                            <div className="space-y-4 pt-[30px] pb-10">
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    60-day chat history
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    35 GB cloud storage
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    24/7 Support
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    Custom Branding Strategy
                                </p>
                            </div>
                            <a href="#" className="block w-full rounded-md bg-cyan-400  py-[10px] px-8 text-center text-base font-medium text-white hover:bg-opacity-90">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-6 md:w-1/2 lg:w-1/3">
                        <div className="wow fadeInUp mb-10 rounded-xl bg-white py-10 px-9 shadow-md dark:bg-dark dark:shadow-md-dark lg:mb-4 lg:px-7 xl:px-9" >
                            <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black dark:text-white">
                                Business
                            </h3>
                            <p className="mb-7 text-base text-body">
                                Lorem Ipsum is simply dummythe.
                            </p>
                            <p className="border-b border-stroke pb-5 text-black dark:border-stroke-dark dark:text-white">
                                <span className="text-[40px] font-bold leading-none">
                                    <sup className="text-[22px] font-medium"> $ </sup>
                                    59
                                </span>
                                <span className="text-base text-body"> /month </span>
                            </p>
                            <div className="space-y-4 pt-[30px] pb-10">
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    120-day chat history
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    1 TB cloud storage
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    24/7 Support
                                </p>
                                <p className="flex text-base text-black dark:text-body">
                                    <span className="mr-[10px] mt-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_44_7)">
                                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#00BE6C"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_44_7">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    Custom Branding Strategy
                                </p>
                            </div>
                            <a href="#" className="block w-full rounded-md bg-black py-[10px] px-8 text-center text-base font-medium text-white hover:bg-dark dark:bg-[#2A2E44] dark:hover:bg-bg-cyan-500 ">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}