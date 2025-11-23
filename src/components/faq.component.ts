import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section id="faq" class="py-20 bg-black">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

        <div class="space-y-4">
          @for (item of faqItems; track $index) {
            <div class="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300" 
                 [class.border-[#00FFC0]]="openIndex() === $index">
              
              <button (click)="toggle($index)" class="w-full p-6 text-left flex justify-between items-center bg-[#050505] hover:bg-[#0A0F1F] transition-colors focus:outline-none">
                <span class="font-medium text-lg" [class.text-[#00FFC0]]="openIndex() === $index">{{ item.question }}</span>
                <span class="text-2xl text-[#00FFC0] transition-transform duration-300" [class.rotate-180]="openIndex() === $index">
                  ▼
                </span>
              </button>

              @if (openIndex() === $index) {
                <div class="p-6 bg-[#0A0F1F] text-gray-300 leading-relaxed border-t border-gray-800 animate-fade-in">
                  {{ item.answer }}
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  openIndex = signal<number | null>(null);

  faqItems = [
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Essa é a pergunta mais honesta que posso responder: depende. O tráfego pago é um acelerador. Se sua oferta já valida, os resultados podem ser rápidos (semanas). Se estamos testando um produto novo ou público novo, precisamos de um período de maturação (aprendizado) das campanhas. Geralmente, trabalhamos com ciclos de 30 a 90 dias para consolidação."
    },
    {
      question: "Quanto preciso investir?",
      answer: "Não existe um valor fixo, mas existe um mínimo viável para que as plataformas (Facebook/Google) consigam trabalhar. Recomendo um orçamento que permita testes sem comprometer o fluxo de caixa da sua empresa. Durante nossa reunião de diagnóstico, definiremos juntos um valor seguro para começar."
    },
    {
      question: "Você garante vendas?",
      answer: "Nenhum gestor sério pode garantir vendas, pois a venda depende também do seu atendimento, do seu preço, do seu site e do seu produto. Eu garanto a estratégia: levar as pessoas certas, no momento certo, para a sua oferta. O tráfego é 50% do processo; os outros 50% são a sua estrutura comercial."
    },
    {
      question: "Como recebo os relatórios?",
      answer: "Prezo pela transparência. Você terá acesso às informações das campanhas e faremos reuniões periódicas (geralmente mensais ou quinzenais, dependendo do plano) para alinhar expectativas e mostrar o que foi feito, quanto foi gasto e qual foi o retorno."
    }
  ];

  toggle(index: number) {
    this.openIndex.update(current => current === index ? null : index);
  }
}