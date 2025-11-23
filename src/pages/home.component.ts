
import { Component, OnInit, signal } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { BenefitsComponent } from '../components/benefits.component';
import { ProblemsComponent } from '../components/problems.component';
import { MethodologyComponent } from '../components/methodology.component';
import { AboutComponent } from '../components/about.component';
import { FaqComponent } from '../components/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BenefitsComponent,
    ProblemsComponent,
    MethodologyComponent,
    AboutComponent,
    FaqComponent
  ],
  template: `
    <!-- O Hero sempre fica no topo para manter o contexto inicial -->
    <app-hero></app-hero>

    <!-- As outras seções são renderizadas em ordem aleatória -->
    @for (section of sectionOrder(); track section) {
      @if (section === 'benefits') { <app-benefits></app-benefits> }
      @if (section === 'problems') { <app-problems></app-problems> }
      @if (section === 'methodology') { <app-methodology></app-methodology> }
      @if (section === 'about') { <app-about></app-about> }
      @if (section === 'faq') { <app-faq></app-faq> }
    }
  `
})
export class HomeComponent implements OnInit {
  // Lista inicial das seções
  sectionOrder = signal<string[]>(['benefits', 'problems', 'methodology', 'about', 'faq']);

  ngOnInit() {
    this.randomizeSections();
  }

  randomizeSections() {
    const sections = ['benefits', 'problems', 'methodology', 'about', 'faq'];
    
    // Algoritmo Fisher-Yates para embaralhamento robusto
    for (let i = sections.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sections[i], sections[j]] = [sections[j], sections[i]];
    }

    this.sectionOrder.set(sections);
  }
}
