import Paralax from "./(routes)/panels/Paralax";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center  m-20">
      <div className="flex justify-center">
        <div className=" max-w-72 min-w-72">
          <h1 className="text-red-600 text-center">Nota Importante!</h1>
          <div>
            <span>
              Plis suscribete a mi canal de youtube para poder seguir y  sin anuncios con links directos{" "}
              <p>Les agradeceria un like & suscribirse </p>
            </span>
          </div>
        </div>
      </div>
      <Paralax />
      <p className="text-center"> 
        Creditos a <strong className="text-red-500">Opti</strong>
      </p>
    </div>
  );
}
