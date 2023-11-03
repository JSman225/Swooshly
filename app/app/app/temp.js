export default function Temp({ visible, onClose }) {
    return (
      <>
        {visible ? (
          <div className="fixed top-0 left-0 max-w-md w-full h-screen z-[100] backdrop-blur-lg bg-[#111111] bg-opacity-80 flex-col flex items-start justify-end pl-6 pb-6 transition-opacity transition-transform duration-250 ease-in-out">
            <div className="w-36 h-36 mx-auto my-auto transition-opacity transition-transform">
              <img className="w-full h-full rounded-2xl object-cover shadow-2xl" src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80" />
              <p className="text-white/80 text-semibold text-center mt-2"> @taggoeshere</p>
              <p className="text-white text-semibold text-center text-xl mt-1">Name Goeshere</p>
            </div>
            <button className="text-white opacity-90 text-xl flex font-semibold h-14 items-center gap-4 mb-2 transition-opacity transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
              </svg>
              Recommend less
            </button>
            <button className="text-white opacity-90 text-xl flex font-semibold h-14 items-center gap-4 mb-2 transition-opacity transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
              </svg>
              Share
            </button>
            <button className="text-white opacity-90 text-xl font-semibold h-14 text-center w-full transition-opacity transition-transform" onClick={onClose}>
              Close
            </button>
          </div>
        ) : null}
      </>
    );
  }
  