'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function MusicSchoolContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;
        const formdata = new FormData(formElement);
        const reqoptions = {
            method: 'POST',
            body: formdata
        }
        const req = await fetch('http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/18/feedback', reqoptions);
        if (req.ok) {
            const response = await req.json();
            console.log('response', response);
        } else {
            console.error('Failed to submit form');
        }

    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            {' '}
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            {/* Content with higher z-index */}
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                {' '}
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    We&apos;re here to help with any questions about our courses,
                    programs, or events. Reach out and let us know how we can assist you
                    in your musical journey.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="name"
                        value={name}
                        name="your-name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        name="your-email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Your subject"
                        name="your-subject"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <input
                        type="hidden"
                        value="wpcf7-f18-p21-o1"
                        name="_wpcf7_unit_tag"
                    />
                    <textarea
                        value={message}
                        name='your-message'
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MusicSchoolContactUs;
