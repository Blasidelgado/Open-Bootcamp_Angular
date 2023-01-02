import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*   template:
    '<h1>hola mundo</h1>', */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@blasidelgado'

  /**
   * Esta funcion se ejecutará cuando en el Hijo (Saludo Component) se pulse un botón
   * @param evento
   */
  recibirMensajeDelHijo(evento: string) {
    alert(evento)
  }

}
