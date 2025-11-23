import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-methodology',
  standalone: true,
  template: `
    <section id="methodology" class="py-24 bg-black relative">
      <!-- Neon Line Background -->
      <div class="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#00FFC0]/30 to-transparent hidden md:block"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-on-scroll">
          <span class="text-[#8A2BE2] font-mono text-sm tracking-wider uppercase">O Processo</span>
          <h2 class="text-3xl md:text-5xl font-bold mt-2 mb-6">Método <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC0] to-[#8A2BE2] text-reveal-glow">ADS PRO</span></h2>
          <p class="text-gray-400">Um ciclo contínuo de melhoria e aprendizado.</p>
        </div>

        <div class="space-y-12 relative">
          
          <!-- Step 1 -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 animate-on-scroll delay-100">
            <div class="md:w-5/12 text-right md:pr-8">
              <h3 class="text-2xl font-bold text-white mb-2">1. Diagnóstico</h3>
              <p class="text-gray-400">Entendo seu momento atual, seu histórico e seus objetivos. Não começamos nada sem saber onde estamos pisando.</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-[#00FFC0] flex items-center justify-center text-black font-bold z-10 shadow-[0_0_20px_#00FFC0]">01</div>
            <div class="md:w-5/12 md:pl-8 opacity-50 hidden md:block">
              <!-- Empty spacer for visual balance -->
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 md:flex-row-reverse animate-on-scroll delay-200">
            <div class="md:w-5/12 text-left md:pl-8">
              <h3 class="text-2xl font-bold text-white mb-2">2. Planejamento</h3>
              <p class="text-gray-400">Definição de orçamento, canais (Meta/Google) e estrutura de funil. Tudo alinhado com a realidade do seu caixa.</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-[#8A2BE2] flex items-center justify-center text-white font-bold z-10 shadow-[0_0_20px_#8A2BE2]">02</div>
            <div class="md:w-5/12 md:pr-8 hidden md:block"></div>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 animate-on-scroll delay-300">
            <div class="md:w-5/12 text-right md:pr-8">
              <h3 class="text-2xl font-bold text-white mb-2">3. Construção & Ativação</h3>
              <p class="text-gray-400">Criação das campanhas, configuração de pixels e tags de conversão. Subimos os anúncios com segurança.</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-[#00FFFF] flex items-center justify-center text-black font-bold z-10 shadow-[0_0_20px_#00FFFF]">03</div>
            <div class="md:w-5/12 md:pl-8 hidden md:block"></div>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 md:flex-row-reverse animate-on-scroll delay-400">
            <div class="md:w-5/12 text-left md:pl-8">
              <h3 class="text-2xl font-bold text-white mb-2">4. Análise & Evolução</h3>
              <p class="text-gray-400">O trabalho real começa aqui. Monitoramos o que funciona, cortamos o que gasta e escalamos o que vende.</p>
            </div>
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold z-10 shadow-[0_0_20px_white]">04</div>
            <div class="md:w-5/12 md:pr-8 hidden md:block"></div>
          </div>

        </div>

        <div class="mt-20 text-center animate-on-scroll delay-500">
          <a href="https://api.whatsapp.com/send/?phone=558681904699&text&type=phone_number&app_absent=0" target="_blank" class="inline-block px-10 py-4 border border-[#00FFC0] text-[#00FFC0] hover:bg-[#00FFC0] hover:text-black font-bold text-lg rounded transition-all duration-300 shadow-[0_0_10px_rgba(0,255,192,0.1)] hover:shadow-[0_0_30px_rgba(0,255,192,0.4)]">
            Aplicar Método no Meu Negócio
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodologyComponent {}