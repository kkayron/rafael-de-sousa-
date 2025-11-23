
import { Component, ChangeDetectionStrategy, signal, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './components/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    // Re-trigger animations on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small timeout to allow DOM to render before checking intersection
      setTimeout(() => {
        if (isPlatformBrowser(this.platformId)) {
          this.setupIntersectionObserver();
        }
        this.isMenuOpen.set(false); // Close menu on nav
      }, 100);
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Target all elements with animation classes
    // We use a slight delay to ensure elements are in the DOM if routed
    setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll, .neon-border-scroll, .text-reveal-glow');
        elements.forEach(el => observer.observe(el));
    }, 100);
  }
}
