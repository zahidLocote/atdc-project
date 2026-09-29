

export default function NavBar() {
    return (
        <div className="bg-black text-white w-full grid grid-cols-3 items-center px-[2%] pb-[0%]">

            <div className="flex items-center">
                
                <img src="../../public/logoSinFondo.png"alt="Logo" className="w-[20%] "/>

                <div className="flex flex-col ml-3">
                    <span className="text-2xl font-bold">A T D C</span>
                    <span className="text-xs text-red-400 italic">CASA PRODUCTORA AUDIOVISUAL</span>
                </div>

            </div>

            <ul className="flex justify-center gap-10 text-md font-semibold">
                <li>
                    <a href="#portafolio" className="hover:text-red-500 hover:underline">PORTAFOLIO</a>
                </li>
                <li>
                    <a href="#contacto" className="hover:text-red-500 hover:underline">CONTACTO</a>
                </li>
                <li>
                    <a href="#agendar-cita" className="hover:text-red-500 hover:underline">AGENDAR CITA</a>
                </li>
            </ul>
        </div>
    )
}