
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <section class="pt-32 pb-20 min-h-screen bg-[#050505] text-gray-300">
      <div class="container mx-auto px-6 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-8">Termos de <span class="text-[#8A2BE2] text-glow">Uso</span></h1>
        
        <div class="bg-[#0A0F1F] p-8 rounded-xl border border-gray-800 neon-border-scroll space-y-6 leading-relaxed">
          <p class="text-sm text-gray-500">Última atualização: 2024</p>
          
          <h2 class="text-xl font-bold text-white mt-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site de Rafael de Sousa, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
          </p>

          <h2 class="text-xl font-bold text-white mt-4">2. Uso do Site</h2>
          <p>
            O conteúdo deste site é para fins informativos sobre serviços de Gestão de Tráfego. É proibido o uso do site para fins ilegais ou não autorizados.
          </p>

          <h2 class="text-xl font-bold text-white mt-4">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, design, gráficos e textos apresentados neste site são de propriedade de Rafael de Sousa ou licenciados para uso. A reprodução total ou parcial sem autorização expressa é proibida.
          </p>

          <h2 class="text-xl font-bold text-white mt-4">4. Limitação de Responsabilidade</h2>
          <p>
            Embora nos esforcemos para manter as informações atualizadas e corretas, não garantimos resultados específicos de faturamento em campanhas de tráfego, pois estes dependem de múltiplos fatores externos ao nosso controle.
          </p>

          <h2 class="text-xl font-bold text-white mt-4">5. Alterações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso contínuo do site após as alterações constitui aceitação dos novos termos.
          </p>
        </div>

        <div class="mt-8 text-center">
            <a routerLink="/" class="text-[#8A2BE2] hover:underline cursor-pointer">Voltar para a Página Inicial</a>
        </div>
      </div>
    </section>
  `
})
export class TermsComponent {}
