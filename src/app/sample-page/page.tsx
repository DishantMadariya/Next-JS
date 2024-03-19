'use client'
import React, { useState, useEffect } from "react";

const SamplePage = () => {
    const [page, setPage] = useState<any>(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost/wordpress/wp-json/wp/v2/primary-menu')
                .then(response => response.json())
                .then(pagesData => setPage(pagesData[1]))
                .catch(error => console.error('Error fetching data:', error));
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

export default SamplePage;

