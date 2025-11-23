
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 bg-[#0A0F1F] border-y border-gray-900">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          
          <!-- Image Placeholder (Neon Frame) -->
          <div class="w-full md:w-1/3 flex justify-center animate-on-scroll">
            <!-- Ajustado para formato Retrato (Vertical) para caber o rosto completo sem cortes bruscos -->
            <div class="relative w-72 h-96 md:w-80 md:h-[30rem] neon-border-scroll rounded-2xl group cursor-pointer">
              <!-- Animated Neon Borders -->
              <div class="absolute inset-0 border-2 border-[#00FFC0] rounded-2xl transform rotate-6 opacity-50 group-hover:rotate-12 group-hover:scale-105 transition-all duration-500"></div>
              <div class="absolute inset-0 border-2 border-[#8A2BE2] rounded-2xl transform -rotate-6 opacity-50 group-hover:-rotate-12 group-hover:scale-105 transition-all duration-500 delay-75"></div>
              
              <!-- Image Container -->
              <div class="absolute inset-0 bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden z-10 shadow-2xl">
                <!-- FOTO DO RAFAEL -->
                <!-- Usa object-center para focar no rosto e removemos cortes excessivos -->
                <img [src]="imgSrc()" 
                     (error)="handleImageError()"
                     alt="Rafael de Sousa - Gestor de Tráfego" 
                     class="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                
                <!-- Overlay reduzido para melhor visibilidade do rosto -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-transparent to-transparent opacity-20"></div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-2/3 text-left animate-on-scroll delay-200">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
              Mais do que apertar botões, <br />
              <span class="text-[#00FFC0] text-reveal-glow">Gestão de Negócios.</span>
            </h2>
            
            <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Sou gestor de tráfego comprometido com uma única coisa: 
                <strong class="text-white">trabalhar com responsabilidade, clareza e estratégia.</strong>
              </p>
              <p>
                No mercado digital, é comum ver promessas de "resultados garantidos" ou "ROI de 10x em uma semana". 
                Eu não trabalho assim. Eu prometo análise técnica, transparência total nos dados e dedicação absoluta para fazer seu negócio crescer de forma saudável.
              </p>
              <p>
                Meu foco é aprender sobre o seu produto, testar hipóteses e encontrar o caminho mais lucrativo para sua escala.
              </p>
            </div>

            <div class="mt-8 flex flex-wrap gap-4">
              <span class="px-4 py-2 bg-black border border-gray-800 rounded text-sm text-gray-300 neon-border-scroll hover:border-[#00FFC0] hover:text-[#00FFC0] transition-colors cursor-default">Google Ads</span>
              <span class="px-4 py-2 bg-black border border-gray-800 rounded text-sm text-gray-300 neon-border-scroll hover:border-[#00FFC0] hover:text-[#00FFC0] transition-colors cursor-default delay-100">Meta Ads</span>
              <span class="px-4 py-2 bg-black border border-gray-800 rounded text-sm text-gray-300 neon-border-scroll hover:border-[#00FFC0] hover:text-[#00FFC0] transition-colors cursor-default delay-200">Google Analytics 4</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  // Link da imagem formatado para thumbnail de alta qualidade (sz=w1000)
  imgSrc = signal('https://drive.google.com/thumbnail?id=1Dl6-vyApeg3nxG5HYb40i7BSES_YgjHq&sz=w1000');

  handleImageError() {
    // Fallback seguro caso a imagem do Drive falhe (ex: permissão privada)
    // Substitui por uma imagem genérica profissional temporária
    this.imgSrc.set('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
    console.warn('Não foi possível carregar a foto do Google Drive. Verifique se o arquivo está marcado como "Qualquer pessoa com o link".');
  }
}
