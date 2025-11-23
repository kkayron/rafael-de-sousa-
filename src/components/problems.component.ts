import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-problems',
  standalone: true,
  template: `
    <section class="py-20 bg-[#050505] relative overflow-hidden">
      <!-- Decorator -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-[#0A0F1F] to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        <div class="md:w-1/2 animate-on-scroll">
          <h2 class="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Você sente que está <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">gastando sem retorno?</span>
          </h2>
          <p class="text-gray-400 mb-6 text-lg">
            Muitos empreendedores caem na armadilha de apenas "impulsionar" sem uma estratégia clara. Isso resulta em orçamento desperdiçado e frustração.
          </p>
          
          <ul class="space-y-4">
            <li class="flex items-start gap-3 animate-on-scroll delay-100">
              <span class="text-red-500 mt-1">✕</span>
              <span class="text-gray-300">Anúncios para o público errado.</span>
            </li>
            <li class="flex items-start gap-3 animate-on-scroll delay-200">
              <span class="text-red-500 mt-1">✕</span>
              <span class="text-gray-300">Falta de clareza sobre qual criativo funciona.</span>
            </li>
            <li class="flex items-start gap-3 animate-on-scroll delay-300">
              <span class="text-red-500 mt-1">✕</span>
              <span class="text-gray-300">Vendas instáveis e imprevisíveis.</span>
            </li>
            <li class="flex items-start gap-3 animate-on-scroll delay-400">
              <span class="text-red-500 mt-1">✕</span>
              <span class="text-gray-300">Medo de escalar o investimento e perder dinheiro.</span>
            </li>
          </ul>

          <div class="mt-8 animate-on-scroll delay-500">
            <p class="text-[#00FFC0] font-medium mb-4 text-reveal-glow">Eu resolvo isso trazendo organização e método.</p>
          </div>
        </div>

        <div class="md:w-1/2 animate-on-scroll delay-200">
           <!-- Abstract Graphic representing Chaos vs Order -->
           <div class="relative w-full aspect-square max-w-md mx-auto bg-[#0A0F1F] rounded-2xl neon-border-scroll p-8 flex flex-col justify-center items-center shadow-2xl">
             <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00FFC0]/5 to-transparent rounded-2xl"></div>
             
             <!-- Animated Bar Chart Representation -->
             <div class="flex items-end gap-4 h-48 w-full max-w-[300px] justify-between">
                <div class="w-8 bg-gray-700 h-[30%] rounded-t-md relative overflow-hidden group">
                  <div class="absolute inset-0 bg-red-500/20"></div>
                </div>
                <div class="w-8 bg-gray-700 h-[45%] rounded-t-md relative overflow-hidden">
                   <div class="absolute inset-0 bg-red-500/20"></div>
                </div>
                <div class="w-8 bg-[#00FFC0] h-[60%] rounded-t-md relative shadow-[0_0_15px_#00FFC0]">
                   <div class="absolute bottom-0 left-0 right-0 h-full animate-pulse opacity-50 bg-white/20"></div>
                </div>
                <div class="w-8 bg-[#00FFC0] h-[75%] rounded-t-md relative shadow-[0_0_15px_#00FFC0]"></div>
                <div class="w-8 bg-[#00FFC0] h-[90%] rounded-t-md relative shadow-[0_0_15px_#00FFC0]"></div>
             </div>
             
             <div class="mt-8 text-center">
               <span class="text-xs font-mono text-gray-500 uppercase tracking-widest">Evolução Constante</span>
               <div class="h-1 w-full bg-gray-800 mt-2 rounded-full overflow-hidden">
                 <div class="h-full bg-[#00FFC0] w-[80%] rounded-full shadow-[0_0_10px_#00FFC0]"></div>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProblemsComponent {}