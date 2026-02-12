import React, { useState } from 'react'
import {supabase} from './supabaseClient'

function Landing() {
  const [waitEmail, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit (e){
    e.preventDefault();
    setSubmitted(true);

    console.log(waitEmail)

    const {data, error} = await supabase
        .from('waitlist')
        .insert([{email: waitEmail}])
        .select()

    if(error){
        alert(error.message)
    }else{
        console.log('Data added:', data)
    }
  };

  return (
    <div className="bg-[#0B1220] text-[#F9FAFB] min-h-screen selection:bg-[#A3FF12] selection:text-[#0B1220] font-sans">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#1E293B] bg-[#0B1220]/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center">
          <h1 className="text-2xl font-black tracking-tighter italic uppercase text-[#A3FF12]">
            Glide
          </h1>
        </div>
      </nav>

      {/* hero section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#A3FF12]/10 blur-[120px] rounded-full -z-10" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6 italic">
          Glide: Book Your <span className="text-[#A3FF12]">Turf Instantly</span>
        </h1>
        <p className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          No more double bookings. No more last-minute chaos.
          Find available turfs instantly and lock your game in seconds.
        </p>
        <a
          href="#waitlist"
          className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#A3FF12] text-[#0B1220] rounded-full text-lg font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_#A3FF12] active:scale-95"
        >
          <span className="relative z-10">Get Early Access</span>
        </a>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8 bg-[#111827] border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 uppercase italic text-center tracking-tight">
            Why Players <span className="text-[#00F5FF]">Love Glide</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group bg-[#1F2937] p-8 rounded-2xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-2 hover:border-[#A3FF12]/30">
              <div className="w-12 h-12 bg-[#0B1220] rounded-lg mb-6 flex items-center justify-center border border-[#1E293B] group-hover:border-[#A3FF12]/50 transition-colors">
                <div className="w-5 h-5 bg-[#A3FF12] rounded-sm shadow-[0_0_10px_#A3FF12]" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Real-Time Availability</h3>
              <p className="text-[#9CA3AF] leading-relaxed">Check turf availability instantly and never miss a match.</p>
            </div>
            <div className="group bg-[#1F2937] p-8 rounded-2xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-2 hover:border-[#00F5FF]/30">
              <div className="w-12 h-12 bg-[#0B1220] rounded-lg mb-6 flex items-center justify-center border border-[#1E293B] group-hover:border-[#00F5FF]/50 transition-colors">
                <div className="w-5 h-5 bg-[#00F5FF] rounded-sm shadow-[0_0_10px_#00F5FF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Instant Booking</h3>
              <p className="text-[#9CA3AF] leading-relaxed">Lock your turf in seconds with our verified system.</p>
            </div>
            <div className="group bg-[#1F2937] p-8 rounded-2xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-2 hover:border-[#F9FAFB]/30">
              <div className="w-12 h-12 bg-[#0B1220] rounded-lg mb-6 flex items-center justify-center border border-[#1E293B] group-hover:border-[#F9FAFB]/50 transition-colors">
                <div className="w-5 h-5 bg-[#F9FAFB] rounded-sm shadow-[0_0_10px_#F9FAFB]" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">Transparent Pricing</h3>
              <p className="text-[#9CA3AF] leading-relaxed">No last-minute charges. Always know what you pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / CTA Section */}
      <section id="waitlist" className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00F5FF]/5 blur-[150px] rounded-full -z-10" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight italic">Secure Your Spot</h2>
          <p className="text-[#9CA3AF] text-lg mb-7 max-w-xl mx-auto">
            Join our waitlist and get early access to Glide when it goes live.
          </p>

          <p className="text-[#9CA3AF] text-lg mb-12 max-w-xl mx-auto">
              For any inquiries, <a href="mailto:ksteve173@gmail.com" className='text-[#A3FF12] underline'>kindly shoot us an Email</a>
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch justify-center gap-3 p-2 bg-[#111827] rounded-2xl border border-[#1E293B] focus-within:border-[#A3FF12]/50 transition-all duration-300">
              <input
                type="email"
                placeholder="Enter your email"
                value={waitEmail}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent px-6 py-4 rounded-xl text-[#F9FAFB] placeholder-[#9CA3AF] focus:outline-none min-h-[56px]"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#7DCC0F] hover:bg-[#A3FF12] text-[#0B1220] rounded-xl font-bold uppercase tracking-tighter transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-[#111827] border border-[#A3FF12]/20 animate-in fade-in zoom-in duration-500">
              <p className="text-[#A3FF12] text-xl font-bold uppercase italic tracking-widest">
                Thanks for joining the waitlist! 🎉
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 border-t border-[#1E293B] text-center">
        <p className="text-[#9CA3AF] text-sm uppercase tracking-widest opacity-50">
          &copy; {new Date().getFullYear()} Glide. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Landing