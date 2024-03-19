'use client'
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Footer = () => {
    // const [apiData, setApiData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = JSON.stringify({
    //             "user_id": 65,
    //             "per_page": 10,
    //             "page": 1,
    //             "type": "all",
    //             "group_id": null
    //         });

    //         const config = {
    //             method: 'get',
    //             maxBodyLength: Infinity,
    //             url: 'http://192.168.1.29/socialiv/wp-json/socialv-api/api/v1/socialv/get-post',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xLjI5L3NvY2lhbGl2IiwiaWF0IjoxNzEwMzk4MTk1LCJuYmYiOjE3MTAzOTgxOTUsImV4cCI6MTcxMTAwMjk5NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.q3FITwpxuXrr5BmB9TB4E0RMTNCe9HXZE4ik6S0Gh0Y',
    //                 'Cookie': 'lp_session_guest=g-65f29adeb6fae'
    //             },
    //             data: data
    //         };

    //         try {
    //             const fatchData = await axios.request(config);
    //             console.log(fatchData.data);
    //             setApiData(fatchData.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
              <p className="mb-4">
                Music School is a premier institution dedicated to teaching the art
                and science of music. We nurture talent from the ground up,
                fostering a vibrant community of musicians.
              </p>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
              <p>New Delhi, India</p>
              <p>Delhi 10001</p>
              <p>Email: info@musicschool.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
        </footer>
      )
};

export default Footer;
