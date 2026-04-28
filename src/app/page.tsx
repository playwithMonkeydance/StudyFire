import React from 'react';

export default function StudyFireDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 font-sans">
      
      {/* Top Bar */}
      <header className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-black text-orange-600 tracking-tight">StudyFire<span className="text-slate-800">.AI</span></h1>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-2xl font-bold border-2 border-orange-200 shadow-sm">
            <span>🔥</span> 12 Days
          </div>
          <div className="w-10 h-10 bg-indigo-600 rounded-full border-2 border-slate-200 shadow-sm cursor-pointer hover:scale-105 transition-transform"></div>
        </div>
      </header>

      {/* Main Grid Layout (Bento Style) */}
      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Level & XP Progress (Spans full width on mobile, 2 columns on desktop) */}
        <section className="col-span-1 md:col-span-2 bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_rgba(226,232,240,1)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-slate-500 font-semibold mb-1">Current Status</p>
              <h2 className="text-3xl font-bold text-indigo-600">Level 8</h2>
            </div>
            <span className="font-bold text-slate-400">850 / 1000 XP</span>
          </div>
          <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full w-[85%] transition-all duration-500"></div>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-600 bg-slate-50 inline-block px-3 py-1 rounded-lg border border-slate-200">
            🎯 Daily Goal: Review A/L Chemistry Past Papers (+50 XP)
          </p>
        </section>

        {/* Pomodoro Timer */}
        <section className="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100 flex flex-col justify-center items-center text-center shadow-[0_4px_0_0_rgba(224,231,255,1)]">
          <span className="text-4xl mb-2">⏱️</span>
          <h3 className="font-bold text-xl text-indigo-900 mb-1">Focus Mode</h3>
          <p className="text-indigo-600/80 font-medium mb-4">25:00</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl w-full border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1 transition-all">
            Start Session
          </button>
        </section>

        {/* AI Chat Card (Large area for interaction) */}
        <section className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border-2 border-slate-700 shadow-xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">🤖</div>
            <div>
              <h3 className="font-bold text-xl">AI Assistant</h3>
              <p className="text-slate-400 text-sm">Explain like I'm 10 mode available</p>
            </div>
          </div>
          
          <div className="bg-slate-950/50 p-4 rounded-2xl mb-4 text-sm text-slate-300 font-medium border border-white/5">
            "Hey! Need help decoding that complex Physics theory or fixing a code error?"
          </div>

          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask anything..." 
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/15 transition-all"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 transition-all">
              Send
            </button>
          </div>
        </section>

        {/* Leaderboard Snippet */}
        <section className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_rgba(226,232,240,1)]">
          <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">🏆 Top Scholars</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-orange-500">1</span>
                <span className="font-semibold text-slate-700">Kamal R.</span>
              </div>
              <span className="text-sm font-bold text-indigo-600">1240 XP</span>
            </div>
            <div className="flex justify-between items-center bg-indigo-50 p-3 rounded-xl border border-indigo-100 border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-indigo-600">4</span>
                <span className="font-semibold text-indigo-900">You</span>
              </div>
              <span className="text-sm font-bold text-indigo-600">850 XP</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
