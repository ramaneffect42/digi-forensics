import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    console.log("%csike! search properly 😈", "color: red; font-size: 16px; font-weight: bold;");
  })
  useEffect(() => {
    const updateTime = () => {
      const istTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(istTime);
    };

    updateTime(); // run immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="relative w-full max-w-2xl text-center">

        {/* Soft Background Circle */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-80 sm:w-96 md:w-[500px] aspect-square bg-slate-200 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* Content */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800">
          We’ll be back soon.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed">
          Our website is currently undergoing scheduled maintenance.
          We’re working hard to improve your experience.
          Please check back shortly.
        </p>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <div className="w-24 h-1 bg-slate-300 rounded-full"></div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} ArrowDev. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-slate-400">
          Time: {time}
        </p>

      </div>

      <p className="fixed bottom-3 right-4 text-[10px] text-slate-300 select-none">
        the source must be inspected.
      </p>

    </div>
  );
}
