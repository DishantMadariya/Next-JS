import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import '@/app/whychoose.css'
const Herosection = () => {
    return (
        <div className=" h-screenfull md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="md:mt-20 mt-40 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master of Your Buisness</h1>
                <p className="mt-7 font-normal text-base md:text-lg-text-neutral-300 max-w-lg mx-auto"
                >Unlocking your potential, one dream at a time. At Master of Your Business, we understand the passion that drives entrepreneurs. It's not just about profits; it's about turning your vision into reality. our platform is designed to help you succeed.</p>
                <div className="mt-7">
                    <Link href={'/portfolio'}>
                        <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore Work
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Herosection;
