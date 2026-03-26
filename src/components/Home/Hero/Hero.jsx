import React from 'react'

const Hero = () => {
    return (
        <section className="w-full mt-12">
            <div className="aspect-[1440/660] w-full">
                <img
                    src="/banner/banner.jpg"
                    alt="Banner principal"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

export default Hero