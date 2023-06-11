import React from 'react'
import AppSeguro from './components/AppSeguro'
import CotizadorProvider from './context/CotizadorProvider'

export default function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>

  )
}
