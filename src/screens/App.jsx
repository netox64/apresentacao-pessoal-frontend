import 'tailwindcss/tailwind.css';
import { Header, Footer, SectionOne, SectionTwo } from '../components';

function App() {

  return (

    <div className="w-full h-full flex flex-col bg-gray-100">

      <Header />

      <main className="min-h-screen grid grid-rows-2 gap-4 mx-5">

        <SectionOne />
        <SectionTwo />

      </main>

      <Footer />

    </div>
  );
}
export default App;
