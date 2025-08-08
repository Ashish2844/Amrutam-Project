import { FacebookOutlined, LinkedIn, Pinterest, X, YouTube } from "@mui/icons-material";
import { InstagramIcon } from "lucide-react";
import image68 from '../assets/images/image 68.png'
import image67 from '../assets/images/image 67.png'
import arrow1 from '../assets/images/arrow1.png'
import arrow2 from '../assets/images/arrow2.png'
import phone from '../assets/images/phone.png'
import time from '../assets/images/time.png'
import downloads from '../assets/images/downloads.png'
import ChatIcon from '../assets/images/chatIcon.png'

function Footer() {
    return (
        <>

            <section className="w-full bg-[#fdf5e6] py-12 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="w-full max-w-xl space-y-6 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#275c2f]">
                        Download Amrutam Ayurveda App Now
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        The Amrutam Ayurveda App is your one–stop app for all things Ayurveda!
                        Apart from mimicking the website, the app has added benefits
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-full font-medium border-2 border-gray-300 flex flex-row items-center gap-2 justify-center text-emerald-800 rounded-xl px-4 py-2 text-sm sm:text-base"
                            >
                                <img src={ChatIcon} alt="icon" className="w-6 sm:w-7" />
                                <p>Access To Prescriptions</p>
                            </div>
                        ))}
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center lg:justify-start">
                        <a href="#" className="w-32 sm:w-36">
                            <img src={image67} alt="Google Play" />
                        </a>
                        <a href="#" className="w-28 sm:w-32">
                            <img src={image68} alt="App Store" />
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative phoneImage">
                    <img
                        src={phone}
                        alt="Mobile App"
                        className="phone"
                    />

                    <img src={time} alt="icon" className="time" />


                    <img src={downloads} alt="icon" className="downloads" />


                    <img src={arrow1} alt="icon" className="arrow1" />

                    <img src={arrow2} alt="icon" className="arrow2" />

                </div>

            </section >


            <footer className="bg-[#dce3dc] text-[#275c2f] py-12 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-semibold">Get in Touch</h3>
                        <p className="text-sm text-gray-700">Email: support@amrutam.com</p>
                        <p className="text-sm text-gray-700 text-left w-60">
                            Amrutam Pharmaceuticals Pvt Ltd.,
                            Chitragupt ganj, Nai Sadak, Lashkar,
                            Gwalior - 474001
                        </p>
                        <p className="text-sm text-gray-700">Phone: +91 98765 43210</p>

                        <div className="flex gap-4 pt-2 text-[#275c2f]">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FacebookOutlined className="w-5 h-5 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="w-5 h-5 mt-1 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <YouTube className="w-5 h-5 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <X className="w-5 h-5 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <LinkedIn className="w-5 h-5 hover:text-emerald-600 transition-colors" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Pinterest className="w-5 h-5 hover:text-emerald-600 transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-semibold">Information</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="flex-1 space-y-4">
                        <h3 className="text-xl font-semibold">Subscribe</h3>
                        <p className="text-sm text-gray-700">Enter your email to receive updates.</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-auto"
                            />
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
                    © 2025 Amrutam Ayurveda. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
