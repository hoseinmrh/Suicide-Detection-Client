"use client"
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";


export default function About(){
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return <>
        <div className="bg-black text-white h-screen">
            <div className="container max-w-3xl m-auto">
                <main className="flex flex-col items-center justify-between p-10">

                    <h1 className={`mb-10 mt-10 text-center ${isMobile ? "text-2xl" : "text-4xl"}`}>About Project</h1>
                    <p className={`mb-6 mt-10 text-center ${isMobile ? "text-sm" : "text-xl"} text-justify`}>
                        In this project users can enter their texts in any languages such as
                        <span className="text-gray-400"> Persian, English, Italian and even Korean </span> and then our machine learning model
                        returns if this text is suicidal or non-suicidal with relevant ratings.</p>
                    <div className="container text-left">
                        <p className={`mb-2 mt-2 ${isMobile ? "text-sm" : "text-xl"}`}>
                            <span className="text-gray-400"> Back-end: </span>Fast API
                        </p>
                        <p className={`mb-2 mt-2 ${isMobile ? "text-sm" : "text-xl"}`}>
                            <span className="text-gray-400"> Front-end: </span>Next JS
                        </p>
                        <p className={`mb-4 mt-2 ${isMobile ? "text-sm" : "text-xl"}`}>
                            <span className="text-gray-400"> ML Algorithm: </span>Naive Bayes
                        </p>
                        <hr/>
                        <p className={`mb-2 mt-4 ${isMobile ? "text-sm" : "text-xl"}`}>Please note that the machine learning model is not at its best situation right now
                            and we are trying to improve it using <span className="text-gray-400">Deep Learning Methods</span>.</p>

                    </div>

                </main>
                <footer className={`text-center ${isMobile ? "text-sm" : "text-xl"} mt-4 mb-4`}>Made with ❤️ by <a className="text-cyan-400" target="_blank" href="https://github.com/hoseinmrh">Hosein</a> , <a className="text-cyan-400" target="_blank" href="https://github.com/pooriazln">Martin </a>
                    & <a className="text-cyan-400" target="_blank" href="https://github.com/pooriyamb">Pooriya</a> ||
                    <Link href="/" className="ml-2 text-cyan-800">
                        Back to Home Page
                    </Link></footer>
            </div>
        </div>

    </>
}