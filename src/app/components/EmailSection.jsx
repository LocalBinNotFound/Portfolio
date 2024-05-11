"use client";
import React, { useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import emailjs from '@emailjs/browser';

import dotenv from "dotenv";
dotenv.config();

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY,
            })
            .then((result) => {
            console.log('Email successfully sent!', result.text);
            setEmailSubmitted(true);
        });
    };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">

            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    { " " }
                    I am currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/LocalBinNotFound">
                        <Image className="w-10 h-10" src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/junjie-fang/">
                        <Image className="w-10 h-10" src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                    <Link href="https://github.com/LocalBinNotFound">
                        <Image className="w-10 h-10" src={GithubIcon} alt="Github Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                    <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="from_email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="example@google.com"
                    />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                        Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Say hi to me!"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>);
};

export default EmailSection;