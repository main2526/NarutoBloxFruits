import Paralax from "./(routes)/panels/Paralax"


export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center  m-20">
<div className="flex justify-center">
  <div className=" max-w-72 min-w-72">

         <h1 className="text-red-600 text-center">Note Important!</h1>
         <div>
             <span>Plis suscribete a mi canal de youtube para poder seguir creando paneles y ponerselos sin anuncios con links directos <p>Les agradeceria un  like & suscribirse</p></span>

         </div>
  </div>
</div>
        <Paralax/>
    </div>
  )
}
