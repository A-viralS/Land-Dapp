import {
    slider1,
    slider2,
    slider3,
    slider4,} from '../assets';
import SimpleImageSlider from "react-simple-image-slider";
import React, { useState } from "react";


const Header = () =>{
    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        {
           url: `${slider1}`,
        },
        {
           url: `${slider2}`,
        },
        {
           url: `${slider3}`,
        },
        {
           url: `${slider4}`,
        },
     ];

    return(
        <section id='' className={`w-[full] h-[600px] bg-slate-900`}>
            <div className="w-full">
                <SimpleImageSlider
                    width={"100%"}
                    height={600}
                    images={sliderImages}
                    // showNavs={true}
                    showBullets={true}
                    autoPlay={true} 
                    onStartSlide = {(index, length) => {
                        setImageNum(index);
                    }}
                    autoPlayDelay = {5}
                />
                <div className="absolute top-[100px] left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>
                <div className="absolute top-[100px] left-0 right-0 bottom-0 flex items-center justify-center self-center text-white w-[100vw]">
                <div className="container mx-auto text-center py-[100px] bg-gray-700 hover:bg-opacity-20 bg-opacity-40">
                    <h1 className="text-5xl font-bold mb-8">About Us</h1>
                    <p className="text-lg bg-transparent text-white hover:border-transparent border-b-2 border-transparent px-5">Welcome to the Land Registration System! We are dedicated to providing a reliable and efficient platform for the registration and management of land ownership. Our system aims to streamline the process of land registration, ensuring transparency, security, and ease of access for property owners, buyers, and government authorities.</p>
                </div>
                </div>
                {/* <Slider {...settings}>
                    <div className="h-screen w-full bg-cover bg-center absolute top-0 left-0" style={{backgroundImage: "url('https://www.pexels.com/photo/cryptocurrency-chart-displayed-on-a-laptop-14751274/')"}}></div>
                    <div className="h-screen w-full bg-cover bg-center absolute top-0 left-0" style={{backgroundImage: `url(${slider2 })`}}></div>
                    <div className="h-screen w-full bg-cover bg-center absolute top-0 left-0" style={{backgroundImage: `url(${slider3 })`}}></div>
                    <div className="h-screen w-full bg-cover bg-center absolute top-0 left-0" style={{backgroundImage: `url(${slider4 })`}}></div>
                </Slider> */}
        </div>
        </section>
    );
}


export default Header