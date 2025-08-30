import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Mi App</div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex gap-x-6">
          <a href="#" className="text-white hover:underline">Inicio</a>
          <a href="#" className="text-white hover:underline">Servicios</a>
          <a href="#" className="text-white hover:underline">Contacto</a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-y-2">
          <a href="#" className="text-white hover:text-gray-200">Inicio</a>
          <a href="#" className="text-white hover:text-gray-200">Servicios</a>
          <a href="#" className="text-white hover:text-gray-200">Contacto</a>
        </div>
      )}
    </nav>
  );
}
