import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import { useState } from 'react';



export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white w-full grid grid-cols-3 items-center px-[2%] pb-[0%] 
        max-md:grid-cols-2">

            <div className="flex items-center">
                
                <img src="../../public/logoSinFondo.png"alt="Logo" className="w-[20%] 
                max-md:w-[70%]"
                />

                <div className="flex flex-col ml-3">

                    <span className="text-2xl font-bold  max-md:text-xl ">A T D C</span>
                    <span className="text-xs text-red-400 italic ">CASA PRODUCTORA AUDIOVISUAL</span>

                </div>
            </div>

            <ul className="flex justify-center gap-10 text-md font-semibold 
            max-md:hidden">
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

            <button className="max-md:block hidden justify-self-end " onClick={() => setMenuOpen(!menuOpen)}>
                <DensityMediumRoundedIcon sx={{ fontSize: '270%' }} />
            </button>


            {menuOpen && (
        <ul className="md:hidden col-span-full w-full flex flex-col items-center gap-4 py-4">
          <li >
            <a href="#portafolio">PORTAFOLIO</a>
          </li>

          <li className="border-y-2 border-white w-[90%] py-[4%] text-center">
            <a href="#contacto">CONTACTO</a>
          </li>

          <li>
            <a href="#agendar-cita">AGENDAR CITA</a>
          </li>
        </ul>
      )}
        </nav>
    )
}