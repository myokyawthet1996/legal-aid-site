import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Free Legal Aid Myanmar</h1>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
            အကူအညီတောင်းရန်
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-20 px-4 text-center border-b border-gray-100">
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
          တရားမျှတမှုသည် <br className="md:hidden" /> လူတိုင်းအတွက် ဖြစ်ရမည်
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ငွေကြေးမတတ်နိုင်သဖြင့် ဥပဒေအခက်အခဲဖြစ်နေသော မိဘပြည်သူများအတွက် 
          <span className="text-blue-700 font-bold"> ရာဇဝတ်မှုနှင့် တရားမမှုများ </span> 
          ကို အခမဲ့ အစွမ်းကုန် လိုက်ပါကူညီပေးပါသည်။
        </p>
      </header>

      {/* Form Section */}
      <main id="contact" className="max-w-2xl mx-auto py-16 px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-50 side-decoration">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 underline decoration-yellow-500 decoration-4 underline-offset-8">
            အမှုအကြောင်းအရာ တင်ပြရန်
          </h3>
          
          {/* Formspree Integration Starts Here */}
          <form 
            action="https://formspree.io/f/xaqqqvvk" 
            method="POST" 
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">အမည်အပြည့်အစုံ</label>
              <input 
                type="text" 
                name="အမည်" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                placeholder="ဥပမာ - ဦးဘ" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">ဆက်သွယ်ရန် ဖုန်းနံပါတ်</label>
              <input 
                type="tel" 
                name="ဖုန်းနံပါတ်" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                placeholder="09xxxxxxx" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">အမှုအမျိုးအစား</label>
              <select 
                name="အမှုအမျိုးအစား" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="ရာဇဝတ်မှု">ရာဇဝတ်မှု (Criminal Case)</option>
                <option value="တရားမမှု">တရားမမှု (Civil Case)</option>
                <option value="မြေယာအမှု">မြေယာအမှု</option>
                <option value="အခြား">အခြား</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">ဖြစ်စဉ်အကျဉ်းချုပ်</label>
              <textarea 
                name="အမှုအကြောင်းအရာ" 
                rows={5} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                placeholder="ဖြစ်စဉ်ကို အကျဉ်းချုပ် ရှင်းလင်းစွာ ရေးပေးပါ..."
                required
              ></textarea>
            </div>

            {/* Honey Pot to prevent spam */}
            <input type="hidden" name="_subject" value="အမှုသစ်တစ်ခု ရောက်ရှိလာပါသည်" />

            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 shadow-lg transform active:scale-95 transition-all duration-200"
            >
              အကူအညီတောင်းခံလွှာ ပေးပို့မည်
            </button>
          </form>
          {/* Formspree Integration Ends Here */}

          <p className="text-xs text-center text-gray-400 mt-6 italic">
            * ပေးပို့လာသော အချက်အလက်များကို ရှေ့နေကျင့်ဝတ်နှင့်အညီ လျှို့ဝှက်စွာ သိမ်းဆည်းပေးပါမည်။
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="font-bold text-white mb-2">Free Legal Aid Myanmar</p>
          <p className="text-sm">မြန်မာနိုင်ငံအနှံ့အပြားရှိ ငွေကြေးမတတ်နိုင်သူများအတွက် အခမဲ့ဥပဒေဝန်ဆောင်မှု</p>
          <div className="mt-6 border-t border-blue-800 pt-6 text-xs">
            © 2026 Legal Aid Network Myanmar.
          </div>
        </div>
      </footer>
    </div>
  );
}