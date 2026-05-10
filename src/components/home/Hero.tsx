import { Button, Input } from "@heroui/react";
import background from '../../assets/background.jpeg';
import Navbar from './Navbar'
import { MdArrowForwardIos } from "react-icons/md";

export default function Hero() {
    return (
        <div 
            style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}} 
            className="h-[85vh] bg-cover bg-center relative"
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 flex h-full flex-col items-center pt-48 ">

                <Navbar />
                
                <div className="flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-44 max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-bold mb-2  sm:mb-7 md:mb-3 lg:mb-7">
                        Unlimited movies, TV shows, and more
                    </h1>
                    <p className="text-sm sm:text-xl md:text-base lg:text-xl font-semibold mb-2  sm:mb-7 md:mb-3 lg:mb-7">
                        Starts at ₦2,500. Cancel anytime.
                    </p>
                    <p className="text-sm sm:text-xl md:text-base lg:text-base  mb-5">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    
                    <form className="flex flex-col items-center sm:flex-row md:flex-row gap-4 w-full max-w-2xl mx-auto">
                        <Input
                            type="email"
                            placeholder="Email address"
                       
                            required
                            className="flex-1 bg-black/60 border-white text-white focus:ring-white focus:border-white block w-full h-15 rounded-sm sm:text-sm p-4"
                            style={{
                            border: '1px solid grey',
                            color: 'white'
                        }}
                        />
                        <Button 
                            type="submit"
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white text-xl font-medium md:font-semibold h-13 md:h-15 rounded-sm px-4 md:px-8 lg:px-14 whitespace-nowrap"
                        >
                            Get Started  <MdArrowForwardIos />    
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}