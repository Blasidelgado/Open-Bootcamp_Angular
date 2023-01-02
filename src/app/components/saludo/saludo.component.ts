import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges{

  constructor() {}

  @Input() nombre: string = 'Anónimo'
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>
  @Input('title') anotherTitle: string = ''

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor anterior: ', changes['nombre'].previousValue);
    console.log('Valor nuevo: ', changes['nombre'].currentValue);

  }

  ngOnDestroy(): void {
    console.log('NgOnDestoy el componente va a desaparecer');
  }

  ngOnInit(): void {
    // Instrucciones previas a la renderización del componente
    console.log("ngOnInit del componente Saludo");
  }

  /*
   * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
   */

  enviarMensajeAlPadre(): void {
    // alert(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`)
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`)
  }

}

// Orden del ciclo de vida de los componentes

// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy
