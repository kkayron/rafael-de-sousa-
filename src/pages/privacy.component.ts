
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <section class="pt-32 pb-20 min-h-screen bg-[#050505] text-gray-300">
      <div class="container mx-auto px-6 max-w-4xl">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-8">Política de <span class="text-[#00FFC0] text-glow">Privacidade</span></h1>
        
        <div class="bg-[#0A0F1F] p-8 rounded-xl border border-gray-800 neon-border-scroll space-y-6 leading-relaxed">
          <p class="text-sm text-gray-500">Última atualização: 2024</p>
          
          <h2 class="text-xl font-bold text-white mt-4">1. Introdução</h2>
          <p>
            A sua privacidade é importante para Rafael de Sousa. Esta política explica como coletamos, usamos e protegemos suas informações ao visitar nosso site ou interagir com nossos anúncios.
          </p>

          <h2 class="text-xl font-bold text-white mt-4">2. Coleta de Dados</h2>
          <p>
            Coletamos informações que você nos fornece diretamente (como nome, e-mail e telefone ao preencher formulários ou clicar no botão de WhatsApp) e dados automáticos de navegação através de cookies e pixels de rastreamento (Meta Ads, Google Analytics).
          </p>

          <h2 class="text-xl font-bold text-white mt-4">3. Uso das Informações</h2>
          <p>
            Utilizamos seus dados para:
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Entrar em contato para agendamento de consultorias ou diagnósticos.</li>
            <li>Melhorar a experiência do usuário no site.</li>
            <li>Otimizar nossas campanhas de publicidade para mostrar conteúdo relevante.</li>
          </ul>

          <h2 class="text-xl font-bold text-white mt-4">4. Compartilhamento de Dados</h2>
          <p>
            Não vendemos seus dados pessoais. Compartilhamos informações apenas com ferramentas necessárias para a operação do negócio (como plataformas de CRM e plataformas de anúncio) ou quando exigido por lei.
          </p>

          <h2 class="text-xl font-bold text-white mt-4">5. Seus Direitos</h2>
          <p>
            Você tem o direito de solicitar o acesso, correção ou exclusão dos seus dados pessoais a qualquer momento. Para isso, entre em contato através do nosso WhatsApp oficial.
          </p>
        </div>
        
        <div class="mt-8 text-center">
            <a routerLink="/" class="text-[#00FFC0] hover:underline cursor-pointer">Voltar para a Página Inicial</a>
        </div>
      </div>
    </section>
  `
})
export class PrivacyComponent {}
