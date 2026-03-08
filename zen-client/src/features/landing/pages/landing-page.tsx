import Navbar from "../components/Navbar";
import Hero from '../components/Hero'

export default function LandingPage() {  
    return (
        <div className="bg-background relative flex flex-col "> 
            <header className="px-64">
                <Navbar />
            </header>
            <Hero/>
        </div>
    );
}