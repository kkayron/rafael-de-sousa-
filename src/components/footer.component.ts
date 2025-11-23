
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#050505] pt-20 pb-10 border-t border-gray-900">
      <div class="container mx-auto px-6">
        
        <div class="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">
            Pronto para escalar com <br />
            <span class="text-[#00FFC0] text-reveal-glow">Segurança e Estratégia?</span>
          </h2>
          <p class="text-gray-400 mb-10 max-w-xl">
            Receba um diagnóstico gratuito do seu momento atual. Vamos conversar sobre o futuro do seu negócio.
          </p>
          
          <a href="https://api.whatsapp.com/send/?phone=558681904699&text&type=phone_number&app_absent=0" target="_blank" class="group relative px-10 py-5 bg-[#00FFC0] text-black font-bold text-xl rounded overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(0,255,192,0.3)] neon-heartbeat neon-border-scroll">
            <span class="relative z-10 flex items-center gap-3">
              FALAR COM RAFAEL AGORA
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        <div class="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {{ year }} Rafael de Sousa. Todos os direitos reservados.</p>
          <div class="flex gap-4">
             <a [routerLink]="['/privacy']" class="hover:text-[#00FFC0] cursor-pointer transition-colors">Política de Privacidade</a>
             <a [routerLink]="['/terms']" class="hover:text-[#00FFC0] cursor-pointer transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  year = new Date().getFullYear();
}