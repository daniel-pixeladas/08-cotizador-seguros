import React, { createContext, useCallback, useMemo, useState } from 'react'
import { calcularIncrementoMarca, calcularIncrementoPlan, formatearDinero, obtenerDiferenciaYear } from '../helpers'


const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        // Una base
        let resultado = 400

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        // Hay que restar 3% por cada año
        const porcentaje = diferencia * (3/100)
        resultado -= resultado * porcentaje
        
        // Asiático +0%, Americano +15%, Europeo 30%, 
        resultado *= (1 + calcularIncrementoMarca(datos.marca))
        
        // Plan básico +0%
        // Plan Completo +50%
        resultado *= (1 + calcularIncrementoPlan(datos.plan))
        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)
    }

        
    return (
        
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorContext
}

export default CotizadorProvider