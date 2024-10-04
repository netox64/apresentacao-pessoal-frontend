import { Project } from "../project";

export const SectionTwo = () => {
  return (
    <section id="projetos" className="row-span-1 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-600"> Meus Projetos: </h2>
      <p className="mt-4 text-center text-gray-700 py-3">Aqui estão alguns dos projetos que eu desenvolvi durante minha jornada</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Project /> <Project /> <Project /> <Project />
        <Project /> <Project /> <Project /> <Project />
        <Project /> <Project /> <Project /> <Project />
      </ul>
    </section>
  );
}