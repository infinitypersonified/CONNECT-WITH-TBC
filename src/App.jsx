import React from "react";

export default function ConnectWithUs() {
  return (
    <div className="flex justify-center items-center min-h-screen font-['Wix_Madefor_Display'] font-bold">
      <div className="text-center">
        <h2 className="mb-10 text-2xl">CONNECT WITH US</h2>

        <div className="flex flex-col items-center gap-3">
          {/* Online Radio */}
          <a
            href="https://zeno.fm/radio/first3cchurch_the-bridge-church/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[rgb(189,103,22)] hover:bg-[rgb(162,89,21)] px-10 py-3 rounded-md text-white text-lg transition ease-in duration-200 w-[293px]"
          >
            <img src="radio.png" alt="Radio" className="w-10 h-10" />
            <span>Online Radio</span>
          </a>

          {/* WhatsApp Community */}
          <a
            href="https://chat.whatsapp.com/BtuihhUNilI4nTvF3Fe48f?mode=ems_copy_c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-[rgb(6,93,6)] px-5 py-3 rounded-md text-white text-lg transition ease-in duration-300"
          >
            <img
              src="whatsapp-logo.png"
              alt="WhatsApp"
              className="w-10 h-10" 
            />
            <span>WhatsApp Community</span>
          </a>
        </div>
      </div>
    </div>
  );
}
