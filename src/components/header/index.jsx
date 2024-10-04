import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => { setIsOpen(!isOpen); };

  return (
    <header className="bg-blue-600 text-white p-5 sticky top-0">
      <button onClick={toggleMenu} className="md:hidden">{isOpen ? 'Fechar' : 'Menu'}</button>
      <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className={`w-full md:flex ${isOpen ? 'flex-col' : 'flex-row'}`}>
          <div className="w-full md:flex flex-row items-center justify-between">

            <div className="p-2">
              <li>
                <a className="font-bold" href="/">Neto</a>
              </li>
            </div>

            <div className="md:flex flex-row items-center justify-around gap-5">
              <li id="about">
                <a href="#about">Sobre</a>
              </li>
              <li id="projetos">
                <a href="#projetos">Projetos</a>
              </li>
              <li id="contact">
                <a href="#contact">Contato</a>
              </li>
            </div>

          </div>
        </ul>
      </nav>
    </header>
  );
}