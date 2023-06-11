import React from 'react'
import useCotizador from '../hooks/useCotizador'

const Error = () => {
    const { error } = useCotizador()
    return (
        <div className='border text-center border-red-200 bg-red-50 text-red-800 py-3 rounded'>
            <p>{error}</p>
        </div>
    )
}

export default Error