import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Award, Newspaper, Star, TrendingUp, ExternalLink, Calendar, MapPin, Building2 } from "lucide-react";
import { useRef } from "react";

const AWARDS_DATA = [
  {
    year: "2024",
    title: "Financial Times 500",
    description: "Ranked among the Fastest Growing Companies in the Americas for the 3rd consecutive year.",
    icon: <TrendingUp className="w-6 h-6" />,
    category: "Award",
    accent: "bg-orange-500",
  },
  {
    year: "2023",
    title: "Inc. 5000",
    description: "Honored as one of the fastest-growing private companies in America for the 3rd year in a row.",
    icon: <Award className="w-6 h-6" />,
    category: "Ranking",
    accent: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Inc. Regionals Pacific",
    description: "Recognized as a leading growth company in the Pacific region.",
    icon: <MapPin className="w-6 h-6" />,
    category: "Ranking",
    accent: "bg-green-500",
  },
  {
    year: "2022",
    title: "Financial Times #50",
    description: "Ranked #50 in the Fastest Growing Companies in The Americas.",
    icon: <Star className="w-6 h-6" />,
    category: "Award",
    accent: "bg-yellow-500",
  },
  {
    year: "2021",
    title: "Inc. 5000 Regionals",
    description: "7th fastest growing private company in California.",
    icon: <Building2 className="w-6 h-6" />,
    category: "Ranking",
    accent: "bg-purple-500",
  },
  {
    year: "2020",
    title: "Inc. 5000",
    description: "Appeared on the Inc. 5000 for the second consecutive year.",
    icon: <Award className="w-6 h-6" />,
    category: "Ranking",
    accent: "bg-red-500",
  },
  {
    year: "2019",
    title: "Inc. 5000 Top 3%",
    description: "Cracked the top 3% of the Inc. 5000 list on the debut appearance.",
    icon: <Star className="w-6 h-6" />,
    category: "Award",
    accent: "bg-amber-500",
  }
];

const NEWS_DATA = [
  {
    date: "FEATURED",
    title: "Strategic Shift: The New Brill Media Value Ladder",
    summary: "A formalized methodology for client success, detailing our phased approach from core programmatic acquisition to advanced performance attribution and creative scale.",
    type: "Strategy",
  },
  {
    date: "Q1 2024",
    title: "Quarterly State of Brill Media Update",
    summary: "Reflecting on 12 new client wins, strategic senior hires in AdOps, and the rollout of our 'Target-X' bidding algorithm. Significant wins in CPG retail have redefined our performance benchmarks.",
    type: "Company News",
  },
  {
    date: "RECENT",
    title: "Growth Milestones & Tech Partnerships",
    summary: "Celebrating $100M+ in managed annual spend and new strategic partnerships with privacy-first data providers. Product improvements now include automated creative modularity.",
    type: "Milestone",
  },
  {
    date: "Dec 2023",
    title: "McDonald's New Spinoff Chain Analysis",
    summary: "Expert breakdown of how the 'CosMc's' spinoff aims to disrupt the specialty coffee market through data-driven localized targeting.",
    type: "Industry",
  },
  {
    date: "Nov 2023",
    title: "Campaign Excellence: Retail ROAS Wins",
    summary: "How our proprietary layering of contextual and behavioral data achieved a 40% YOY improvement in return on ad spend for major retail partners.",
    type: "Case Study",
  }
];

const AwardCard = ({ award, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, x: 5 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className="relative group cursor-pointer"
    >
      <div className="flex flex-col md:flex-row gap-8 py-12 border-b border-black/10 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-black/5 transition-all duration-500 px-4 rounded-xl text-black">
        <div className="md:w-32 flex flex-col justify-start">
          <span className="text-4xl font-black font-mono tracking-tighter text-black/40 group-hover:text-accent-orange transition-colors">
            {award.year}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black/30 mt-2">
            {award.category}
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${award.accent.replace('bg-', 'bg-opacity-20 bg-')} !bg-opacity-20`}>
              {award.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black group-hover:translate-x-2 transition-transform duration-500 uppercase">
              {award.title}
            </h3>
          </div>
          <p className="text-black/60 text-lg leading-relaxed max-w-2xl font-medium">
            {award.description}
          </p>
        </div>

        <div className="hidden md:flex items-center justify-end">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black/40 hover:text-accent-orange hover:border-accent-orange transition-all cursor-pointer"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const NewsItem = ({ news, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -8, scale: 1.02, x: 4 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        hover: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="glass-card p-6 rounded-xl hover:bg-white transition-all cursor-pointer group shadow-sm border-black/5 hover:shadow-2xl hover:shadow-black/5"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 bg-black/5 rounded text-[10px] uppercase font-black tracking-wider text-accent-orange">
          {news.type}
        </span>
        <span className="text-xs text-black/40 font-mono font-bold">
          {news.date}
        </span>
      </div>
      <h4 className="text-lg font-black text-black group-hover:text-accent-orange transition-colors mb-2 uppercase leading-tight">
        {news.title}
      </h4>
      <p className="text-black/50 text-sm line-clamp-2 font-medium">
        {news.summary}
      </p>
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.05], [0, -50]);

  return (
    <div className="min-h-screen bg-bg-light text-black font-sans selection:bg-accent-orange/20 overflow-x-hidden relative" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-orange origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center w-full px-12 py-8 z-40 bg-bg-light/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent-orange rounded-full shadow-lg shadow-accent-orange/20"></div>
          <span className="text-xl font-black tracking-tighter text-black">BRILL MEDIA</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-xs font-black tracking-widest uppercase items-center">
          <span className="cursor-pointer hover:text-accent-orange transition-colors opacity-60 hover:opacity-100">Solutions</span>
          <span className="cursor-pointer hover:text-accent-orange transition-colors opacity-60 hover:opacity-100">Capabilities</span>
          <span className="cursor-pointer hover:text-accent-orange transition-colors opacity-60 hover:opacity-100">Case Studies</span>
          <span className="text-accent-orange cursor-pointer">News & Awards</span>
          <button className="bg-black text-white px-6 py-2 rounded font-black text-[10px] hover:bg-accent-orange transition-all shadow-lg hover:shadow-accent-orange/30">START NOW</button>
        </nav>
      </header>

      {/* Decorative Background Text */}
      <div className="fixed top-32 left-12 opacity-[0.05] pointer-events-none z-0">
        <span className="text-giant block rotate-[-5deg]">ARCHIVE</span>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          style={{ opacity, y }}
          className="z-10 text-center flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[10px] uppercase font-black text-accent-orange mb-8 block"
          >
            RECOGNITION & IMPACT
          </motion.span>
          
          <div className="text-giant flex flex-col items-center text-black">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block"
            >
              NEWS <span className="text-accent-orange">+</span>
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block -mt-4 md:ml-48"
            >
              AWARDS
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 text-lg md:text-xl text-black/40 max-w-xl mx-auto font-bold leading-relaxed uppercase tracking-tight"
          >
            Consistently recognized as one of the fastest-growing advertising agencies in the United States.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator Rails */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4">
          <div className="h-24 w-[1px] bg-black opacity-10"></div>
          <span className="text-[10px] rotate-90 uppercase tracking-[0.3em] opacity-40 whitespace-nowrap font-black">Scroll History</span>
          <div className="h-24 w-[1px] bg-black opacity-10"></div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-orange to-transparent" />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-12 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Awards Timeline (8 cols) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-20 border-l-4 border-accent-orange pl-6">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-2 text-black">
                Milestones <br/>
                <span className="text-black/10">Archive</span>
              </h2>
            </div>
            
            <div className="flex flex-col divide-y divide-black/5">
              {AWARDS_DATA.map((award, i) => (
                <AwardCard key={i} award={award} index={i} />
              ))}
            </div>
          </div>

          {/* Side News (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="glass-card rounded-3xl p-10 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse"></div>
                <h3 className="text-xl font-black uppercase tracking-widest text-black">Latest News</h3>
              </div>

              <div className="space-y-8">
                {NEWS_DATA.map((news, i) => (
                  <NewsItem key={i} news={news} index={i} />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-12 py-5 rounded-xl bg-black text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-black/20 hover:bg-accent-orange transition-colors"
              >
                View Resources
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <section className="py-40 border-t border-black/5 bg-black/[0.01] relative overflow-hidden">
        <div className="absolute top-0 right-0 text-giant opacity-[0.02] pointer-events-none uppercase text-black">BRILL</div>
        
        <div className="max-w-5xl mx-auto px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-black">
              Ready to <br/>
              <span className="text-accent-orange uppercase">Supercharge</span><br/>
              Your Growth?
            </h2>
            <p className="text-black/40 text-xl font-bold uppercase tracking-tight max-w-2xl mx-auto">
              Join the ranks of top brands leveraging award-winning expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <motion.button
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-12 py-6 bg-accent-orange rounded-xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-accent-orange/40 text-white"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-12 py-6 glass-card rounded-xl font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all text-black"
              >
                Capabilities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer-grid py-16 px-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center bg-bg-light z-10 relative">
        <div className="flex space-x-16 mb-8 md:mb-0">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-black text-black">Total Awards</span>
            <span className="text-3xl font-black italic text-black">42+</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1 font-black text-black">Industry Rank</span>
            <span className="text-3xl font-black italic text-accent-orange">Top 1%</span>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-[10px] opacity-40 leading-relaxed max-w-xs font-mono uppercase tracking-widest font-black text-black">
            Our mission is to help companies grow through high-performance advertising and transparency.
          </p>
          <div className="mt-4 text-[10px] text-black/20 font-mono font-bold">
            &copy; {new Date().getFullYear()} Brill Media. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
