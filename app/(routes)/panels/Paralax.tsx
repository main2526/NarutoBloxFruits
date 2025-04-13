"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Paralax() {
  const [state, setState] = useState(false);

  // Leer el estado desde localStorage al cargar el componente
  useEffect(() => {
    const isSubscribed = localStorage.getItem("isSubscribed") === "true";
    setState(isSubscribed);
  }, []);

  const handleSubscribe = () => {
    // Guardar en localStorage y actualizar el estado
    localStorage.setItem("isSubscribed", "true");
    setState(true);
    
    // // delete localStorage
    // localStorage.removeItem('isSubscribed')
  };

  return (
    <div className="flex justify-center my-5 items-center">
      <div className="bg-zinc-700 w-96 h-72 p-2 rounded-sm">
        <h2 className="text-center m-2 p-2 bg-sky-200 text-green-400">
          ¡Requisitos!
        </h2>
        <div className="flex flex-col justify-center my-20">
          <div className="flex justify-center bg-red-600 py-2 pb-2">
            <Link href={"https://www.youtube.com/@BootsDev-X"} onClick={handleSubscribe}>
              Suscríbete a mi canal de YouTube
            </Link>
          </div>
          <div className="flex justify-center my-5">
            <button
              disabled={!state}
              className={` ${
                state
                  ? "bg-green-500 hover:bg-green-600 w-full p-2"
                  : "disabled:cursor-not-allowed disabled:bg-slate-400 w-full p-2"
              }`}
              onClick={() => {
                window.location.href =
                  "https://www.mediafire.com/file/ifoghefh0ytur21";
              }}
            >
              Get link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
