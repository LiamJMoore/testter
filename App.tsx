import React from 'react';
import HeadmasterChat from './components/HeadmasterChat';
import Tokenomics from './components/Tokenomics';
import { ArrowRight, Twitter, ExternalLink, AlertTriangle, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-pattern">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-learing-brown text-white py-3 px-6 shadow-lg border-b-4 border-learing-yellow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-comic font-bold text-2xl flex items-center gap-2">
            <span className="bg-learing-yellow text-learing-brown px-2 py-1 rounded rotate-2 border-2 border-white">$LEARING</span>
          </div>
          <div className="hidden md:flex gap-6 font-bold text-lg">
            <a href="#about" className="hover:text-learing-yellow transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-learing-yellow transition-colors">Tokenomiks</a>
            <a href="#roadmap" className="hover:text-learing-yellow transition-colors">Roadmp</a>
          </div>
          <button className="bg-learing-teal text-white border-2 border-white px-4 py-1 rounded-full font-bold hover:bg-white hover:text-learing-teal transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
            CONECT WALET
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-learing-yellow relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 transform -rotate-12">
           <span className="text-9xl font-comic font-bold">ABC</span>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-white border-2 border-black px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-wiggle">
              🚨 ELON MUSK'S WORD OF THE YEAR
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-learing-brown font-comic leading-tight">
              Quality <span className="text-learing-teal inline-block transform -rotate-2 underline decoration-wavy decoration-learing-brown">Learing</span> Center
            </h1>
            <p className="text-xl md:text-2xl font-bold text-learing-brown/80 font-comic max-w-lg">
              "For Kids Who Can't Read Good And Want To Do Other Stuff Good Too"
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-learing-brown text-white text-xl px-8 py-4 rounded-xl font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
                BUY $LEARING <ArrowRight />
              </button>
              <a href="https://x.com/elonmusk" target="_blank" rel="noreferrer" className="bg-blue-400 text-white text-xl px-4 py-4 rounded-xl font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-500 transition-all">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="bg-learing-teal p-6 rounded-[40px] border-8 border-learing-brown shadow-[12px_12px_0px_0px_rgba(92,58,33,1)] transform rotate-2">
              <div className="bg-learing-yellow border-4 border-learing-brown rounded-2xl p-6 text-center space-y-4">
                 <div className="w-full h-48 bg-learing-brown/20 rounded-xl flex items-center justify-center overflow-hidden mb-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl">🏫</span>
                    </div>
                    {/* Imitating the sign */}
                    <div className="absolute bottom-2 bg-white/90 px-4 py-1 rounded-lg border-2 border-black font-comic font-bold text-learing-brown text-lg transform -rotate-2">
                        612-702-4012
                    </div>
                 </div>
                 <h3 className="font-comic font-bold text-3xl text-learing-brown">WORD OF THE YEAR</h3>
                 <div className="flex justify-center items-center gap-2">
                    <span className="text-4xl font-black text-white text-stroke-2 stroke-black">$LEARING</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Elon Tweet Section */}
      <section className="py-12 bg-black text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-400">AS SEEN ON X (TWITTER)</h2>
            <div className="bg-black border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto text-left hover:border-gray-600 transition-colors cursor-pointer">
                <div className="flex gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <img src="https://picsum.photos/100/100" alt="Elon" className="w-full h-full object-cover" /> 
                    </div>
                    <div>
                        <div className="flex items-center gap-1 font-bold">Elon Musk <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center text-[8px]">✓</div></div>
                        <div className="text-gray-500 text-sm">@elonmusk</div>
                    </div>
                </div>
                <div className="text-xl mb-4">
                    Word of the year
                </div>
                <div className="border border-gray-700 rounded-xl p-3 mb-2">
                    <div className="flex items-center gap-1 text-sm font-bold mb-1">
                        <div className="w-5 h-5 bg-yellow-600 rounded-full"></div> Serf ✓ <span className="text-gray-500 font-normal">@TheRoyalSerf</span>
                    </div>
                    <div className="text-lg">LEARING CENTER</div>
                </div>
                <div className="text-gray-500 text-sm flex gap-6 mt-4">
                    <span>1.3K Replies</span>
                    <span>12K Likes</span>
                    <span>2.3M Views</span>
                </div>
            </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Lore & Tokenomics */}
          <div className="space-y-12">
            
            {/* Dictionary Definition Card */}
            <div className="bg-white p-8 rounded-3xl border-4 border-learing-brown shadow-[8px_8px_0px_0px_#5FD2C8] relative">
              <div className="absolute -top-6 -left-4 bg-learing-teal text-white p-3 rounded-xl border-4 border-black rotate-[-5deg] z-20">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="border-b-2 border-learing-brown/20 pb-4 mb-6 ml-4">
                <h2 className="text-5xl font-serif font-bold text-learing-brown mb-2 tracking-tight">
                  Learing
                </h2>
                <div className="flex items-center gap-3 text-gray-500 italic font-serif text-lg">
                  <span className="font-semibold">noun</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>/ˈlɪərɪŋ/</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-learing-teal font-bold not-italic font-comic">"Close Enough"</span>
                </div>
              </div>
              
              <div className="space-y-6 font-serif text-lg leading-relaxed text-gray-800">
                <div className="flex gap-4">
                    <span className="font-bold text-learing-teal font-sans mt-1">(1)</span>
                    <p>The advanced academic art of cashing million-dollar government checks while forgetting how vowels and consonants work.</p>
                </div>
                <div className="flex gap-4">
                    <span className="font-bold text-learing-teal font-sans mt-1">(2)</span>
                    <p>A bold new approach to education where spelling is optional, accountability is nonexistent, and the curriculum is mostly paperwork for “tax-exempt funding.”</p>
                </div>
                <div className="flex gap-4">
                    <span className="font-bold text-learing-teal font-sans mt-1">(3)</span>
                    <p className="bg-yellow-100 p-1 -m-1 rounded">Minnesota slang for: “Look, we’re totally a daycare, ignore the fact that the only thing we’re teaching is how to print money.”</p>
                </div>
              </div>
            </div>

            {/* Scandal Card */}
            <div className="bg-white p-8 rounded-3xl border-4 border-learing-brown shadow-[8px_8px_0px_0px_#5FD2C8]">
              <h2 className="text-4xl font-comic font-bold text-learing-brown mb-4 flex items-center gap-3">
                <AlertTriangle className="text-red-500 w-10 h-10" />
                The Scandal
              </h2>
              <p className="text-lg leading-relaxed font-medium text-gray-700">
                Deep in the heart of Minnesota, a legend was born. Not from success, but from a sign. 
                The <span className="font-bold text-learing-teal">Quality Learing Center</span> promised to teach kids good, 
                but they couldn't even spell "Learning" on their own billboard. 
              </p>
              <p className="mt-4 text-lg leading-relaxed font-medium text-gray-700">
                Fraud? Maybe. Iconic? Definitely. While the Feds investigate the millions in funding, 
                we are funding our wallets with the only coin spelled as poorly as the education provided.
              </p>
            </div>

            <div id="tokenomics">
               <Tokenomics />
            </div>
          </div>

          {/* Right Column: Chatbot & Buying */}
          <div className="space-y-12">
            <div className="relative">
                <div className="absolute -top-6 -right-6 bg-red-500 text-white font-bold font-comic px-4 py-2 rounded-full rotate-12 z-10 border-2 border-black shadow-lg">
                    AI POWERED BY FRAUD!
                </div>
                <HeadmasterChat />
            </div>

            <div className="bg-learing-green p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000]">
                <h2 className="text-3xl font-black text-white mb-4 uppercase italic">How to Buy</h2>
                <ul className="space-y-4 font-comic font-bold text-xl text-white/90">
                    <li className="flex items-center gap-3">
                        <span className="bg-black text-learing-green w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">1</span>
                        Download Phantom Wallet (or any walet)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="bg-black text-learing-green w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">2</span>
                        Buy SOL (Solana is fast like our getaway cars)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="bg-black text-learing-green w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">3</span>
                        Swap for $LEARING
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="bg-black text-learing-green w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">4</span>
                        Dont tell the goverment
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 bg-learing-brown text-white px-4">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-comic font-bold mb-16">The Roadmp (We lost the map)</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-learing-brown border-4 border-learing-yellow p-6 rounded-2xl relative">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-learing-yellow text-learing-brown font-bold px-4 py-1 rounded-full border-2 border-white">Phase 1</div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">The Typo</h3>
                    <p className="text-learing-yellow/80">Launch website. Misspell everything. Get retweeted by Elon.</p>
                </div>
                <div className="bg-learing-brown border-4 border-learing-teal p-6 rounded-2xl relative mt-8 md:mt-0">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-learing-teal text-learing-brown font-bold px-4 py-1 rounded-full border-2 border-white">Phase 2</div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">The Audit</h3>
                    <p className="text-learing-teal/80">Pretend to get audited. Burn 10% of supply to pay "legal fees".</p>
                </div>
                <div className="bg-learing-brown border-4 border-red-400 p-6 rounded-2xl relative mt-8 md:mt-0">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-400 text-white font-bold px-4 py-1 rounded-full border-2 border-white">Phase 3</div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">Graduation</h3>
                    <p className="text-red-200">We actually learn to spell "Learning". Coin price goes to $0 or $100.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10 px-4 text-center border-t-8 border-learing-teal">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-comic font-bold text-white mb-6">$LEARING</h2>
            <p className="mb-6 max-w-lg mx-auto text-sm">
                DISCLAIMER: This is a meme coin. There is no intrinsic value. 
                We are not affiliated with the actual Quality Learning Center in Minnesota (allegedly). 
                Do not invest money you cannot afford to lose to a spelling error.
            </p>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="hover:text-white transition-colors"><ExternalLink /> Contract</a>
                <a href="#" className="hover:text-white transition-colors"><Twitter /> Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Telegram</a>
            </div>
            <p className="text-xs text-gray-600">© 2024 Quality Learing Center Crypto Division. All rights reserved (badly).</p>
        </div>
      </footer>
    </div>
  );
};

export default App;