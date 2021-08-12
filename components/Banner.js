import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[500px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[840px]">
            <Image 
                src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className="absolute top-1/2 w-full transform translate-y-[-40%]">
                <div className="max-w-7xl 2xl:max-w-full 2xl:mx-20 mx-auto px-8 sm:px-16"> 
                    <h1 className="text-2xl w-[150px] lg:text-5xl xl:text-6xl 2xl:text-7xl md:w-[500px] font-semibold text-white mb-5 tracking-tight" >Olympian & Paralympian Online Experiences</h1>
                    <button className=" bg-white text-sm px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Explore now</button>
                </div>
                
            </div>
        </div>
    )
}

export default Banner
