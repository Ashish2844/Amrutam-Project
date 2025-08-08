import { Menu } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import leaf from '../assets/images/leaf.png';
import Frame from '../assets/images/Frame.png';
import wallet from '../assets/images/wallet.png';
import person from '../assets/images/person.png';
import notification from '../assets/images/notification.png';
import cart from '../assets/images/cart.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuLinks = [
        { name: "Home", path: "/" },
        { name: "Find Doctors", path: "/find-doctors" },
        { name: "Lab Test", path: "/lab-test" },
        { name: "Shop", path: "/shop" },
        { name: "Forum", path: "/forum" },
        { name: "About Us", path: "/about-us" },
    ];

    const icons = [wallet, cart, notification, person];
    const quantities = [2, 1, 0, 0];


    return (
        <nav>
            <div className="w-full shadow-md p-4 relative z-50" style={{ backgroundColor: 'rgb(255, 247, 226)', color: '#30653b' }}>
                <div className="flex items-center justify-between">

                    <button className="md:hidden" onClick={() => setMenuOpen(true)}>
                        <Menu />
                    </button>

                    <div className="hidden md:block text-sm mr-4">
                        📞 +91 98765 43210
                    </div>

                    <div className="tracking-widest text-4xl font-mono font-semibold mx-auto md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        AMRUTAM
                    </div>


                    <div className="flex items-center space-x-4 md:ml-auto">

                        <div className="flex md:hidden items-center space-x-3">
                            <button className="p-1 rounded-full hover:bg-[#d2eae8]">
                                <SearchIcon />
                            </button>
                            <a><img src={cart} alt="cart icon" /></a>
                        </div>
                    </div>
                </div>

                <div className="hidden ml-50 md:flex mt-6 justify-center space-x-7 font-medium">
                    {menuLinks.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `border-b-2 pb-1 transition-all duration-200 ${isActive ? 'border-b-emerald-800 text-emerald-800' : 'border-b-transparent text-emerald-800'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}


                    <div className="ml-10 flex items-center space-x-4">
                        {icons.map((icon, i) => (
                            <div key={i} className="relative">
                                <a>
                                    <img src={icon} alt="icon" className="w-8 h-8" />
                                </a>

                                {quantities[i] > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-emerald-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {quantities[i]}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                        <button onClick={() => setMenuOpen(false)} className="text-gray-600 text-2xl font-bold">
                            ×
                        </button>
                    </div>

                    <div className="flex flex-col space-y-4 text-gray-700 font-medium">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Find Doctors", path: "/doctors" },
                            { name: "Lab Test", path: "/lab-test" },
                            { name: "Shop", path: "/shop" },
                            { name: "Forum", path: "/forum" },
                            { name: "About Us", path: "/about" },
                        ].map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `hover:text-emerald-700 ${isActive ? "text-emerald-700 font-semibold" : ""
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="pt-4 text-sm text-gray-500 border-t mt-4">
                            Contact us on 📞 +91 98765 43210
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
                    />
                )}
            </div>


            <section
                className="w-full py-12 px-4 md:px-8 lg:px-24"
                style={{
                    backgroundImage: `url(${leaf})`,
                    backgroundSize: "100% 100%",
                }}
            >
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">Store</h1>

                    <div className="mt-6 mx-auto w-full max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-4">

                        <div className="w-full sm:w-[70%] bg-white shadow-md rounded-xl flex items-center px-4 py-2">
                            <button className="flex items-center gap-1 text-gray-700 px-4 py-1.5 rounded-full hover:bg-[#d2eae8] transition-colors duration-300">
                                <SearchIcon style={{ fontSize: "20px" }} />
                            </button>
                            <input
                                type="text"
                                placeholder="Search for Kuntal Care"
                                className="flex-1 outline-none bg-transparent text-sm md:text-base text-gray-700 pl-2"
                            />
                        </div>


                        <div className="w-full sm:w-auto flex justify-center">
                            <button className="bg-white px-2 py-2 rounded-xl hover:bg-emerald-800 transition-colors duration-300">
                                <img src={Frame} alt="frame icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
