import React from 'react';
import { Link } from 'react-router-dom';
import { GAMES, Game } from '../data/games';
import { GAME_CONTENT } from '../data/gameContent';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Dashboard() {
  const feGames = GAMES.filter(g => g.package === 'FE');
  const oto1Games = GAMES.filter(g => g.package === 'OTO1');
  const oto2Games = GAMES.filter(g => g.package === 'OTO2');
  const featuredGame = GAMES.find(g => g.isFeatured) || feGames[0];

  const handleDownload = (e: React.MouseEvent, gameId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const html = GAME_CONTENT[gameId];
    if (!html) return;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${gameId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
        >
          Game <span className="text-wf-blue relative inline-block">
            Hub
            <span className="absolute bottom-2 left-0 w-full h-4 bg-wf-gold -z-10 skew-x-[-15deg] border-2 border-wf-dark"></span>
          </span>
        </motion.h1>
        <p className="text-xl font-bold uppercase text-gray-600">20 Brutalist Classics • FE, OTO 1 & OTO 2 Packages</p>
      </header>

      {/* FE PACKAGE SECTION */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black uppercase bg-wf-gold px-6 py-2 border-4 border-wf-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            FE Package <span className="text-sm opacity-60 ml-2">(5 Games)</span>
          </h2>
          <div className="h-1 flex-1 bg-wf-dark"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {feGames.map((game, index) => {
            const IconComponent = (Icons as any)[game.icon] || Icons.Gamepad2;
            return (
              <motion.div
                key={game.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={`/game/${game.id}`}
                  className="group flex flex-col h-full brutalist-card p-6 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                      "w-14 h-14 rounded-xl border-4 border-wf-dark flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform",
                      game.color
                    )}>
                      <IconComponent size={28} strokeWidth={3} />
                    </div>
                    <div className={cn(
                      "text-[8px] font-black uppercase px-2 py-1 rounded border-2 border-wf-dark",
                      game.difficulty === 'Easy' ? 'bg-wf-green' : 
                      game.difficulty === 'Medium' ? 'bg-wf-gold' : 'bg-wf-red text-white'
                    )}>
                      {game.difficulty}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black uppercase mb-6 group-hover:text-wf-orange transition-colors">
                    {game.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="px-4 py-2 bg-wf-dark text-white text-[10px] font-black uppercase rounded-lg group-hover:bg-wf-blue group-hover:text-wf-dark transition-all flex items-center gap-2">
                      Play <Icons.ArrowRight size={14} />
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, game.id)}
                      className="w-10 h-10 flex items-center justify-center bg-wf-white border-2 border-wf-dark rounded-lg hover:bg-wf-orange hover:text-white transition-colors"
                      title="Download HTML"
                    >
                      <Icons.Download size={16} strokeWidth={3} />
                    </button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* OTO 1 PACKAGE SECTION */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black uppercase bg-wf-blue px-6 py-2 border-4 border-wf-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            OTO 1 Package <span className="text-sm opacity-60 ml-2">(5 Games)</span>
          </h2>
          <div className="h-1 flex-1 bg-wf-dark"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {oto1Games.map((game, index) => {
            const IconComponent = (Icons as any)[game.icon] || Icons.Gamepad2;
            return (
              <motion.div
                key={game.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: (index + 5) * 0.05 }}
              >
                <Link 
                  to={`/game/${game.id}`}
                  className="group flex flex-col h-full brutalist-card p-6 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                      "w-14 h-14 rounded-xl border-4 border-wf-dark flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform",
                      game.color
                    )}>
                      <IconComponent size={28} strokeWidth={3} />
                    </div>
                    <div className={cn(
                      "text-[8px] font-black uppercase px-2 py-1 rounded border-2 border-wf-dark",
                      game.difficulty === 'Easy' ? 'bg-wf-green' : 
                      game.difficulty === 'Medium' ? 'bg-wf-gold' : 'bg-wf-red text-white'
                    )}>
                      {game.difficulty}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black uppercase mb-6 group-hover:text-wf-orange transition-colors">
                    {game.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="px-4 py-2 bg-wf-dark text-white text-[10px] font-black uppercase rounded-lg group-hover:bg-wf-blue group-hover:text-wf-dark transition-all flex items-center gap-2">
                      Play <Icons.ArrowRight size={14} />
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, game.id)}
                      className="w-10 h-10 flex items-center justify-center bg-wf-white border-2 border-wf-dark rounded-lg hover:bg-wf-orange hover:text-white transition-colors"
                      title="Download HTML"
                    >
                      <Icons.Download size={16} strokeWidth={3} />
                    </button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* OTO 2 PACKAGE SECTION */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black uppercase bg-wf-purple text-white px-6 py-2 border-4 border-wf-dark shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            OTO 2 Package <span className="text-sm opacity-60 ml-2">(10 Games)</span>
          </h2>
          <div className="h-1 flex-1 bg-wf-dark"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {oto2Games.map((game, index) => {
            const IconComponent = (Icons as any)[game.icon] || Icons.Gamepad2;
            return (
              <motion.div
                key={game.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: (index + 10) * 0.05 }}
              >
                <Link 
                  to={`/game/${game.id}`}
                  className="group flex flex-col h-full brutalist-card p-6 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                      "w-14 h-14 rounded-xl border-4 border-wf-dark flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform",
                      game.color
                    )}>
                      <IconComponent size={28} strokeWidth={3} />
                    </div>
                    <div className={cn(
                      "text-[8px] font-black uppercase px-2 py-1 rounded border-2 border-wf-dark",
                      game.difficulty === 'Easy' ? 'bg-wf-green' : 
                      game.difficulty === 'Medium' ? 'bg-wf-gold' : 'bg-wf-red text-white'
                    )}>
                      {game.difficulty}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black uppercase mb-6 group-hover:text-wf-orange transition-colors">
                    {game.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="px-4 py-2 bg-wf-dark text-white text-[10px] font-black uppercase rounded-lg group-hover:bg-wf-blue group-hover:text-wf-dark transition-all flex items-center gap-2">
                      Play <Icons.ArrowRight size={14} />
                    </div>
                    <button
                      onClick={(e) => handleDownload(e, game.id)}
                      className="w-10 h-10 flex items-center justify-center bg-wf-white border-2 border-wf-dark rounded-lg hover:bg-wf-orange hover:text-white transition-colors"
                      title="Download HTML"
                    >
                      <Icons.Download size={16} strokeWidth={3} />
                    </button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <footer className="mt-24 text-center pb-12">
        <div className="inline-block brutalist-card px-8 py-4 bg-wf-white font-black uppercase">
          Built with Brutalist Energy ⚡
        </div>
      </footer>
    </div>
  );
}
