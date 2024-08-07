"use client";
import React, { useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import PhoneIcon from "../../../public/phone-icon.svg";
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

            <div className="z-9">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h5 className="text-2xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-textColor mb-4 max-w-md">
                    { " " }
                    I am always welcome to new ideas. If you have ideas, let me know by
                    sending an email!
                </p>
                <div className="contact-icon socials flex flex-row gap-5">
                    <Link href="https://github.com/LocalBinNotFound">
                        <Image className="w-10 h-10" src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/junjie-fang/">
                        <Image className="w-10 h-10" src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                    <Link href="https://www.instagram.com/leeeeeo_fang/">
                        <Image className="w-10 h-10" src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                    <Link href="mailto:fang.junj@northeastern.edu">
                        <Image className="w-10 h-10" src={EmailIcon} alt="Email Icon" />
                    </Link>
                    <Link href="tel:+1 858-999-4462">
                        <Image className="w-10 h-10" src={PhoneIcon} alt="Phone Icon" />
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
                        className="bg-inputFieldColor border border-borderColor placeholder-placeHolderColor text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
                            className="bg-inputFieldColor border border-borderColor placeholder-placeHolderColor text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="email subject"
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
                            className="bg-inputFieldColor border border-borderColor placeholder-placeHolderColor text-gray-100 text-sm rounded-lg block w-full p-2.5"
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