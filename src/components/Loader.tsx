// import React, { useEffect, useState } from "react";
// import Logo from "./Logo";
// import { AnimatePresence, motion } from "framer-motion";

// function Loader({ isLoading, setIsLoading }: any) {
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading();
//     }, 1900);
//   }, [setIsLoading]);
//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           className="loader"
//           exit={{ scale: 0 }}
//           key="motiondivleave"
//           transition={{
//             duration: 0.45,
//             ease: "easeInOut",
//           }}
//         >
//           <motion.svg
//             id="logo"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 100 100"
//           >
//             <title>Logo</title>
//             <g>
//               <g id="K" transform="translate(35.000000, 35.000000)">
//                 <motion.path
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     duration: 1,
//                     ease: "easeInOut",
//                     delay: 1,
//                   }}
//                   exit={{
//                     scale: 2,
//                   }}  
//                   fill="currentColor"     
//                   d = "M7 3a1 1 0 0 0-.323.023C5.237 3.141 4 4.432 4 6c0 1.57 1.24 2.864 2.783 2.979A1 1 0 0 0 7 9h2c.571 0 1 .429 1 1s-.429 1-1 1H5a1 1 0 1 0 0 2h4a1 1 0 0 0 .223-.023C10.763 12.859 12 11.569 12 10c0-1.57-1.24-2.864-2.783-2.979A1 1 0 0 0 9 7H7c-.571 0-1-.429-1-1s.429-1 1-1h4a1 1 0 1 0 0-2H7z"
//         //  stroke="black" stroke-width="5"
//                 />
//               </g>
//               <motion.path
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 1,
//                   ease: "easeInOut",
//                 }}
//                 exit={{
//                   scale: 2,
//                 }}
//                 stroke="currentColor"
//                 strokeWidth="5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M 50, 5
//           L 11, 27
//           L 11, 72
//           L 50, 95
//           L 89, 73
//           L 89, 28 z"
//               />
//             </g>
//           </motion.svg>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default Loader;
