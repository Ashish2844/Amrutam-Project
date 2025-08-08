import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image7 from '../assets/images/image 7.png'
import bowl from '../assets/images/bowl.png'
import ing1 from '../assets/images/ing1.png'
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import videoImage from '../assets/images/videoImage.png'
import playIcon from '../assets/images/playIcon.png'
import image1 from '../assets/images/image 7.png'
import image2 from '../assets/images/image 171.png'
import image3 from '../assets/images/image 174.png'
import { Add } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ellipseImage from "../assets/images/ellipseImage.png"

const Shop = () => {
    const images = [
        image7,
        image7,
        image7,
        image7,
    ];

    const [mainImage, setMainImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const reviews = [
        {
            name: "Anjali Sharma",
            date: "August 5, 2025",
            stars: 5,
            text: "This herbal product worked wonders for me. I feel much more balanced and healthy! Thank you Amrutam for such an amazing Ayurvedic solution.",
        },
        {
            name: "Ravi Verma",
            date: "July 28, 2025",
            stars: 5,
            text: "I’ve tried a lot of products for my hair, but nothing has worked like this one. It made my hair softer and reduced hair fall significantly in just two weeks!",
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

    const swiperSettings = {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        spaceBetween: 1,
        navigation: true,
        pagination: { clickable: true },
        className: "w-full p-6 bg-white h-100",
        breakpoints: {
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    };

    const doctors = [
        {
            name: "Dr. Vaishali Sharma",
            image: ellipseImage,
            qualification: "Ayurveda Practitioner, (BAMS, MD)",
            experience: "25+ years of Experience",
            specialization: "Skin Disorders"
        },

        {
            name: "Dr. Vaishali Sharma",
            image: ellipseImage,
            qualification: "Ayurveda Practitioner, (BAMS, MD)",
            experience: "25+ years of Experience",
            specialization: "Skin Disorders"
        },

        {
            name: "Dr. Vaishali Sharma",
            image: ellipseImage,
            qualification: "Ayurveda Practitioner, (BAMS, MD)",
            experience: "25+ years of Experience",
            specialization: "Skin Disorders"
        },

    ];



    return (
        <>
            <Navbar />
            <section className="flex flex-col lg:flex-row gap-10 px-6 md:px-12 lg:px-5 py-16 ">

                <div className="flex flex-col items-center w-full lg:w-1/2">

                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-[450px] h-[400px] rounded-xl shadow-md mb-6"
                    />


                    <div className="flex gap-4 flex-wrap justify-center">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`product ${index}`}
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-20 object-cover border rounded-md cursor-pointer hover:ring-2 ring-emerald-500 ${mainImage === img ? "ring-2 ring-emerald-600" : ""
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side - Info */}
                <div className="flex-1 space-y-6">
                    {/* Product Title */}
                    <h2 className="text-3xl font-semibold text-gray-800">Ayurvedic Skin Care Cream</h2>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, idx) => (
                            <span key={idx}>★</span>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">(204 reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold text-emerald-700">₹649.00</div>

                    {/* Quantity with + / - buttons */}
                    <div className="flex items-center gap-4 mt-4">
                        <label className="text-gray-700 font-medium">Quantity:</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                                onClick={decreaseQty}
                                className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
                            >
                                −
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || 1)))}
                                className="w-12 text-center border-x border-gray-300 outline-none"
                            />
                            <button
                                onClick={increaseQty}
                                className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-200"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <button className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-all duration-300">
                        Add to Cart
                    </button>

                    {/* Product Description */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.
                            These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!
                            This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!
                            It's time to bring spa home and unwind.
                        </p>
                    </div>

                    {/* Product Highlights */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-800">
                            <div className="flex gap-1"><img src={bowl} alt="bowl icon" />
                                Product Highlights</div></h2>

                        <div className="flex flex-wrap gap-3 mt-3">
                            {[
                                "Helps with dry fizzy hair",
                                "Strengthens roots",
                                "Adds natural shine",
                                "Reduces hair fall"
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="bg-[#fcead2] flex items-end text-left rounded-md px-3 py-2 text-sm text-gray-950 font-semibold
                   w-full sm:w-[48%] md:w-[22%] h-28"
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Key Ingredients */}
                    <div className="mt-6">
                        <h2 className="text-lg flex flex-row justify-between font-semibold text-gray-800">
                            <div className="flex gap-1">
                                <img src={bowl} alt="bowl icon" />
                                Key Ingredients
                            </div>
                            <Link to='/ingredients' className="text-emerald-700 hover:text-emerald-600">View All Ingredients <KeyboardArrowRight/></Link>
                        </h2>
                        <div className="flex flex-wrap gap-3 mt-3">
                            {[
                                "Naturally enhance brain and relieve pain",
                                "Naturally enhance brain and relieve pain",
                                "Naturally enhance brain and relieve pain",
                                "Naturally enhance brain and relieve pain",
                            ].map((text, index) => (
                                <Link
                                    key={index}
                                    className="bg-[#fcead2] rounded-md px-4 py-3 text-sm text-gray-700 flex items-center justify-between w-full sm:w-[48%] md:w-[45%] lg:w-[48%]"
                                >

                                    <img src={ing1} alt="icon" className="w-10 h-10 mr-3 flex-shrink-0" />

                                    <div className="flex-1 pr-2">
                                        <h2 className="font-semibold text-md">Shatavar</h2>
                                        <p className="text-sm">{text}</p>
                                    </div>

                                    <div className="text-gray-700 text-xl">
                                        <KeyboardArrowRight />
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>


                    {/* How to use */}
                    <div className="mt-6">
                        <h2 className="font-bold text-lg mb-4">How to use</h2>
                        <p className="bg-[#fcead2] w-full md:w-[70%] lg:w-[100%] h-auto rounded-2xl flex items-center justify-center text-left px-4 py-4 text-sm md:text-base lg:text-lg leading-relaxed">
                            Mix one or two tablespoons of Herbal Child Care Malt with milk or
                            100-200ml warm water and then consume twice a day or consult our Ayurvedic
                            Expert to find the right Ayurvedic recipe for you.
                        </p>
                    </div>

                    {/* General Instructions */}
                    <div className="mt-6">
                        <h2 className="font-bold text-lg mb-4">General Instructions</h2>
                        <p className="bg-[#fcead2] w-full md:w-[70%] lg:w-[100%] h-auto rounded-2xl flex items-center justify-center text-left px-4 py-4 text-sm md:text-base lg:text-lg leading-relaxed">
                            Store in a cool and dry place away from direct sunlight. Not advisable for diabetic patients
                        </p>
                    </div>

                    {/* Asked questions */}
                    <div className="mt-6">
                        <h2 className="font-bold text-lg mb-4">Commonly Asked Questions</h2>
                        <div className="bg-[#fcead2] rounded-2xl flex flex-col">
                            <p className="font-bold ml-4 py-2">Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care</p>
                            <p className="bg-[#fcead2] w-full md:w-[70%] lg:w-[100%] h-auto rounded-2xl flex items-center justify-center text-left px-4 py-4 text-sm md:text-base lg:text-lg leading-relaxed">
                                This product is ideal for growing babies and kids to nurture their health in a holistic manner
                            </p>
                        </div>

                        <div className="bg-[#fcead2] rounded-2xl flex flex-col mt-3">
                            <p className="font-bold ml-4 py-2">Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care</p>
                            <p className="bg-[#fcead2] w-full md:w-[70%] lg:w-[100%] h-auto rounded-2xl flex items-center justify-center text-left px-4 py-4 text-sm md:text-base lg:text-lg leading-relaxed">
                                Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.
                                This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.
                                Giving your little one Amrutam's Child Care Malt daily will help them Improve their appetite and digestion.
                                It is useful in treating anemia, general debility and maintaining a healthy weight.
                                100% Natural and Ayurvedic
                                PETA certified cruelty-free
                                Hand-picked and ethically sourced ingredients
                                AYUSH certified and US FDA approved
                            </p>
                        </div>

                    </div>


                    <div className="w-full md:w-[700px] mx-auto my-8">
                        <div className="relative pt-[56.25%] overflow-hidden rounded-lg shadow-lg">
                            <img
                                className="absolute top-0 left-0 w-full h-full"
                                src={videoImage}
                                alt="Video Thumbnail"
                            />
                            <img
                                src={playIcon}
                                alt="Play Button"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="px-4 md:px-12 lg:px-24 py-10">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Review and Rating</h2>

                {/* Rating Summary Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div className="bg-[#fcead2] px-6 py-4 rounded-lg shadow-md text-center">
                        <div className="text-3xl font-bold text-amber-600">5.0</div>
                        <div className="flex justify-center my-1 text-amber-500">
                            {/* Static 5 stars */}
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09L5.5 12.09.5 7.91l6.122-.91L10 2l3.378 5 6.122.91-4.5 4.18 1.378 6-5.878-3.09z" />
                                </svg>
                            ))}
                        </div>
                        <div className="text-sm text-gray-600">Based on 20 reviews</div>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-[#fff7e2] text-emerald-800 px-4 py-2 rounded-md shadow-md transition">
                            See More Reviews
                        </button>
                        <button className="bg-[#fff7e2] text-emerald-800 px-4 py-2 rounded-md shadow-md transition">
                            Write a Review
                        </button>
                    </div>


                </div>

                <div className="flex flex-col gap-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="rounded-lg p-5 bg-[#fcead2] shadow-sm hover:shadow-md transition">
                            <p className="text-gray-800 text-sm mb-1">{review.text}</p>
                            <div className="flex gap-3 items-center text-sm text-gray-600">
                                <span className="font-semibold text-gray-800">{review.name}</span>
                                <span className="text-gray-900">•</span>
                                <span>{review.date}</span>
                                <span className="text-gray-900">•</span>
                                <div className="flex text-amber-500">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09L5.5 12.09.5 7.91l6.122-.91L10 2l3.378 5 6.122.91-4.5 4.18 1.378 6-5.878-3.09z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            <section className="py-12 px-4 md:px-12 lg:px-24 bg-transparent">
                <h2 className="text-2xl font-semibold text-center mb-5">People has also bought</h2>
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


            <section className="bg-white border border-transparent mt-4">
                <h2 className="font-semibold text-lg text-center mb-5 mt-3">Meet Our Experts</h2>
                <Swiper {...swiperSettings}>
                    {doctors.map((doc, index) => (
                        <SwiperSlide key={index} className="px-15 py-6">
                            <div className="bg-[#fff7e2] shadow-md rounded-4xl p-6 w-75 h-full flex flex-col items-center text-center">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500 mb-4"
                                />
                                <h3 className="text-lg font-semibold">{doc.name}</h3>
                                <p className="text-sm text-gray-600">{doc.qualification}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-medium">Experience:</span> {doc.experience}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-medium">Specialization:</span> {doc.specialization}
                                </p>
                                <div className="mt-auto pt-6 w-full">
                                    <button className="mb-0 bg-[#3a643c] text-white px-4 py-2 rounded hover:bg-emerald-700 transition duration-300 w-full">
                                        Book a Session
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center mt-4 mb-7">
                    <button className="border border-emerald-800 bg-[#eff5f1] text-emerald-800 px-4 py-2 rounded-xl flex items-center gap-1">
                        Find More Experts <KeyboardArrowRight />
                    </button>
                </div>
            </section>


            <Footer />
        </>

    );
};

export default Shop;
