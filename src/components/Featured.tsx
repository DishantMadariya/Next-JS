'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { Button } from './ui/moving-border';
import { BackgroundGradient } from './ui/background-gradient';
// interface Course {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   price: number;
//   instructor: string;
//   isFeatured: boolean;
// }
interface Feature {
    id: number;
    title: { rendered: string };
    acf: {
        description: string;
        title: string;
        price: string;
        instructor: string;
        slug: string;
    };
}
const Featured = () => {
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                method: 'get',
                url: 'http://localhost/wordpress/wp-json/wp/v2/feature?acf_format=standard&_fields=id,title,acf',
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            try {
                const fatchData = await axios.request(config);
                console.log(fatchData.data);
                setApiData(fatchData.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (

        < div className='p-5 bg-gray-900' >
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured</h2>
                    <p className='mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Grow with the Best</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {apiData && (apiData as Feature[]).map((feature: Feature) => (
                        <div key={feature.id} className="flex justify-center">
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{feature.acf.title}</p>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{feature.acf.description}</p>
                                    <Link href={feature.acf.slug} className='mt-5 px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200' >
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}

                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href="/about">
                    <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        Know Us
                    </Button>
                </Link>
            </div>
        </div >
    )
}

export default Featured

{/* <div key={course.id} className="flex justify-center">
<BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
  <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
    <Link href={`/courses/${course.slug}`} className='mt-5 px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200' >
      Learn More
    </Link>
  </div>
</BackgroundGradient>
</div> */}