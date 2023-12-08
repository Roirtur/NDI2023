import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationComponent { }
