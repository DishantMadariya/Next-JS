'use client'
import Link from "next/link"
import { Button } from "./ui/moving-border"
import { HoverEffect } from "./ui/card-hover-effect";
const upcomingWebinars = [
    {
      title: "Mastering Data Analytics",
      description:
        "Explore the world of data analytics and learn how to derive valuable insights from data.",
      slug: "mastering-data-analytics",
      isFeatured: true,
    },
    {
      title: "Cybersecurity Essentials",
      description:
        "Learn the fundamental principles of cybersecurity and protect your digital assets.",
      slug: "cybersecurity-essentials",
      isFeatured: true,
    },
    {
      title: "Cloud Computing Fundamentals",
      description:
        "Discover the basics of cloud computing and its impact on modern IT infrastructure.",
      slug: "cloud-computing-fundamentals",
      isFeatured: true,
    },
    {
      title: "Machine Learning Applications",
      description:
        "Explore practical applications of machine learning and its role in various industries.",
      slug: "machine-learning-applications",
      isFeatured: true,
    },
    {
      title: "Blockchain Technology Explained",
      description:
        "Learn about blockchain technology and its potential to revolutionize the digital world.",
      slug: "blockchain-technology-explained",
      isFeatured: true,
    },
    {
      title: "Artificial Intelligence in Practice",
      description:
        "Discover real-world applications of artificial intelligence and its transformative impact.",
      slug: "artificial-intelligence-in-practice",
      isFeatured: true,
    },
  ];
function UpcomingWebinars() {
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Empower Your Journey with Cutting-Edge Technology</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={upcomingWebinars.map(w =>(
                        {
                            title : w.title,
                            description : w.description,
                            link :"/"+ w.slug
                        }
                    ))} />
                </div>
                <div className="mt-10 text-center">
                    <Link href={'/service'}>
                        <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore Service
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars
