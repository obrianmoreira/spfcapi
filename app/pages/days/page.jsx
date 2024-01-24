'use client'
import axios from "axios"
import { useEffect, useState } from "react"

const Days = () => {

    const [yearData, setYearData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/')
        }
        fetchData();
    }, [])

    return (

        <>
            
            <h1>{JSON.stringify(yearData)}</h1>

        </>

    )

}

export default Days; 