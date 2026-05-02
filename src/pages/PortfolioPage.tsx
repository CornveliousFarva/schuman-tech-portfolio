import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  return <Portfolio />;
}

// The below code is for future expansion of the Portfolio page, but for now the Portfolio component is being rendered directly for simplicity and focus on the projects themselves.

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function PortfolioPage() {
//   return (
//     <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
//       <Navbar />

//       <main className="px-6 py-24">
//         <div className="mx-auto max-w-6xl">
//           <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
//             Portfolio
//           </p>

//           <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
//             Selected technical projects.
//           </h1>

//           <p className="max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
//             A collection of projects focused on support, documentation, web
//             development, and practical problem-solving.
//           </p>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }