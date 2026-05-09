import { Button } from "@heroui/react";
import netflixLogo from '../../assets/netflix.svg';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-6 md:px-12 lg:px-44 py-8 flex justify-between items-center font-sans">
            <div className="flex items-center">
                <img 
                    src={netflixLogo} 
                    alt="Netflix" 
                    className="h-7 sm:h-7 md:h-12 lg:h-10 w-auto"
                />
            </div>

            {/* Sign In Button */}
            <Button 
                
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 sm:px-4 py-1 text-sm sm:text-base rounded"
            >
                Sign In
            </Button>
        </nav>
    )
}