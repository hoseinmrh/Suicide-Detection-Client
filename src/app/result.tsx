"use client"
import {TypeAnimation} from "react-type-animation";
import TextAnimation from "@/app/textAnimation";
import PieChart from "@/app/pieChart";

export interface IResult {
    result: string
    english_text: string
    suicidal_rate : number
    non_suicidal_rate : number
}

export const Result = ( {result,english_text,non_suicidal_rate,suicidal_rate}: IResult) => {

    return <>
        <div>
            <TextAnimation text={result.toUpperCase()}/>

            <PieChart suicidal_rate={suicidal_rate} non_suicidal_rate={non_suicidal_rate}/>
        </div>
    </>
}