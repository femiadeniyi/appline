import React from "react";
import client1 from "../assets/company-logo/client-01.svg";
import client2 from "../assets/company-logo/client-02.svg";
import client3 from "../assets/company-logo/client-03.svg";
import client4 from "../assets/company-logo/client-04.svg";
import client5 from "../assets/company-logo/client-05.svg";
import client6 from "../assets/company-logo/client-05.svg";
export default function Company() {
    return (
        <section className="relative z-10 bg-[#F8FAFB] pt-[70px] pb-[50px] dark:bg-[#15182B]">
            <div class="wow fadeInUp container overflow-hidden ">
                <div class="-mx-4 flex flex-wrap items-center justify-center">
                    <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                        <div class="mb-5 text-center">
                            <a href="javascript:void(0)" class="block">
                                <img src={client1} alt="client" class="mx-auto max-w-full opacity-[65%] hover:opacity-100"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                        <div class="mb-5 text-center">
                            <a href="javascript:void(0)" class="block">
                                <img src={client2} alt="client" class="mx-auto max-w-full opacity-[65%] hover:opacity-100"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                        <div class="mb-5 text-center">
                            <a href="javascript:void(0)" class="block">
                                <img src={client3} alt="client" class="mx-auto max-w-full opacity-[65%] hover:opacity-100"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                        <div class="mb-5 text-center">
                            <a href="javascript:void(0)" class="block">
                                <img src={client4} alt="client" class="mx-auto max-w-full opacity-[65%] hover:opacity-100"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                        <div class="mb-5 text-center">
                            <a href="#" class="block">
                                <img src={client5} alt="client" class="mx-auto max-w-full opacity-[65%] hover:opacity-100"/>
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
                        <div class="mb-5 text-center">
                            <a href="#" class="block">
                                <img src={client6} alt="client" class="mx-auto max-w-full opacity-[65%] hover:opacity-100"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}