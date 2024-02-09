import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {

    return (

        <div className="flex bg-black text-gray-200 py-7">

            <div className="md:flex w-full md:justify-around mx-32 md:mx-0">

                <section className="border-b pb-10 mb-10 md:py-0 md:border-none">
                    <h1 className="mb-3 font-semibold">CUSTOMER SERVICE</h1>
                    <div className="text-sm flex flex-col">
                        <a href="#" className="hover:underline">Contact us</a>
                        <a href="#" className="hover:underline">Frequently Asked Questions</a>
                        <a href="#" className="hover:underline">Cancellation & Refund</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Privacy and Security</a>
                    </div>
                </section>

                <section className="border-b pb-10 mb-10 md:py-0 md:border-none">
                    <h1 className="mb-3 font-semibold">INSTITUTIONAL</h1>
                    <div className="text-sm flex flex-col">
                        <a href="#" className="hover:underline">About Us</a>
                        <a href="#" className="hover:underline">Malls</a>
                        <a href="#" className="hover:underline">Information Collection Services</a>
                        <a href="#" className="hover:underline">Cookie Settings</a>
                    </div>
                </section>

                <section className="flex flex-col gap-y-10">
                    <div>
                        <h1 className="mb-3 font-semibold">DOWNLOAD OUR APPLICATION</h1>
                        <div className="flex gap-x-6">
                            <a href="#"><img className="w-[117px] h-[40px]" src="https://akn-ss.a-cdn.akinoncloud.com/cms/2021/04/06/8ab7de4c-18ab-4c1b-ad32-8a3753fe01b4.png" /> </a>
                            <a href="#"><img className="w-[117px] h-[40px]" src="https://akn-ss.a-cdn.akinoncloud.com/cms/2021/04/06/6e9d2638-e055-47ba-b28a-6d4bd21d2de0.png" /></a>
                        </div>
                    </div>

                    <div>
                        <h1 className="mb-3 font-semibold">FOLLOW US</h1>

                        <div className="flex gap-x-5 text-lg">
                            <a className=" hover:scale-125 duration-300" target="_blank" href="https://www.instagram.com/yakupmancar/saved/"><FaInstagram /></a>
                            <a className=" hover:scale-125 duration-300" target="_blank" href="https://www.linkedin.com/in/yakup-mancar-5458a4268/"><FaFacebook /></a>
                            <a className=" hover:scale-125 duration-300" target="_blank" href="https://github.com/yakupmancar"><FaXTwitter /></a>
                            <a className=" hover:scale-125 duration-300" target="_blank" href="#"><FaYoutube /></a>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Footer