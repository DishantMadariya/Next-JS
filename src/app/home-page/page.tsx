'use client'
import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [page, setPage] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const menus = await fetch('http://localhost/wordpress/wp-json/wp/v2/primary-menu');
                const pagesData = await menus.json();
                setPage(pagesData[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            {page && (
                <div dangerouslySetInnerHTML={{ __html: page.content }}>
                </div>
            )}
        </div>
    );
};

export default HomePage;
