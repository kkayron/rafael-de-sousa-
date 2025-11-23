
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-[#050505]">
        <!-- Gradient Mesh -->
        <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00FFC0]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div class="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#8A2BE2]/10 rounded-full blur-[120px]"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

        <!-- Neon Particles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <!-- Manually positioned particles for lightweight effect -->
          <div class="particle w-1 h-1 bg-[#00FFC0] left-[10%] top-[90%] blur-[1px]" style="animation-duration: 12s; animation-delay: 0s;"></div>
          <div class="particle w-2 h-2 bg-[#8A2BE2] left-[20%] top-[85%] blur-[2px]" style="animation-duration: 15s; animation-delay: 2s;"></div>
          <div class="particle w-1 h-1 bg-[#00FFFF] left-[35%] top-[95%] blur-[1px]" style="animation-duration: 10s; animation-delay: 4s;"></div>
          <div class="particle w-1.5 h-1.5 bg-[#00FFC0] left-[50%] top-[80%] blur-[1px]" style="animation-duration: 18s; animation-delay: 1s;"></div>
          <div class="particle w-1 h-1 bg-[#8A2BE2] left-[70%] top-[90%] blur-[1px]" style="animation-duration: 14s; animation-delay: 5s;"></div>
          <div class="particle w-2 h-2 bg-[#00FFFF] left-[85%] top-[88%] blur-[2px]" style="animation-duration: 16s; animation-delay: 3s;"></div>
          <div class="particle w-1 h-1 bg-[#00FFC0] left-[95%] top-[92%] blur-[1px]" style="animation-duration: 13s; animation-delay: 6s;"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <!-- Tagline -->
        <div class="inline-block mb-6 animate-on-scroll">
          <span class="py-2 px-4 rounded-full border border-[#00FFC0]/30 bg-[#00FFC0]/5 text-[#00FFC0] text-sm font-semibold tracking-widest uppercase animate-float">
            Gestão de Tráfego & Estratégia
          </span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-on-scroll delay-100">
          Anúncios que <br class="md:hidden" />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC0] to-[#00FFFF] animate-gradient-x text-reveal-glow">Trabalham por Você</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-on-scroll delay-200">
          Estratégia, Dados e Criatividade para impulsionar suas vendas. 
          Sem promessas milagrosas — apenas trabalho sério, 
          análise profunda e evolução constante.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col md:flex-row gap-4 justify-center items-center animate-on-scroll delay-300">
          <a href="https://api.whatsapp.com/send/?phone=558681904699&text&type=phone_number&app_absent=0" target="_blank" class="w-full md:w-auto px-8 py-4 bg-[#00FFC0] text-black font-bold rounded hover:bg-[#00FFFF] transition-all duration-300 transform shadow-[0_0_20px_rgba(0,255,192,0.4)] neon-heartbeat flex items-center justify-center gap-2">
            <span>Falar com Rafael no WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a [routerLink]="['/']" fragment="methodology" class="w-full md:w-auto px-8 py-4 bg-transparent border border-gray-700 text-gray-300 font-medium rounded hover:border-[#00FFC0] hover:text-[#00FFC0] transition-all duration-300 cursor-pointer">
            Conhecer Metodologia
          </a>
        </div>

        <!-- Trust Indicators (Visual only, no fake numbers) -->
        <div class="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 animate-on-scroll delay-400">
           <!-- Generic Platform Icons representing expertise -->
           <div class="flex items-center gap-2 text-sm font-mono text-gray-500">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div> META ADS
           </div>
           <div class="flex items-center gap-2 text-sm font-mono text-gray-500">
              <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-75"></div> GOOGLE ADS
           </div>
           <div class="flex items-center gap-2 text-sm font-mono text-gray-500">
              <div class="w-3 h-3 bg-black border border-gray-600 rounded-full animate-pulse delay-150"></div> ANALYTICS
           </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}