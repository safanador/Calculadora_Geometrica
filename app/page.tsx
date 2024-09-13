/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react";
// triangule functions
function areaTriangulo(base: number, altura: number) {
  return (base * altura) / 2;;
}
function perimetroTriangulo(base: number, ladoA: number, ladoB: number) {
  return base + ladoA + ladoB;;
}
// rectangle functions
function areaRectangulo(base: number, altura: number) {
  return base * altura;;
}
function perimetroRectangulo(base: number, altura: number) {
  return 2 * (base + altura);;
}
// squad functions
function areaCuadrado(lado: number) {
  return lado * lado;;
}
function perimetroCuadrado(lado: number) {
  return 4 * lado;;
}
// circle functions
function areaCirculo(radio: number) {
  return Math.PI * Math.pow(radio, 2);;
}
function perimetroCirculo(radio: number) {
  return 2 * Math.PI * Math.pow(radio, 2);
}

export default function Home() {
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const [inputs, setInputs] = useState<any>({});
  const [result, setResult] = useState<number | null>(null);

  const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const calculateResult = ()=>{
    let res = 0;

    if(selectedShape === "rectangulo"){
      if(selectedFunction === "area"){
        res = areaRectangulo(inputs.base, inputs.altura);
      }else if(selectedFunction === "perimetro"){
        res = perimetroRectangulo(inputs.base, inputs.altura);
      }
    } else if(selectedShape === "cuadrado"){
      if(selectedFunction ==="area"){
        res = areaCuadrado(inputs.lado);
      }else if(selectedFunction ==="perimetro"){
        res = perimetroCuadrado(inputs.lado)
      }
    }else if (selectedShape === "triangulo") {
      if (selectedFunction === "area") {
        res = areaTriangulo(inputs.base, inputs.altura);
      } else if (selectedFunction === "perimetro") {
        res = perimetroTriangulo(inputs.base, inputs.ladoA, inputs.ladoB);
      }
    } else if (selectedShape === "circulo") {
      if (selectedFunction === "area") {
        res = areaCirculo(inputs.radio);
      } else if (selectedFunction === "perimetro") {
        res = perimetroCirculo(inputs.radio);
      }
    }

    setResult(res);

  };


  return (
    <div className="grid grid-rows-[20px_1fr_20px]  place-items-center justify-items-center min-h-screen p-2 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-4xl">Calculadora Geometrica</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            Escoja una figura geometrica.
          </li>
          <li>Escoja una operación a realizar para la figura.</li>
          <li>Ingresar los datos de la figura geométrica.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
            selectedShape === "cuadrado"
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : " "
            }`}
            onClick={()=>setSelectedShape("cuadrado")}
          >
            Cuadrado
          </a>
          <a
            className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
              selectedShape === "rectangulo"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : " "
              }`}
              onClick={()=>setSelectedShape("rectangulo")}
          >
            Rectangulo
          </a>
          <a
            className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
              selectedShape === "circulo"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : " "
              }`}
              onClick={()=>setSelectedShape("circulo")}
          >
            Circulo
          </a>
          <a
            className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
              selectedShape === "triangulo"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : " "
              }`}
              onClick={()=>setSelectedShape("triangulo")}
          >
            Triangulo
          </a>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
            selectedFunction === "area"
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : " "
            }`}
            onClick={()=>setSelectedFunction("area")}
          >
            Area
          </a>
          <a
            className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
              selectedFunction === "perimetro"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : " "
              }`}
              onClick={()=>setSelectedFunction("perimetro")}
          >
            Perimetro
          </a>
        </div>
        <p>Ingrese los datos solicitados</p>
        {selectedShape === "circulo" && selectedFunction === "area" && (
          <input 
            type="number"
            name="radio"
            placeholder="Ingrese el Radio"
            onChange={handleinputChange}
            className="border border-black rounded-lg p-2"
          />
        )}
        {selectedShape === "circulo" && selectedFunction === "perimetro" && (
          <input 
            type="number"
            name="radio"
            placeholder="Ingrese el Radio"
            onChange={handleinputChange}
            className="border border-black rounded-lg p-2"
          />
        )}
        {selectedShape === "cuadrado" && selectedFunction ==="area" &&(
          <input
            type="number"
            name="lado"
            placeholder="Lado"
            onChange={handleinputChange}
            className="border border-black rounded-lg p-2"
          />
        )}
        {selectedShape === "cuadrado" && selectedFunction ==="perimetro" &&(
          <input
            type="number"
            name="lado"
            placeholder="Lado"
            onChange={handleinputChange}
            className="border border-black rounded-lg p-2"
          />
        )}
        {selectedShape === "rectangulo" && selectedFunction === "area"&&(
          <>
            <input
              type="number"
              name="base"
              placeholder="Base"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="altura"
              placeholder="Altura"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
          </>
        )}
        {selectedShape === "rectangulo" && selectedFunction === "perimetro"&&(
          <>
            <input
              type="number"
              name="base"
              placeholder="Base"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="altura"
              placeholder="Altura"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
          </>
        )}
        {selectedShape === "triangulo" && selectedFunction==="area"&&(
          <>
            <input
              type="number"
              name="base"
              placeholder="Base"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="altura"
              placeholder="Altura"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="ladoA"
              placeholder="Lado A"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="ladoB"
              placeholder="Lado B"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
          </>
        )}
        {selectedShape === "triangulo" && selectedFunction==="perimetro"&&(
          <>
            <input
              type="number"
              name="base"
              placeholder="Base"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="altura"
              placeholder="Altura"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="ladoA"
              placeholder="Lado A"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
            <input
              type="number"
              name="ladoB"
              placeholder="Lado B"
              onChange={handleinputChange}
              className="border border-black rounded-lg p-2"
            />
          </>
        )}
        <div className="flex flex-grow gap-3">
          <button className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" 
          onClick={calculateResult}
          >
            Calcular
          </button>
          <button className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-500 text-background gap-2 hover:bg-gray-600 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" 
          onClick={()=>{
            setSelectedFunction(null);
            setSelectedShape(null);
            setInputs({});
            setResult(null);
          }}
          >
            Reset
          </button>
        </div>

        {/* mostrar resultado */}
        {result !== null && (<div>Resultado: {result}</div>)}
      </main>
    </div>
  );
}
