import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import chitrak from '../assets/images/citrak.png'
import CircularProgress from "@mui/material/CircularProgress"
import vata from '../assets/images/vata.png'
import kapha from '../assets/images/kapha.png'
import pitta from '../assets/images/pitta.png'
import divdash from '../assets/images/div.dash-boxs.png'
import divdash1 from '../assets/images/div.dash-boxs (1).png'
import divdash2 from '../assets/images/div.dash-boxs (2).png'
import divdash3 from '../assets/images/div.dash-boxs (3).png'
import divdash4 from '../assets/images/div.dash-boxs (4).png'
import divdash5 from '../assets/images/div.dash-boxs (5).png'
import divdash6 from '../assets/images/div.dash-boxs (6).png'
import divdash7 from '../assets/images/div.dash-boxs (7).png'
import { KeyboardArrowLeft, KeyboardArrowUp, LocationOn, Close } from "@mui/icons-material"
import rasa from '../assets/images/rasa.png'
import veerya from '../assets/images/veerya.png'
import guna from '../assets/images/guna.png'
import vipaka from '../assets/images/vipaka.png'
import matcha from '../assets/images/matcha 1.png'
import medicine from '../assets/images/medicine 1.png'
import cream from '../assets/images/cream 1.png'
import digestive from '../assets/images/Digestive disorders.png'
import digestive1 from '../assets/images/Digestive disorders (1).png'
import digestive2 from '../assets/images/Digestive disorders (2).png'
import constipation from '../assets/svg/constipation.svg'
import constipation1 from '../assets/svg/constipation (1).svg'
import root from '../assets/images/root 1.png'
import root1 from '../assets/images/root (1) 1.png'
import leaves from '../assets/images/leaves 1.png'
import { useTheme, useMediaQuery } from "@mui/material";
import image1 from '../assets/images/image 7.png'
import { useState } from "react"


const items = [
    { image: divdash, description: "Calms The Nervous System And Reduces Anxiety." },
    { image: divdash1, description: "Reduces Cholesterol anad Supports Weight Loss." },
    { image: divdash2, description: "Manage Diabeties By Lowering Blood Sugar Levels." },
    { image: divdash3, description: "Benefits of Hemrrhoids of Vata Origin " },
    { image: divdash4, description: "Improves Digestion And Boosts Metabolism" },
    { image: divdash5, description: "Prevents Deposits In Arteries, Supporting Heart Health" },
    { image: divdash6, description: "Treats Skin Conditions Like Acne And Dermatitis" },
    { image: divdash7, description: "Speeds Up Wound Healing And Promotes New Skin Growth" },
]

const ayurvedicProperties = [
    {
        image: rasa,
        name: "Rasa",
        description: "Katu(Pungent) Stimulates salivation and digestion",
    },
    {
        image: veerya,
        name: "Veerya",
        description: "Ushna (Hot)Increases heat and energy in the body",
    },
    {
        image: guna,
        name: "Guna",
        description: "Guna Laghu (Light) , Ruksha (Dry), Tiksna (Sharp)Easy to digest, reduces heaviness",
    },
    {
        image: vipaka,
        name: "Vipaka",
        description: "Vipaka  Katu (Pungent)Drying and stimulating even after digestion",
    },
];

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
        id: 1,
        image: image1,
        title: "Amrutam Kuntal Care Hair Spa | Do- it yourself Hair Treatment",
        price: "₹649.00",
        ml: "200ml",
        rating: 4.5
    },
    {
        id: 1,
        image: image1,
        title: "Amrutam Kuntal Care Hair Spa | Do- it yourself Hair Treatment",
        price: "₹649.00",
        ml: "200ml",
        rating: 4.5
    },

];

const Ingredient = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const getSize = () => {
        if (isSm) return 120;
        if (isMd) return 150;
        return 180;
    };

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <Navbar />
            <div className="border rounded-lg text-emerald-700 w-fit h-10 flex items-center justify-center mt-6 ml-4 sm:ml-6 md:ml-10 lg:ml-20">
                <Link to="/shop" className="flex items-center px-2 sm:px-3 text-sm sm:text-base">
                    <KeyboardArrowLeft className="text-lg sm:text-xl" />
                    <span className="ml-1">Back</span>
                </Link>
            </div>

            <section className="px-4 md:px-12 py-10 bg-transparent">
                <div className="flex flex-col md:flex-row items-start gap-10">

                    <div className="w-full md:w-1/2">
                        <img
                            src={chitrak}
                            alt="Product"
                            className="w-full h-auto max-w-md rounded-lg border mx-auto"
                        />
                    </div>


                    <div className="w-full md:w-1/2">

                        <h2 className=" font-bold text-black text-4xl mb-4">Chitrak - Plumbago zeylancia
                            (Sanskrit - चित्रक)"</h2>


                        <p className="text-gray-700 mb-6">
                            Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body. It is great for boosting metabolism, enhancing skin health, and easing joint pain.
                        </p>


                        <div>
                            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                                Why Chitrak?
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Chitrak is valued because it helps lower blood sugar, boosts digestion, and reduces anxiety.</li>
                                <li>It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.</li>
                                <li>It is most used in Ayurvedic medicines for indigestion.</li>
                            </ul>
                        </div>

                        <section className="py-8 px-4">
                            <h2 className="mt-5 font-semibold text-2xl text-center">Prakriti Impact</h2>

                            <div className="flex flex-row md:flex-row justify-center items-center md:gap-10 gap-8 mt-10">
                                {/* Circle Card */}
                                {[
                                    { icon: vata, color: "#377dd6", label: "Vata", value: 50 },
                                    { icon: kapha, color: "#39653c", label: "Kapha", value: 50 },
                                    { icon: pitta, color: "#ffa34f", label: "Pitta", value: 65 },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="relative w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]">
                                            <CircularProgress
                                                variant="determinate"
                                                value={100}
                                                sx={{ color: "#f4ebce" }}
                                                size={getSize()}
                                                thickness={4}
                                            />
                                            <CircularProgress
                                                variant="determinate"
                                                value={item.value}
                                                sx={{
                                                    color: item.color,
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    '& .MuiCircularProgress-circle': {
                                                        strokeLinecap: 'round',
                                                    },
                                                }}
                                                size={getSize()}
                                                thickness={4}
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <img src={item.icon} alt="icon" className="w-10 sm:w-12 md:w-14" />
                                            </div>
                                        </div>
                                        <span className="mt-3 text-center text-gray-700 font-medium text-sm sm:text-base">
                                            <span className="text-gray-400">{item.label}</span> Balanced
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>



                        <section className="p-6 bg-transparent">
                            <h2 className="mt-5 mb-5 font-semibold text-xl">Benefits</h2>
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-2 gap-6">
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#fee9ca] rounded-lg shadow p-4 flex flex-col"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <img
                                                    src={item.image}
                                                    alt={`Item ${index + 1}`}
                                                    className="w-16 h-16 rounded-md object-cover"
                                                />
                                            </div>
                                            <p className="mt-4 text-gray-700 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>


                        <section>

                            <div className="py-10 px-4 bg-transparent">
                                <h2 className="text-lg sm:text-3xl font-semibold text-left mb-10">
                                    Ayurvedic Properties
                                </h2>

                                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-0">
                                    {ayurvedicProperties.map((prop, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center text-center bg-transparent p-6"
                                        >
                                            <img
                                                src={prop.image}
                                                alt={prop.name}
                                                className="w-16 h-16 object-contain"
                                            />
                                            <h3 className="text-lg font-semibold text-black">{prop.name}</h3>
                                            <p className="text-md text-gray-900">{prop.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-2">
                                <h2 className="text-lg sm:text-3xl font-semibold text-left mb-10">
                                    Important Formulations
                                </h2>
                                <div className="bg-[#fee9ca] md:bg-transparent max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-0">
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={matcha} alt="icon" />
                                        Chitrak Haritaki</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={medicine} alt="icon" />
                                        Chitrakadi Vati</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg"><img src={cream} alt="icon" />
                                        Kalyanagulam</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={matcha} alt="icon" />
                                        Chitrakadi Churna</div>
                                </div>
                            </div>


                            <div className="mt-20">
                                <h2 className="text-lg sm:text-3xl font-semibold text-left mb-10">
                                    Therapeutic Uses
                                </h2>
                                <div className="bg-[#fee9ca] md:bg-transparent max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 gap-0">
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={constipation} alt="icon" />
                                        Agnimandya</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={digestive} alt="icon" />
                                        Grahani Rog</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={digestive1} alt="icon" />
                                        Arsha</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={constipation1} alt="icon" />
                                        Udara Shula</div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={digestive2} alt="icon" />
                                        Gudasotha</div>
                                </div>
                            </div>


                            <div className="mt-20">
                                <h2 className="text-lg sm:text-3xl font-semibold text-left mb-10">
                                    Plant parts and its purpose
                                </h2>
                                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={root} alt="icon" />
                                        <span className="text-black font-semibold text-2xl">Root</span>
                                        <p>
                                            Digestion, Skin conditions, manage blood sugar level.</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={root1} alt="icon" />
                                        <span className="text-black font-semibold text-2xl">Root Bark</span>
                                        <p> Manage obesity, metabolism and assit in weight loss. </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 text-black text-lg">
                                        <img src={leaves} alt="icon" />
                                        <span className="text-black font-semibold text-2xl">Leaves</span>
                                        <p>
                                            Used externally for skin conditions and wounds.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20">
                                <h2 className="text-lg sm:text-3xl font-semibold text-left mb-5">
                                    Best Combined with
                                </h2>
                                <p className="text-2xl text-left mb-5">Pipplai, Haritakai, Guggulu, Punarnava, Amla, Giloy,</p>
                            </div>

                            <div className="mt-20">
                                <h2 className="text-lg sm:text-3xl font-semibold text-left mb-5">
                                    Geographical Locations
                                </h2>
                                <p className="text-2xl text-left mb-5"><LocationOn className="text-emerald-800" />
                                    It is native to tropical and subtropical regions worldwide, including India and Srilanka.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </section>



            {!isVisible && (
                <div className="fixed bottom-0 left-0 w-full bg-white py-3 px-4 z-50 sm:hidden">
                    <button
                        onClick={() => setIsVisible(true)}
                        className="w-full flex items-center justify-center text-emerald-800 font-medium"
                    >
                        <KeyboardArrowUp className="mr-1" />
                        View Products
                    </button>
                </div>
            )}

            <section
                className={`
         transition-transform duration-700 ease-in-out
          sm:relative sm:translate-y-0
         ${isVisible ? "translate-y-0 fixed bottom-0 left-0 w-full bg-white z-50 h-[90vh] overflow-auto" : "translate-y-full fixed bottom-0 left-0 w-full bg-transparent z-50 h-[90vh] overflow-auto sm:translate-y-0 sm:relative sm:h-auto sm:overflow-visible"}
           `}
            >
                <h2 className="text-2xl font-semibold md:ml-20 md:mb-5 md:mt-5">Product with "Chitrak" as primary ingredients </h2>
                {/* Close button (top right) */}
                <div className="flex justify-end px-4 py-2 border-b sm:hidden">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-700 hover:text-red-600 transition"
                    >
                        <Close />
                    </button>
                </div>

                {/* Product grid */}
                <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-transparent flex flex-col items-center text-center transition duration-300 hover:shadow-xl"
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
                                +
                            </button>
                        </div>
                    ))}
                </div>
            </section>


            <Footer />

        </>
    )
}

export default Ingredient
