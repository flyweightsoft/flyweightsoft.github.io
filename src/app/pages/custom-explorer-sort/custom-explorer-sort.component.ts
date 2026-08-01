import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-explorer-sort',
  imports: [RouterLink],
  templateUrl: './custom-explorer-sort.component.html',
  styleUrl: './custom-explorer-sort.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomExplorerSortComponent {}
