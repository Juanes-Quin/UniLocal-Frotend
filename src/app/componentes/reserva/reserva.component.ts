import { Component } from '@angular/core';
import { EmailDTO } from '../../dto/EmailDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

}
