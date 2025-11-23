import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  template: `
    <section id="benefits" class="py-24 bg-black relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Gestão <span class="text-[#00FFC0] text-reveal-glow">Ética e Estratégica</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Fuja de promessas vazias. Aqui o foco é na construção sólida do seu funil de vendas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card 1 -->
          <div class="group p-6 rounded-xl bg-[#0A0F1F] neon-border-scroll hover-neon-cycle transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll delay-100 relative overflow-hidden">
            <div class="w-12 h-12 mb-4 rounded bg-[#00FFC0]/10 flex items-center justify-center text-[#00FFC0] group-hover:bg-[#00FFC0] group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_#00FFC0]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white group-hover:text-[#00FFC0] transition-colors duration-500">Análise de Dados</h3>
            <p class="text-gray-500 text-sm leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              Decisões baseadas em métricas reais, não em achismos. Monitoramento constante para otimizar seu orçamento.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="group p-6 rounded-xl bg-[#0A0F1F] neon-border-scroll hover-neon-cycle transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll delay-200 relative overflow-hidden">
            <div class="w-12 h-12 mb-4 rounded bg-[#8A2BE2]/10 flex items-center justify-center text-[#8A2BE2] group-hover:bg-[#8A2BE2] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_#8A2BE2]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white group-hover:text-[#8A2BE2] transition-colors duration-500">Estratégia Personalizada</h3>
            <p class="text-gray-500 text-sm leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              Cada negócio é único. Desenvolvo um plano específico para o seu público e seus objetivos atuais.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="group p-6 rounded-xl bg-[#0A0F1F] neon-border-scroll hover-neon-cycle transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll delay-300 relative overflow-hidden">
            <div class="w-12 h-12 mb-4 rounded bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] group-hover:bg-[#00FFFF] group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_#00FFFF]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white group-hover:text-[#00FFFF] transition-colors duration-500">Transparência Total</h3>
            <p class="text-gray-500 text-sm leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              Você saberá exatamente onde seu investimento está indo. Relatórios claros e comunicação direta.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="group p-6 rounded-xl bg-[#0A0F1F] neon-border-scroll hover-neon-cycle transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-on-scroll delay-400 relative overflow-hidden">
            <div class="w-12 h-12 mb-4 rounded bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_white]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-white group-hover:text-[#00FFC0] transition-colors duration-500">Foco em Evolução</h3>
            <p class="text-gray-500 text-sm leading-relaxed opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
              Campanhas não são estáticas. Trabalho para que seu resultado melhore consistentemente mês a mês.
            </p>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsComponent {}