import { Graph } from "../graph";

export const SectionOne = () => {

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>

      <div className="row-span-1 lg:m-28">
        <h1 className="text-5xl font-bold text-blue-600 py-4">Sobre</h1>
        <p className="text-2xl font-extralight text-blue-400 mt-2">Olá, eu sou o Clodoaldo Neto,
          <span className="text-lg text-gray-700 mt-4 text-center "> um programador full stack focado na area web, com forte base em java e javascript,
            procuro resolver problemas utilizando as principais ferramentas e frameworks dessas linguagens no mercado, que são eles spring boot, react/next
            e react native/expo.
          </span>
        </p>
        <p className="text-lg font-extralight  text-gray-700 mt-2">Estou no mundo da programação há mais de 5 anos, gosto de desafios e problemas que
          envolvem matemática aplicada, álgebra linear , otimização etc. Aprendo rápido, sou dedicado.</p>

        <p className="text-2xl font-extralight text-blue-400 mt-2">Habilidades:
          <ul>
            <li className="text-sm text-gray-700">Criatividade.</li>
            <li className="text-sm text-gray-700">Organização.</li>
            <li className="text-sm text-gray-700">Vasto conhecimento em bibliotecas do mundo Js, incluindo yup, recharts, jsPdf, hookform e tals.</li>
            <li className="text-sm text-gray-700">Comunicação mediana.</li>
          </ul>
        </p>

        <div className="mt-6 flex flex-col items-center md:items-start justify-center ">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Saiba mais
          </button>
        </div>
      </div>

      <div className="row-span-1  flex flex-col items-center justify-center">
        <Graph />
      </div>

    </section>
  );
}