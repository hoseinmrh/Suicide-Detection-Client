"use client"

import {TypeAnimation} from 'react-type-animation';
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {IResult, Result} from "@/app/result";
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic';
import Link from "next/link";

export default function Home() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const ref = useRef<HTMLTextAreaElement>(null);
    const [result, setResult] = useState<IResult | null>(null)
    const [scrollToResult, setScrollToResult] = useState(false);

    const DynamicTypeAnimation = dynamic(
        () => import('react-type-animation').then(module => module.TypeAnimation),
        { ssr: false }
    );

    useEffect(() => {
        // Ensure re-rendering on the client-side to match client-side styles
        if (isMobile && typeof window !== 'undefined') {
            // Delay the re-render to ensure hydration is complete
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 0);
        }
    }, [isMobile]);

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (ref.current) {
            ref.current.style.height = `${e.target.scrollHeight}px`;
        }
    };
    const handleSubmit = () => {
        const text = ref.current?.value;
        if (text?.trim() === '') {
            alert('Please enter some text before submitting.');
            return;
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API}/suicide-detection`;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: text}),
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json()
                setResult(() => data)
                setScrollToResult(true);
                if (ref.current) {
                    ref.current.value = '';
                }

            })
            .catch(error => {
                console.error('There was an error sending the data:', error);
                // Handle error if needed
            });
    };

    useEffect(() => {
        if (scrollToResult) {
            // Scroll to the result section when scrollToResult is true
            const resultSection = document.getElementById('result_section');
            if (resultSection) {
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Reset scrollToResult after scrolling
            setScrollToResult(false);
        }
    }, [scrollToResult]);


    return (
        <div className="container max-w-3xl m-auto">
            <main className="flex flex-col items-center justify-between p-10">
                <h1 className={`mb-20 mt-10 text-center ${isMobile ? "text-2xl" : "text-4xl"}`}>Suicide Detection from Text</h1>
                <div className="w-full h-20 mb-20 relative">
                    <DynamicTypeAnimation
                        sequence={[
                            'Enter your text in any language you want and then let\'s determine how suicidal it is!'
                        ]}
                        wrapper="span"
                        speed={60}
                        style={{display: 'inline-block'}}
                        repeat={1}
                        className={`${isMobile? "mb-0" : "mb-28"} text-center ${isMobile ? "text-lg" : "text-3xl"}`}
                        cursor={false}
                    />
                </div>
                <textarea
                    className={`w-full py-1 pt-2 pl-2 ${isMobile ? "mt-0" : "my-14"} 
                    rounded-lg bg-transparent text-2xl ${isMobile ? "my-5" : "my-14"}
                     placeholder:opacity-40`}
                    ref={ref}
                    rows={4}
                    placeholder="Enter text here..."
                    onInput={handleInput}
                />

                <button onClick={handleSubmit}
                        className="w-full text-2xl hover:bg-gray-300 bg-white text-black rounded-full p-5">Submit
                </button>
                <section id="result_section" className="w-full mt-2">
                    {result && <Result {...result} />}
                </section>

            </main>
            <footer className={`text-center ${isMobile ? "text-sm" : "text-xl"} mt-4 mb-4`}>Made with ❤️ by <a className="text-cyan-400" target="_blank" href="https://github.com/hoseinmrh">Hosein</a> , <a className="text-cyan-400" target="_blank" href="https://github.com/pooriazln">Martin </a>
                & <a className="text-cyan-400" target="_blank" href="https://github.com/pooriyamb">Pooriya</a> ||
                <Link href="about" className="ml-2 text-cyan-800">
                    Go to About Page
                </Link></footer>
        </div>
    )
}