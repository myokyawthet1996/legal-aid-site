import React from 'react';
import { Scale, ShieldCheck, Phone, Mail } from 'lucide-react'; // Icon လေးတွေ သုံးဖို့ပါ

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-yellow-500/30">
      
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
          alt="Justice Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 p-4 sticky top-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="text-yellow-500 w-8 h-8" />
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tighter">
              MYANMAR LEGAL AID
            </h1>
          </div>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            အကူအညီတောင်းရန်
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 py-24 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm mb-6">
          <ShieldCheck size={16} />
          <span>၁၀၀% အခမဲ့ ဥပဒေရေးရာ အကူအညီ</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          တရားမျှတမှုသည် <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">လူတိုင်းအတွက်</span> ဖြစ်ရမည်
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          ငွေကြေးမတတ်နိုင်သော မိဘပြည်သူများအတွက် ရာဇဝတ်မှုနှင့် တရားမမှုများကို 
          ကျွမ်းကျင်ရှေ့နေများမှ အခမဲ့ အစွမ်းကုန် လိုက်ပါကူညီပေးနေပါသည်။
        </p>
      </header>

      {/* Form Section */}
      <main id="contact" className="relative z-10 max-w-2xl mx-auto py-12 px-6">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Decorative Gradient */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 blur-3xl rounded-full"></div>
          
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            အမှုတွဲ တင်ပြရန်
          </h3>
          
          <form 
            action="https://formspree.io/f/xaqqqvvk" 
            method="POST" 
            className="space-y-6"
          >
            {/* Success Page Redirect */}
            <input type="hidden" name="_next" value="https://legal-aid-site-sooty.vercel.app/" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">အမည်အပြည့်အစုံ</label>
                <input type="text" name="name" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-yellow-500 outline-none transition" placeholder="ဦးဘ" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">ဖုန်းနံပါတ်</label>
                <input type="tel" name="phone" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-yellow-500 outline-none transition" placeholder="09xxxxxxx" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">အီးမေးလ် (Auto-Reply ရရှိရန်)</label>
              <input type="email" name="email" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-yellow-500 outline-none transition" placeholder="example@gmail.com" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">အမှုအမျိုးအစား</label>
              <select name="case_type" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-yellow-500 outline-none appearance-none">
                <option className="bg-[#0f172a]" value="ရာဇဝတ်မှု">ရာဇဝတ်မှု (Criminal Case)</option>
                <option className="bg-[#0f172a]" value="တရားမမှု">တရားမမှု (Civil Case)</option>
                <option className="bg-[#0f172a]" value="မြေယာအမှု">မြေယာအမှု</option>
                <option className="bg-[#0f172a]" value="အခြား">အခြား</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">ဖြစ်စဉ်အကျဉ်းချုပ်</label>
              <textarea name="message" rows={4} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-yellow-500 outline-none transition" placeholder="အမှုဖြစ်စဉ်ကို ရှင်းလင်းစွာ ရေးပေးပါ..." required></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-extrabold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transform active:scale-[0.98] transition-all duration-200">
              အကူအညီတောင်းခံလွှာ ပေးပို့မည်
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><Phone size={14}/> ၀၉-xxxxxxx</span>
            <span className="flex items-center gap-1"><Mail size={14}/> contact@legal-aid.com</span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-12 text-center text-slate-500 text-sm border-t border-white/5">
        <p>© 2026 Legal Aid Network Myanmar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}