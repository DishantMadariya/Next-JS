"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
// import coursedata from '@/data/music_courses.json';
// interface Course {
//     id: number;
//     title: string;
//     slug: string;
//     description: string;
//     price: number;
//     instructor: string;
//     isFeatured: boolean;
// }
const page = async () => {
    const req = await fetch('http://localhost/wordpress/wp-json/wp/v2/pages?_fields=id,slug,title,content&slug=sample-page');
    const pages = await req.json();
    const page = pages[0];
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">{page.title.rendered}</h1>
            <div className="flex flex-wrap justify-center">
                    <CardContainer className="inter-var m-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                {page.slug}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={`/${page.slug}`}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
            </div>
        </div>
    )
}

export default page