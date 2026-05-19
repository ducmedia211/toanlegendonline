@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=DynaPuff:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Quicksand", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "DynaPuff", system-ui, sans-serif;
  
  --color-anime-pink: #FF3D71;
  --color-anime-blue: #00E5FF;
  --color-anime-yellow: #FFD670;
  --color-anime-purple: #7B61FF;
  --color-anime-mint: #00FF9D;
  --color-anime-bg: #0B0E14;
}

@layer base {
  body {
    @apply bg-[#0B0E14] text-slate-200 antialiased overflow-x-hidden;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(0, 229, 255, 0.03) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(123, 97, 255, 0.03) 0%, transparent 20%);
    -webkit-tap-highlight-color: transparent;
  }

  button, a {
    touch-action: manipulation;
  }
}

@layer utilities {
  .anime-card {
    @apply bg-[#151921] border-2 border-[#1E2530] shadow-[0_8px_0_0_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden;
  }
  
  .anime-gradient-pink {
    @apply bg-gradient-to-br from-[#FF3D71] to-[#FF85A2];
  }

  .anime-gradient-blue {
    @apply bg-gradient-to-br from-[#00E5FF] to-[#70D6FF];
  }

  .anime-gradient-purple {
    @apply bg-gradient-to-br from-[#7B61FF] to-[#9D81FF];
  }

  .anime-btn {
    @apply relative px-8 py-4 rounded-2xl font-bold text-white shadow-[0_4px_0_0_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-none transition-all duration-150;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-bounce-gentle {
    animation: bounceGentle 2s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes bounceGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes shake {
  10%, 90% { transform: translate3d(-2px, 0, 0); }
  20%, 80% { transform: translate3d(4px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-6px, 0, 0); }
  40%, 60% { transform: translate3d(6px, 0, 0); }
}
