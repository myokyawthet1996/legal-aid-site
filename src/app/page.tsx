import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans">
      {/* Navigation */}
      <nav className="bg-[#1e293b] border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Free Legal Aid Myanmar
          </h1>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-[#0f172a] px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
            အကူအညီတောင်းရန်
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          တရားမျှတမှုသည် <br className="md:hidden" /> လူတိုင်းအတွက် ဖြစ်ရမည်
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          ငွေကြေးမတတ်နိုင်သဖြင့် ဥပဒေအခက်အခဲဖြစ်နေသော မိဘပြည်သူများအတွက် 
          <span className="text-yellow-500 font-bold"> ရာဇဝတ်မှုနှင့် တရားမမှုများ </span> 
          ကို အခမဲ့ အစွမ်းကုန် လိုက်ပါကူညီပေးပါသည်။
        </p>
      </header>

      {/* Form Section */}
      <main id="contact" className="max-w-2xl mx-auto py-16 px-6">
        <div className="bg-[#1e293b] rounded-2xl shadow-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-center text-white mb-8 underline decoration-yellow-500 decoration-4 underline-offset-8">
            အမှုအကြောင်းအရာ တင်ပြရန်
          </h3>
          
          <form 
            action="https://formspree.io/f/xaqqqvvk" 
            method="POST" 
            className="space-y-6"
          >
            {/* Input တစ်ခုချင်းစီကို စာလုံးအမဲရောင်နဲ့ Background မီးခိုးရင့် ပုံစံပြောင်းထားပါတယ် */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">အမည်အပြည့်အစုံ</label>
              <input 
                type="text" 
                name="အမည်" 
                className="w-full p-3 bg-[#0f172a] border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition placeholder-slate-500" 
                placeholder="ဥပမာ - ဦးဘ" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">ဆက်သွယ်ရန် ဖုန်းနံပါတ်</label>
              <input 
                type="tel" 
                name="ဖုန်းနံပါတ်" 
                className="w-full p-3 bg-[#0f172a] border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition placeholder-slate-500" 
                placeholder="09xxxxxxx" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">အမှုအမျိုးအစား</label>
              <select 
                name="အမှုအမျိုးအစား" 
                className="w-full p-3 bg-[#0f172a] border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              >
                <option value="ရာဇဝတ်မှု">ရာဇဝတ်မှု (Criminal Case)</option>
                <option value="တရားမမှု">တရားမမှု (Civil Case)</option>
                <option value="မြေယာအမှု">မြေယာအမှု</option>
                <option value="အခြား">အခြား</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">ဖြစ်စဉ်အကျဉ်းချုပ်</label>
              <textarea 
                name="အမှုအကြောင်းအရာ" 
                rows={5} 
                className="w-full p-3 bg-[#0f172a] border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition placeholder-slate-500" 
                placeholder="ဖြစ်စဉ်ကို အကျဉ်းချုပ် ရှင်းလင်းစွာ ရေးပေးပါ..."
                required
              ></textarea>
            </div>

            <input type="hidden" name="_subject" value="အမှုသစ်တစ်ခု ရောက်ရှိလာပါသည်" />

            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-[#0f172a] font-extrabold py-4 rounded-lg hover:bg-yellow-400 shadow-lg transform active:scale-95 transition-all duration-200 uppercase tracking-wider"
            >
              အကူအညီတောင်းခံလွှာ ပေးပို့မည်
            </button>
          </form>

          <p className="text-xs text-center text-slate-500 mt-6 italic">
            * ပေးပို့လာသော အချက်အလက်များကို ရှေ့နေကျင့်ဝတ်နှင့်အညီ လျှို့ဝှက်စွာ သိမ်းဆည်းပေးပါမည်။
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e293b] border-t border-slate-700 py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="font-bold text-white mb-2">Free Legal Aid Myanmar</p>
          <p className="text-sm text-slate-400">မြန်မာနိုင်ငံအနှံ့အပြားရှိ ငွေကြေးမတတ်နိုင်သူများအတွက် အခမဲ့ဥပဒေဝန်ဆောင်မှု</p>
          <div className="mt-6 border-t border-slate-800 pt-6 text-xs text-slate-500">
            © 2026 Legal Aid Network Myanmar.
          </div>
        </div>
      </footer>
    </div>
  );
}