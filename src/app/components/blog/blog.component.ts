import { Component } from '@angular/core';
import { Inoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  noticias: Inoticia[] = [
    {
      titulo: 'El Gobierno de Bolivia asegura que el golpe de Estado estaba planificado desde mayo y detiene a 17 implicados',
      imagen: 'https://img2.rtve.es/i/?w=1600&i=01719514354806.jpg',
      texto: 'Menos de 24 horas después del intento de golpe de Estado perpetrado en Bolivia por el ex comandante general Juan José Zúñiga, el Gobierno ha informado que la asonada estaba planificada desde el mes de mayo, según las primeras investigaciones. El ministro de Gobierno, Carlos Eduardo del Castillo, ha explicado en una comparecencia desde La Paz que han logrado detener a 17 personas implicadas en la "comisión de la intentona", si bien todavía buscan a otros tres militares involucrados.',
      fecha: '2024-06-27',
    },
    {
      titulo: 'Eurocopa 2024: los 26 jugadores de Georgia, rival de España en octavos de final, uno por uno',
      imagen: 'https://img2.rtve.es/i/?w=1600&i=01719484731489.jpg',
      texto: 'La selección de Georgia es el rival de España en los octavos de final de la Eurocopa 2024 tras su victoria (2-0) ante Portugal, líder del Grupo E, que le ha permitido superar la fase de grupos en su debut en un torneo de la máxima categoría, ya que hasta la fecha no había disputado ni una Eurocopa ni una Copa del Mundo.',
      fecha: '2024-06-27',
    },
  ];

  newNoticia: Inoticia = { titulo: '', imagen: '', texto: '', fecha: '' };

  ngOnInit() {
    this.mostrarNoticias();
  }

  agregarNoticia() {
    if (this.newNoticia.titulo && this.newNoticia.imagen && this.newNoticia.texto && this.newNoticia.fecha) {
      this.noticias.push({ ...this.newNoticia });
      this.newNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
      this.mostrarNoticias();
    } else {
      alert('Todos los campos son obligatorios.');
    }
  }

  mostrarNoticias() {
    const container = document.getElementById('noticiasContainer');
    if (container) {
      container.innerHTML = '';
      this.noticias.forEach(noticia => {
        container.innerHTML += `
          <div>
            <h3>${noticia.titulo}</h3>
            <img src="${noticia.imagen}" alt=${noticia.titulo}>
            <p>${noticia.texto}</p>
            <p>${noticia.fecha}</p>
          </div>
        `;
      });
    }
  }
}
