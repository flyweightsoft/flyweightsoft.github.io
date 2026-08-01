import { Component, ChangeDetectionStrategy, OnInit, inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-explorer-sort',
  imports: [RouterLink],
  templateUrl: './custom-explorer-sort.component.html',
  styleUrl: './custom-explorer-sort.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomExplorerSortComponent implements OnInit {
  titleService = inject(Title);
  metaService = inject(Meta);
  renderer = inject(Renderer2);
  document = inject(DOCUMENT);

  ngOnInit() {
    this.setupSeo();
  }

  setupSeo() {
    // Basic SEO
    this.titleService.setTitle('Custom Explorer Sort - VS Code Extension');
    this.metaService.updateTag({ name: 'description', content: 'Sort files and folders in VS Code\'s Explorer using a simple .order file. Respects .gitignore and adjusts mtimes safely.' });
    this.metaService.updateTag({ name: 'keywords', content: 'vscode, visual studio code, extension, custom explorer sort, file sorting, folder ordering, open source' });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: 'Custom Explorer Sort - VS Code Extension' });
    this.metaService.updateTag({ property: 'og:description', content: 'Sort files and folders in VS Code\'s Explorer using a simple .order file.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://flyweightsoft.github.io/custom-explorer-sort' });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Custom Explorer Sort - VS Code Extension' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Sort files and folders in VS Code\'s Explorer using a simple .order file.' });

    // Structured Data (JSON-LD)
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Custom Explorer Sort",
      "operatingSystem": "Windows, macOS, Linux",
      "applicationCategory": "DeveloperApplication",
      "description": "A VS Code extension to sort files and folders in the Explorer using a custom .order file.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    });
    this.renderer.appendChild(this.document.head, script);
  }
}
