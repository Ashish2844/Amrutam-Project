import Navbar from "../components/Navbar"
import more from "../assets/svg/more.svg"
import All from "../assets/svg/All.svg"
import Bones from "../assets/svg/Bones.svg"
import Hair from "../assets/svg/Hair.svg"
import Immunity from "../assets/svg/Immunity.svg"
import SkinCare from "../assets/svg/SkinCare.svg"
import Stomach from "../assets/svg/Stomach.svg"
import { Add } from "@mui/icons-material";
import image1 from '../assets/images/image 7.png'
import image2 from '../assets/images/image 171.png'
import image3 from '../assets/images/image 174.png'
import Footer from "../components/Footer"

const Home = () => {
    const products = [
        {
            id: 1,
            image: image1,
            title: "Amrutam Kuntal Care Hair Spa | Do- it yourself Hair Treatment",
            price: "₹649.00",
            ml: "200ml",
            rating: 4.5
        },
        {
            id: 2,
            image: image2,
            title: "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
            price: "₹649.00",
            ml: "200ml",
            rating: 4.2
        },
        {
            id: 3,
            image: image3,
            title: "Amrutam Nari Sondarya Malt | Complete Care for Women's Health and Beauty",
            price: "₹649.00",
            ml: "200ml",
            rating: 4.8
        }
    ];
    return (
        <div>
            <Navbar />
            <div className="mt-4 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 p-4 bg-transparent">
                {[All, Hair, SkinCare, Stomach, Bones, Immunity, more].map((icon, index) => (
                    <a key={index}>
                        <div className="bg-white rounded-full p-2 w-24 h-24 flex items-center justify-center hover:shadow-lg transition-all duration-300">
                            <img src={icon} alt="icon" className="w-300 h-300" />
                        </div>
                    </a>
                ))}
            </div>


            <section className="py-12 px-4 md:px-12 lg:px-24 bg-transparent">
                <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-transparent  flex flex-col items-center text-center transition duration-300 hover:shadow-xl"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                            <p className="text-sm text-gray-600 mt-1 mb-3">
                                ₹{product.price} / {product.ml}
                            </p>

                            <div className="flex items-center justify-center mt-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={i < Math.floor(product.rating) ? "#facc15" : "none"}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="w-5 h-5 text-yellow-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.51l7.19-.61L12 2.5l2.31 6.4 7.19.61-5.02 4.44 1.64 7.03L12 17.25z"
                                        />
                                    </svg>
                                ))}
                            </div>

                            <button className="absolute bottom-4 right-4 bg-emerald-800 text-white p-2 rounded-full hover:bg-emerald-700 transition">
                                <Add />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 px-4 md:px-12 lg:px-24 bg-transparent">
                <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-transparent  flex flex-col items-center text-center transition duration-300 hover:shadow-xl"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                            <p className="text-sm text-gray-600 mt-1 mb-3">
                                ₹{product.price} / {product.ml}
                            </p>

                            <div className="flex items-center justify-center mt-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={i < Math.floor(product.rating) ? "#facc15" : "none"}
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="w-5 h-5 text-yellow-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.51l7.19-.61L12 2.5l2.31 6.4 7.19.61-5.02 4.44 1.64 7.03L12 17.25z"
                                        />
                                    </svg>
                                ))}
                            </div>

                            <button className="absolute bottom-4 right-4 bg-emerald-800 text-white p-2 rounded-full hover:bg-emerald-700 transition">
                                <Add />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div >
    )
}



export default Home

