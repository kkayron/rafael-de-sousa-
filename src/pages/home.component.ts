
import { Component } from '@angular/core';
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
    <app-hero></app-hero>
    <app-benefits></app-benefits>
    <app-problems></app-problems>
    <app-methodology></app-methodology>
    <app-about></app-about>
    <app-faq></app-faq>
  `
})
export class HomeComponent {}
