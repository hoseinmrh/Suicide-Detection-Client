"use client"
import {TypeAnimation} from "react-type-animation";
import TextAnimation from "@/app/textAnimation";
import PieChart from "@/app/pieChart";

export interface IResult {
    result: string
    english_text: string
    suicidal_rate : number
    non_suicidal_rate : number
    lang: string
    original_text: string | undefined
}

export const Result = ( {result,english_text,non_suicidal_rate,suicidal_rate, original_text, lang}: IResult) => {
    return <>
        <div>
            <TextAnimation text={result.toUpperCase()}/>
            <p className="text-xl mt-10 mb-6 text-center"><span className="text-gray-400">Your Input: </span>
                {original_text} , <span className="text-gray-400">Language: </span>{lang} </p>
            <PieChart suicidal_rate={suicidal_rate} non_suicidal_rate={non_suicidal_rate}/>


        </div>
    </>
}