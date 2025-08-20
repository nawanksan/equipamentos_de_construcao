import { LogIn } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { Search } from "lucide-react";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-gray-700 to-white">
      <div className="flex w-full gap-3 bg-gray-800 px-20">
        <img src="src\assets\react.svg" alt="logo" className="size-20" />
        <input
          type="text"
          placeholder="O que está procurando?"
          className=" flex-1 my-auto h-10 border rounded"
        />
        <button className="flex items-center gap-2 my-auto mx-4 hover:border border-white text-white rounded-r">
          <LogIn size={20} /> {/* Ícone de login */}
          Login
        </button>
      </div>
      <div className="flex gap-5 justify-center bg-gray-700 text-white">
        <a href="">Inicio</a>
        <a href="">Produtos</a>
        <a href="">Contato e Suporte</a>
        <a href="">📞WhatsApp</a>
        <a href="">🚩Localização</a>
      </div>
      
      <div className="flex justify-center gap-20 my-4">
        <div className=" p-4 bg-white border border-white rounded-md shadow-md shadow-gray-500">
          <img
            src="src\assets\concreto-usinado.jpg"
            alt="logo"
            className="rounded-md size-36"
          />
          Construção
        </div>

        <div className="p-4 bg-white border border-white rounded-md shadow-md shadow-gray-500">
          <img
            src="src\assets\Servico-de-Jardinagem-1.jpg"
            alt="logo"
            className="size-36 rounded-md"
          />
          Jardinagem
        </div>
      </div>
      <h2 className="px-20 my-5">Destaques em aluguel de equipamentos e ferramentas</h2>
      <div className="flex gap-4 px-20 my-10">
        <div className=" p-4 bg-white border border-white rounded-md shadow-md shadow-gray-500">
          <img
            src="src\assets\betonera.jpg"
            alt="logo"
            className="size-36 rounded-md"
          />
          <h2>Aluguel de</h2>
          <h2>Betoneira 400 Litros</h2>
        </div>
        <div className="p-4 bg-white border border-white rounded-md shadow-md shadow-gray-500">
          <img
            src="src\assets\pa.png"
            alt="logo"
            className="size-36 rounded-md"
          />
          <h2>Aluguel de</h2>
          <h2>Pá</h2>
        </div>
        <div className=" p-4 bg-white border border-white rounded-md shadow-md shadow-gray-500">
          <img
            src="src\assets\carro_de_mao.jpg"
            alt="logo"
            className="size-36 rounded-md"
          />
          <h2>Aluguel de</h2>
          <h2>Carro de mão 200 Litros</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
