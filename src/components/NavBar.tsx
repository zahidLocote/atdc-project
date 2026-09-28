

export default function NavBar() {
    return (
        <div className="bg-black text-white w-full">
            <div className="w-[95%] mx-auto p-4 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold">
                        A T D C
                    </span>

                    <span className="text-md text-red-400">
                        Casa productora audiovisual
                    </span>
                </div>

                <ul className="flex space-x-4 text-xl font-bold">
                    <li>
                        <a href="#portafolio" className="hover:text-red-500">Portafolio</a>
                    </li>

                    <li>
                        <a href="#contacto" className="hover:text-red-500">Contacto</a>
                    </li>

                    <li>
                        <a href="#agendar-cita" className="hover:text-red-500">Agendar cita</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}