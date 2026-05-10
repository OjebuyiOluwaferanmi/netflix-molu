import Hero from "./components/home/Hero"
import Body from "./components/home/Bodyy"

export default function Home(){
    return(
        <>
            <div className="bg-black h-screen">
                <Hero />
                <Body />
            </div>
        </>
    )
}