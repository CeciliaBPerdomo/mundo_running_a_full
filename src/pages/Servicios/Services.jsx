import React from 'react'
import Servicios from "../../components/Home/Servicios/Servicios"
import ServiciosBicicleta from "../../components/Home/Servicios/ServiciosBicicleta"
import FotografiaEventos from "../../components/Home/Servicios/FotografiaEventos"

const Services = () => {
    return (
        <div className='py-20 bg-[var(--color-background-secondary)]'>
            <Servicios />

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                    <div>
                        <ServiciosBicicleta />
                    </div>

                    <div>
                       <FotografiaEventos />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services