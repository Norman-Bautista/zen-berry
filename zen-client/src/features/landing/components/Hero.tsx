import { Sparkles } from 'lucide-react'
import Button from '../../../shared/components/Button'
import Timer from '../components/Timer'


export default function Hero() {

    return (
        <div className="bg-linear-to-r from-primary/30 via-background to-accent/30 h-dvh px-64">
                <section 
                    id="hero-section"
                    className="bg-background/10 relative flex justify-start py-12 px-8 rounded-2xl my-8 opacity-100 transition-all duration-1000 starting:opacity-0 starting:translate-y-8"
                >
                    <div className="flex flex-col max-w-2xl"> 
                        <span className="bg-primary inline-flex w-fit items-center gap-4 my-8 py-2 px-4 rounded-3xl text-accent-dark text-sm font-bold backdrop-blur-sm"> 
                            <Sparkles size={18} /> 
                            <p>Your Mindful Productivity Companion</p>
                        </span>
                        <h1 className="text-5xl md:text-6xl text-accent-dark font-extrabold leading-tight mb-4">
                            Focus Sweetly, <br />Grow Daily🍓
                        </h1>
                        <p className="text-lg text-gray-600 max-w-xl">
                            A strawberry-matcha productivity app with a sustainable Pomodoro timer. Gently grow your mind with gentle tracking — designed to keep you calm and focused.
                        </p>
                        
                        <div className="flex gap-4 mt-8">
                        <Button variant="secondary">
                           <p>Get Started − It's Free!</p>
                        </Button>
                        <Button variant="primary-outlined">
                            Watch Demo
                        </Button>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col w-md ml-64 p-8 shadow-accent-dark shadow-xl rounded-2xl">
                        <div>
                            <Timer />
                        </div>
                    </div>
                    
                </section>
                <section id="about-section"
                className=""
                >

                </section>
            </div>
    )
    
}