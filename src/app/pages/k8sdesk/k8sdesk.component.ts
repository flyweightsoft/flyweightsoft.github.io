import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  ngOnInit() {
    this.fetchLatestRelease();
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
