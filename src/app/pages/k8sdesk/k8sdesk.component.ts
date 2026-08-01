import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-k8sdesk',
  imports: [RouterLink],
  templateUrl: './k8sdesk.component.html',
  styleUrl: './k8sdesk.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class K8sdeskComponent {}
