import React from 'react'

export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year
}

export function calcularIncrementoMarca(marca) {
  let incremento = 0

  switch (marca) {
    case '1':
      incremento = 0.30
      break
    case '2':
      incremento = 0.15
      break
    default:
      incremento = 0
      break
  }
  return incremento
}

export function calcularIncrementoPlan(plan) {
  let incremento = 0
  switch (plan) {
    case '2':
      incremento = 0.5
      break
    default :
      break
  }
  return incremento
}

export function formatearDinero (cantidad) {
  return cantidad.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
  })
}