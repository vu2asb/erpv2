
// Loading UI with Spinner in Next.js | Next.js 14 Tutorial -25 | Dr Vipin Classes
// https://www.youtube.com/watch?v=pqkclnqAs-4


const wait = async (ms:number)=>{
  return new Promise(resolve=> setTimeout(resolve, ms));
  }
  
  const page = async() => {
    await wait(5000);
      return (
    <div>
      Spinner Simulation Page
    </div>
  )}


export default page



// "use client";
// import { GridLoader } from "react-spinners";

// const SpinnerUno = () => {
//   return (
//     <div className="">
//         <GridLoader color="#fd3905"/> 
//     </div>
//   );
// };

// export default SpinnerUno;