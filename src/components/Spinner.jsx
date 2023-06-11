import React from 'react'
import "../styles/spinner.css"

export default function Spinner() {
    return (
        <div className='mt-5 p-5 flex justify-center'>
            <div className="sk-chase ">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>

    )
}


