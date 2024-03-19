'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
    {
        "quote": "Master of Your Business has transformed the way I manage my business. It's intuitive, efficient, and highly recommended!",
        "name": "John Doe",
        "title": "CEO, Company ABC"
    },
    {
        "quote": "Using Master of Your Business has been a game-changer for us. It's intuitive, efficient, and has saved us a ton of time.",
        "name": "Jane Smith",
        "title": "Founder, Startup XYZ"
    },
    {
        "quote": "I can't imagine running my business without Master of Your Business. It's the perfect tool for any entrepreneur looking to succeed.",
        "name": "Alice Johnson",
        "title": "Entrepreneur"
    },
    {
        "quote": "The support team at Master of Your Business is top-notch. They are always there to help and go above and beyond.",
        "name": "David Brown",
        "title": "Small Business Owner"
    },
    {
        "quote": "Master of Your Business has helped me streamline my operations and focus on growth. It's been a game-changer for my business.",
        "name": "Sarah Wilson",
        "title": "Founder & CEO"
    },
    {
        "quote": "I love how Master of Your Business simplifies complex tasks. It's user-friendly and has everything I need to succeed in my business.",
        "name": "Michael Lee",
        "title": "Entrepreneur"
    },
    {
        "quote": "Master of Your Business has exceeded my expectations. It's reliable, efficient, and has helped me stay organized in my business.",
        "name": "Emily Davis",
        "title": "Business Owner"
    },
    {
        "quote": "I recommend Master of Your Business to anyone looking to take their business to the next level. It's a game-changer!",
        "name": "Alexandra Jones",
        "title": "Startup Founder"
    },
    {
        "quote": "Using Master of Your Business has been a transformative experience for my business. It's intuitive, powerful, and essential for any entrepreneur.",
        "name": "Chris Roberts",
        "title": "CEO, Tech Company"
    },
    {
        "quote": "Master of Your Business has made my life so much easier. It's like having a personal assistant for my business!",
        "name": "Mark Thompson",
        "title": "Small Business Owner"
    }
];
const Testimonial = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear It From Our Clients</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
