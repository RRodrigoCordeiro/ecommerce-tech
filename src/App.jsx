import React from 'react'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default App



// import React, { useState } from "react";

// function ToggleInfo() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleInfo = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
//       <button
//         onClick={toggleInfo}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           width: "100%",
//           padding: "10px",
//           fontSize: "16px",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//           cursor: "pointer",
//           background: "#f9f9f9",
//         }}
//       >
//         Como verificar o status e rastrear meu pedido?
//         <span style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.3s" }}>
//           ➤
//         </span>
//       </button>
//       {isOpen && (
//         <div
//           style={{
//             marginTop: "10px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "4px",
//             background: "#fefefe",
//           }}
//         >
//           <p>
//             Você pode verificar o status e rastrear seu pedido de forma rápida e fácil:
//           </p>
//           <ol>
//             <li>Acesse a área "Minha Conta".</li>
//             <li>Clique em "Meus Pedidos".</li>
//             <li>Selecione o pedido desejado.</li>
//             <li>Confira o status e o código de rastreamento.</li>
//             <li>
//               Use o código de rastreamento no site da transportadora para acompanhar a entrega.
//             </li>
//           </ol>
//           <p>
//             Se precisar de ajuda, entre em contato pelo chat ou e-mail: <b>suporte@loja.com</b>.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ToggleInfo;
