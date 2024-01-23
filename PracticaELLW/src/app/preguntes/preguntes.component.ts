import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaService } from '../pregunta.service';

@Component({
  selector: 'app-preguntes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntes.component.html',
  styleUrl: './preguntes.component.css'
})
export class PreguntesComponent implements OnInit {
  categories: string[] = ['Totes', 'Busqueda', 'Titol', 'Genere', 'Contacte', 'Mangues'];
  categoriaSeleccionado: string = 'Totes';
  preguntes : any[] = [];

  constructor(private preguntaService: PreguntaService) { }

  ngOnInit(): void {
      this.actualizarPreguntes();
    }



  async actualizarPreguntes(): Promise<void> {
    try {
      if (this.categoriaSeleccionado === 'Totes') {
        this.preguntes = await this.preguntaService.getPreguntes();
      } else {
        this.preguntes = await this.preguntaService.getPreguntaDataByCategories(this.categoriaSeleccionado);
      }
    } catch (error) {
      console.error(error);
    }
  }



  cambiarCategoria(event: Event, categories: string): void {
    event.preventDefault();
    this.categoriaSeleccionado = categories;
    this.actualizarPreguntes();
  }

}
