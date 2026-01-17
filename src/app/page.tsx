import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Free Legal Aid Myanmar</h1>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full font-bold transition">
            အကူအညီတောင်းရန်
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
          တရားမျှတမှုသည် လူတိုင်းအတွက် ဖြစ်ရမည်
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ငွေကြေးမတတ်နိုင်သဖြင့် ဥပဒေအခက်အခဲဖြစ်နေသော မိဘပြည်သူများအတွက် 
          <span className="text-blue-700 font-bold"> ရာဇဝတ်မှုနှင့် တရားမမှုများ </span> 
          ကို အခမဲ့ အစွမ်းကုန် လိုက်ပါကူညီပေးပါသည်။
        </p>
      </header>

      {/* Form Section */}
      <main id="contact" className="max-w-2xl mx-auto py-16 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">အမှုအကြောင်းအရာ တင်ပြရန်</h3>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">အမည်အပြည့်အစုံ</label>
              <input type="text" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="ဦးဘ..." required />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">ဆက်သွယ်ရန် ဖုန်းနံပါတ်</label>
              <input type="tel" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="09xxxxxxx" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">အမှုအမျိုးအစား</label>
              <select className="w-full mt-1 p-3 border rounded-lg outline-none">
                <option>ရာဇဝတ်မှု (Criminal)</option>
                <option>တရားမမှု (Civil)</option>
                <option>မြေယာအမှု</option>
                <option>အခြား</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">ဖြစ်စဉ်အကျဉ်း</label>
              <textarea rows={5} className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="ဖြစ်စဉ်ကို အကျဉ်းချုပ် ရေးပေးပါ..."></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 shadow-lg transition">
              လျှောက်ထားလွှာ ပေးပို့မည်
            </button>
          </form>
          <p className="text-xs text-center text-gray-400 mt-4 italic">ကိုယ်ရေးအချက်အလက်များကို လျှို့ဝှက်စွာ သိမ်းဆည်းပေးပါမည်။</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 text-center">
        <p>© 2024 Myanmar Legal Aid Network. All Rights Reserved.</p>
      </footer>
    </div>
  );
}