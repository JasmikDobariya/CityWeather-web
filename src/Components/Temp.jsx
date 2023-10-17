import React, { useEffect, useState } from 'react'

function Temp() {

    const [City, setCity] = useState(null);
    const [search, setsearch] = useState('surat');

    useEffect(() => {
        const fetxhapi = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2ff70dd50969d5383675e113392e9178`)
            const respos = await res.json();
            setCity(respos.main)
            console.log(respos.main)
        }

        fetxhapi();
    }, [search]);


    return (

        <section className=' section_div'>
            <div className='text-center box position-absolute top-50 start-50 translate-middle '>
                <div className='my-5'>
                    <input className='p-2  rounded-2 form-control-md' placeholder='Search' type='search' onChange={(e) => {
                        setsearch(e.target.value)
                    }} />
                </div>

                {
                    (!City ? (<p>No Data Found</p>) : (
                        <div>
                            <h2 className='text-capitalize mb-4'>
                                {search}
                            </h2>
                            <h1 className='my-3'>
                                {City.temp}°C
                        
                            </h1>
                            <h3 className='form-control-sm mb-5 '>
                                Min Temp {City.temp_min}°C | Max Temp {City.temp_max}°C
                            </h3>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Temp