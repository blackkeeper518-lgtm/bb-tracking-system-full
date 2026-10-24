"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://yyqptukudsuizpklfrdd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cXB0dWt1ZHN1aXpwa2xmcmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MzU5ODAsImV4cCI6MjA5NzUxMTk4MH0.6z_NdqgTBfVKTUVssv_MOnyhGAWViv72PikgW5EuIxQ"
);

export default function SINGTO_STORE_V31_FIXED() {
  const [phone, setPhone] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const cleanName = (name: string) => {
    return name ? name.replace(/^[0-9\s]+/, "") : "ลูกค้า VIP";
  };

  const handleSearch = async () => {
    if (phone.length < 10) {
      alert("กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลักครับ");
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);
    setTrackingData(null);

// ใส่ : any เพื่อบอกให้ TypeScript เลิกจู้จี้เรื่อง Type ของ data และ error
const { data, error }: any = await supabase.rpc('get_parcel_by_phone_v2', { 
  search_phone: phone 
});

    setLoading(false);

    if (error) {
      console.error('Supabase Error:', error);
      setError(`ระบบมีปัญหา: ${error.message}`);
      return;
    }

    if (data?.success) {
      setResult(data.data);
      setTrackingData(data.data);
      console.log(`เจอแล้วด้วยวิธี: ${data.found_by}`);
    } else {
      setError(data?.reason || 'ไม่พบข้อมูล');
    }
  };

  return (

    <main className="min-h-screen flex items-center justify-center text-white relative overflow-hidden bg-[#05000a] font-sans px-4">
      <link href="https://fonts.googleapis.com/css2?family=Rubik+Puddles&family=Sriracha&display=swap" rel="stylesheet" />
      
      {/* 🌌 Background ม่วงอวกาศ */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#05000a] to-black" />
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-[#E21177] opacity-[0.12] blur-[100px] rounded-full" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-[#4b0082] opacity-[0.1] blur-[90px] rounded-full" />

      <style jsx global>{`
        @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes logoSweep { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes bounceName { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } }
        
        .neon-glow-purple { text-shadow: 0 0 10px #E21177, 0 0 20px #4b0082; }
        .neon-glow-white { text-shadow: 0 0 8px rgba(255,255,255,0.9); }
        
        /* ✅ แก้ไขไฟวิ่งให้คมกริบ (Ultra Precise Border) */
        .neon-card-wrapper {
          position: relative;
          padding: 2px; /* ความหนาของเส้นไฟ */
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .neon-card-wrapper::before {
          content: "";
          position: absolute;
          width: 150%;
          height: 150%;
          background: conic-gradient(transparent, transparent, transparent, #E21177, #fff, #E21177);
          animation: rotate 4s linear infinite;
          z-index: 0;
        }

        .neon-card-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          background: #0d001a; /* สีพื้นหลังข้างในปุ่ม/การ์ด */
          border-radius: calc(1.5rem - 2px);
        }

        /* สำหรับปุ่มเช็คพัสดุโดยเฉพาะ */
        .btn-inner {
          background: linear-gradient(to bottom right, #4b0082, #E21177);
          border-radius: calc(1.5rem - 2px);
          transition: all 0.3s;
        }
        .btn-inner:hover { opacity: 0.9; }
      `}</style>

      <div className="relative z-10 w-full max-w-md p-6">
        <div className="text-center mb-10">
          <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-[#E21177] to-white bg-[length:200%_auto] text-transparent bg-clip-text animate-[logoSweep_5s_linear_infinite] drop-shadow-[0_0_20px_rgba(226,17,119,0.8)] leading-tight" style={{ fontFamily: "'Rubik Puddles', cursive" }}>
            BB STORE
          </h1>
          <div className="mt-2 flex flex-col gap-2">
            <p className="text-2xl font-bold text-white neon-glow-white tracking-widest uppercase italic" style={{ fontFamily: "'Sriracha', cursive" }}>✧บุหรี่นอกราคาส่ง✧</p>
            <p className="text-[10px] tracking-[0.05em] text-pink-300 font-bold uppercase neon-glow-purple opacity-90 leading-relaxed">
              {"| \"𝓑𝓑ᵀᴹ° | แหล่งรวมไอเทม สายควัน แห่งสมรภูมิออนไลน์"}
            </p>
          </div>
        </div>

        {/* 🔍 INPUT & BUTTON */}
        <div className="space-y-5 mb-8">
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} 
            placeholder="กรอกเบอร์โทรศัพท์" 
            className="w-full p-5 text-center text-2xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl outline-none focus:border-[#E21177] text-white" 
          />
          
          {/* ✅ ปุ่มไฟวิ่งแบบใหม่ บาลานซ์เป๊ะ */}
          <div className="neon-card-wrapper group active:scale-95 transition-transform cursor-pointer" onClick={handleSearch}>
            <div className="neon-card-inner btn-inner w-full py-5 text-center">
              <span className="neon-glow-white font-black text-xl uppercase tracking-widest">
                {loading ? "กำลังค้นหา..." : "เช็คเลขพัสดุ"}
              </span>
            </div>
          </div>
        </div>

        {/* 📦 RESULT AREA */}
        {trackingData && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* ✅ ป้ายชื่อลูกค้า VIP ไฟวิ่งคมกริบ */}
            <div className="neon-card-wrapper shadow-[0_0_30px_rgba(226,17,119,0.4)]">
              <div className="neon-card-inner bg-[#05000a]/95 p-6 text-center">
                <span className="text-xs text-pink-400 font-black uppercase tracking-[0.2em] neon-glow-purple">คุณคือลูกค้า VIP</span>
                <div className="animate-[bounceName_2s_infinite] mt-2">
                  <h2 className="text-4xl text-white font-black uppercase tracking-tight neon-glow-white leading-tight" style={{ fontFamily: "'Sriracha', cursive" }}>
                    {cleanName(trackingData.consignee)}
                  </h2>
                </div>
              </div>
            </div>

            {/* เลขพัสดุ */}
            <div onClick={() => { navigator.clipboard.writeText(trackingData.tracking_number); setCopied(true); setTimeout(() => setCopied(false), 2000); }} 
              className="p-5 bg-white/5 border border-white/10 rounded-2xl cursor-pointer text-center relative hover:bg-white/10 transition-all shadow-lg overflow-hidden">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-tighter">แตะคัดลอกเลขพัสดุ</p>
              <p className="text-2xl font-mono font-bold text-pink-200 tracking-[0.1em] neon-glow-purple uppercase">{trackingData.tracking_number}</p>
              {copied && <div className="absolute inset-0 flex items-center justify-center bg-[#E21177] rounded-2xl font-bold animate-in fade-in neon-glow-white">COPIED!</div>}
            </div>

            {/* ยอด COD */}
            <div className="py-2 text-center">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest neon-glow-white opacity-60">ยอดชำระปลายทาง</p>
                <p className="text-7xl text-white font-black neon-glow-purple mt-1 drop-shadow-xl leading-none">฿{trackingData.cod_amount.toLocaleString()}</p>
            </div>

            {/* ปุ่มอื่นๆ */}
            <div className="grid gap-3">
              <a href={`https://www.flashexpress.co.th/tracking/?trackNo=${trackingData.tracking_number}`} target="_blank" className="block p-5 border-2 border-dashed border-pink-500/50 rounded-2xl bg-pink-500/10 text-center animate-pulse active:scale-95 transition-transform">
                  <p className="text-lg font-black text-white italic tracking-tighter neon-glow-white uppercase">👉 ดูสถานะจริงที่ FLASH EXPRESS</p>
              </a>
              <a href="https://line.me/ti/p/@bbstore" target="_blank" className="block py-4 rounded-xl font-bold text-white text-center bg-[#06C755] shadow-lg hover:scale-[1.02] transition-transform">
                💬 สอบถามแอดมิน: @bbstore
              </a>
            </div>

            <div className="mt-4 p-5 border-2 border-dashed border-pink-500/50 rounded-2xl bg-pink-500/10 text-center animate-pulse shadow-lg">
                <p className="text-[10px] text-pink-300 font-bold uppercase tracking-widest mb-1 neon-glow-purple">Special Offer for you</p>
                <p className="text-lg font-black text-white italic tracking-tight neon-glow-white">แอดไลน์ลุ้นเล่นกิจกรรม รับของรางวัลเพียบ</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
