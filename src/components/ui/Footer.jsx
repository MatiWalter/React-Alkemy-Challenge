import React from 'react'

export const Footer = () => {
  return (
    <div
      className="w-100 bg-dark fixed-bottom d-flex justify-content-center align-items-center"
      style={{ height: '7%', color: '#fff' }}
    >
      Diseñado por <a rel="sponsored" className="text-decoration-none text-primary ms-1" href="https://github.com/MatiWalter" target="_blank"><strong>Matías Walter</strong></a>
    </div>
  )
}
