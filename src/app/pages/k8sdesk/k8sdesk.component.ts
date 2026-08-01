import { Component, ChangeDetectionStrategy, signal, OnInit, inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

@Component({
  selector: 'app-k8sdesk',
  imports: [RouterLink],
  templateUrl: './k8sdesk.component.html',
  styleUrl: './k8sdesk.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class K8sdeskComponent implements OnInit {
  version = signal<string>('v1.0.5'); // fallback
  macUrl = signal<string>('https://github.com/flyweightsoft/k8sdesk/releases/download/v1.0.5/k8sdesk_0.1.0_universal.dmg');
  winUrl = signal<string>('https://github.com/flyweightsoft/k8sdesk/releases/download/v1.0.5/k8sdesk_0.1.0_x64-setup.exe');
  linuxUrl = signal<string>('https://github.com/flyweightsoft/k8sdesk/releases/download/v1.0.5/k8sdesk_0.1.0_amd64.deb');
  isLoading = signal<boolean>(true);

  screenshots = [
    { src: '/assets/k8sdesk-main.png', alt: 'k8sdesk Dashboard' },
    { src: '/assets/k8sdesk-guard.png', alt: 'k8sdesk Destructive Guard' }
  ];
  currentScreenshot = signal<number>(0);

  setScreenshot(index: number) {
    this.currentScreenshot.set(index);
  }

  prevScreenshot() {
    const current = this.currentScreenshot();
    this.currentScreenshot.set(current > 0 ? current - 1 : this.screenshots.length - 1);
  }

  nextScreenshot() {
    const current = this.currentScreenshot();
    this.currentScreenshot.set(current < this.screenshots.length - 1 ? current + 1 : 0);
  }

  titleService = inject(Title);
  metaService = inject(Meta);
  renderer = inject(Renderer2);
  document = inject(DOCUMENT);

  ngOnInit() {
    this.setupSeo();
    this.fetchLatestRelease();
  }

  setupSeo() {
    // Basic SEO
    this.titleService.setTitle('k8sdesk - Secure Kubernetes Desktop Client GUI');
    this.metaService.updateTag({ name: 'description', content: 'k8sdesk is a minimal, safe, and focused Kubernetes operations tool built to eliminate the risks of using a shared global kubectl configuration.' });
    this.metaService.updateTag({ name: 'keywords', content: 'kubernetes gui, k8s desktop client, kubectl alternative, secure kubernetes management, open source k8s client, tauri k8s' });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: 'k8sdesk - Secure Kubernetes Desktop Client' });
    this.metaService.updateTag({ property: 'og:description', content: 'A minimal, isolated, safe Kubernetes desktop client and GUI alternative to kubectl.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://flyweightsoft.github.io/assets/k8sdesk-main.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://flyweightsoft.github.io/k8sdesk' });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'k8sdesk - Secure Kubernetes Desktop Client' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'A minimal, isolated, safe Kubernetes desktop client and GUI alternative to kubectl.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://flyweightsoft.github.io/assets/k8sdesk-main.png' });

    // Structured Data (JSON-LD)
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "k8sdesk",
      "operatingSystem": "macOS, Windows, Linux",
      "applicationCategory": "DeveloperApplication",
      "description": "A minimal, safe Kubernetes desktop client and GUI alternative to kubectl. Open source and built with Tauri.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    });
    this.renderer.appendChild(this.document.head, script);
  }

  async fetchLatestRelease() {
    try {
      // Use releases instead of releases/latest because the latest release might be a pre-release
      const response = await fetch('https://api.github.com/repos/flyweightsoft/k8sdesk/releases');
      if (!response.ok) return;
      
      const releases = await response.json();
      if (releases && releases.length > 0) {
        const latest = releases[0];
        this.version.set(latest.tag_name);
        
        latest.assets.forEach((asset: ReleaseAsset) => {
          if (asset.name.endsWith('.dmg')) {
            this.macUrl.set(asset.browser_download_url);
          } else if (asset.name.endsWith('.exe')) {
            this.winUrl.set(asset.browser_download_url);
          } else if (asset.name.endsWith('.deb')) {
            this.linuxUrl.set(asset.browser_download_url);
          }
        });
      }
    } catch (e) {
      console.error('Failed to fetch latest release', e);
    } finally {
      this.isLoading.set(false);
    }
  }
}
