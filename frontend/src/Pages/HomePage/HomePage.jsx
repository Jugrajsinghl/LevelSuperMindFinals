// import React, { useEffect } from "react";
// import "./HomePage.css";
// import sun from './Images/sun.png'

// const HomePage = () => {

//     return (
//         <div className="homePage">


//             <div className="container">
//                 <div className="sun">
//                     <img src={sun} alt="sun" />
//                 </div>
//                 <div className="mercury"></div>
//                 <div className="venus"></div>
//                 <div className="earth">
//                     <div className="moon"></div>
//                 </div>
//                 <div className="mars"></div>
//                 <div className="jupiter"></div>
//                 <div className="saturn"></div>
//                 <div className="uranus"></div>
//                 <div className="neptune"></div>
//                 <div className="pluto"></div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;






import React from 'react';
import { Quote, Sun } from 'lucide-react';
import Planet from './Planet';
import WellnessBanner from '../WellnessBanner'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Planet from './components/Planet';

function HomePage() {

const navigate =useNavigate()
    const planets = [
        {
            name: 'Mercury',
            image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 120,
            speed: 20,
            size: 'w-10 h-10'
        },
        {
            name: 'Venus',
            image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 160,
            speed: 25,
            size: 'w-10 h-10'
        },
        {
            name: 'Earth',
            image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 200,
            speed: 30,
            size: 'w-10 h-10'
        },
        {
            name: 'Mars',
            image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 240,
            speed: 35,
            size: 'w-10 h-10'
        },
        {
            name: 'Jupiter',
            image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 300,
            speed: 45,
            size: 'w-10 h-10'
        },
        {
            name: 'Saturn',
            image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 360,
            speed: 50,
            size: 'w-10 h-10'
        },
        {
            name: 'Uranus',
            image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 420,
            speed: 55,
            size: 'w-8 h-8'
        },
        {
            name: 'Neptune',
            image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=100&h=100',
            orbitSize: 480,
            speed: 60,
            size: 'w-8 h-8'
        }
    ];



    const testimonials = [
        {
            id: 'video1',
            videoId: 'i1KL9-vcB7w', // Replace with your actual YouTube video ID
            name: 'Mandira Bedi',
            title: 'Life Coach',
            quote: 'The accuracy of my kundli reading was incredible. It helped me make important life decisions with confidence.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            id: 'video2',
            videoId: 'wSmmPNmnVMM', // Replace with your actual YouTube video ID
            name: 'Shweta Tiwari',
            title: 'Entrepreneur',
            quote: 'SoulAstro\'s predictions were spot on. Their guidance helped me navigate crucial business decisions.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            id: 'video3',
            videoId: '4Wyr0AAW2Sk', // Replace with your actual YouTube video ID
            name: 'Bharti Singh',
            title: 'Yoga Instructor',
            quote: 'The spiritual insights I gained through my kundli reading transformed my perspective on life.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
        }
    ];




    return (
        <div className="min-h-screen bg-[#0a0a2a] text-white overflow-hidden">
            {/* Hero Section */}
            <div className="absolute top-0 left-0 w-full p-6 z-50">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold">SoulAstro</h1>
                    <div className="space-x-6">
                        <button
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                        >
                            Daily Horoscope
                        </button>
                        <button
                        onClick={()=>navigate('authenticate')}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                        >
                            About
                        </button>
                    </div>
                </nav>
            </div>

            {/* Solar System */}
            <div className="relative w-full h-screen flex items-center justify-center">
                {/* Stars background */}
                <div className="absolute inset-0 stars"></div>

                {/* Sun */}
                <div className="relative z-10">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            {planets.map((planet, index) => (
                                <Planet
                                    key={planet.name}
                                    {...planet}
                                />
                            ))}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-20 h-20 bg-yellow-500 rounded-full animate-pulse glow-sun flex items-center justify-center">
                                    <Sun className="w-12 h-12 text-yellow-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-20 left-0 w-full text-center z-20">
                    <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                        Get your Kundli
                    </h2>
                    <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Explore the mysteries of the universe and uncover your destiny through the ancient wisdom of the stars.
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                        Read Your Horoscope
                    </button>
                </div>
            </div>







            < WellnessBanner/>




















            <section className="relative z-20 bg-gradient-to-b from-[#0a0a2a] to-[#1a1a4a] py-32">
                <div className="stars-dim absolute inset-0"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            Our Happy Customers
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="space-y-6">
                                {/* Video Container */}
                                <div className="relative aspect-video bg-[#2a2a6a] rounded-lg overflow-hidden group">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/* Testimonial Card */}
                                <div className="bg-[#2a2a6a]/50 p-6 rounded-lg backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <Quote className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                                        <p className="text-gray-300 italic">{testimonial.quote}</p>
                                    </div>
                                    <div className="mt-4 flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-yellow-300">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-400">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





























            {/* About Page */}

            <section id="about" className="min-h-screen relative z-20 bg-gradient-to-b from-[#0a0a2a] to-[#1a1a4a] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                            About SoulAstro
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-[#2a2a6a]/50 p-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Our Mission</h3>
                                <p className="text-gray-300">
                                    At SoulKundli, our mission is to provide personalized, accurate astrological insights that empower individuals to understand themselves better and navigate life’s challenges. Through detailed kundli readings and easy-to-understand explanations, we aim to help you align with your true self and make informed, meaningful decisions.
                                </p>
                            </div>

                            <div className="bg-[#2a2a6a]/50 p-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Expert Astrologers</h3>
                                <p className="text-gray-300">
                                    Our team consists of experienced astrologers who combine traditional knowledge
                                    with contemporary insights to deliver precise and meaningful readings.
                                </p>
                            </div>

                            <div className="bg-[#2a2a6a]/50 p-6 rounded-lg backdrop-blur-sm">
                                <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Advanced Technology</h3>
                                <p className="text-gray-300">
                                    Using cutting-edge astronomical calculations and AI-powered analysis,
                                    we provide the most accurate astrological predictions and insights.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 absolute -inset-4 blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80&w=800&h=800"
                                alt="Celestial background"
                                className="rounded-lg relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;