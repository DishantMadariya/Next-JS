
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expertise in Client-Side Development",
    description:
      "We specialize in client-side development, crafting dynamic and interactive web applications that enhance user engagement and satisfaction. Our team leverages the latest technologies and frameworks to create seamless and modern user experiences.",
  },
  {
    title: "Innovative Product-Side Solutions",
    description:
      "Our product-side development focuses on innovation and creativity, delivering cutting-edge solutions that meet the unique needs of your business and users. From concept to launch, we ensure your product stands out in the market.",
  },
  {
    title: "Efficient Version Control",
    description:
      "Our version control system ensures that your projects are always up-to-date and well-managed. You can track changes, collaborate with team members, and maintain a clear overview of your project's progress, leading to improved efficiency and productivity.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "We facilitate real-time collaboration among team members, clients, and stakeholders, regardless of their location. Our platform enables seamless communication, file sharing, and decision-making, enhancing teamwork and project outcomes.",
  },
  {
    title: "Scalable and Secure Solutions",
    description:
      "Our solutions are designed to be scalable and secure, ensuring they can grow with your business and protect your valuable data. We prioritize security in every aspect of our development process, providing you with peace of mind.",
  },
  {
    title: "Continuous Improvement and Support",
    description:
      "We believe in continuous improvement and provide ongoing support to ensure your projects are always up-to-date and optimized. Our team is dedicated to your success and is always available to address any issues or enhancements.",
  },
];

function WhyChooseUs() {
  return (
    <div >
        <StickyScroll content={content} />
    </div>
  )
}
export default WhyChooseUs