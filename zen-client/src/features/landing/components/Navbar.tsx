
import Button from '../../../shared/components/Button'

export default function Navbar () {
    return (
        <nav className=" flex justify-between items-center py-2 px-4">
            <div>
                <h1
                className='text-accent-dark font-bold text-md'
                ><a href="">Zen Berry</a></h1>
            </div>
            <div className='flex gap-6 text-accent-dark font-bold text-sm'>
                <a href="">About</a>
                <a href="">Features</a>
                <a href="">How it works</a>
                <a href="">Coming Soon</a>
            </div>
            <div className='flex justify-between p-2 gap-5'>
                <Button 
                variant='secondary-outlined'
                className='cursor-pointer'
                >
                    Sign In
                </Button>
                <Button 
                variant='secondary'
                className='cursor-pointer'
                >
                    Get Started
                </Button>
            </div>
        </nav>
    )
} 