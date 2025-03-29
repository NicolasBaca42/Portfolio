import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';// realizar la importacion luego de instalar el paquete nop
//declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit { // implematar la interface AfterViewInit


  ngAfterViewInit(): void {
    document.getElementById('jumbotron') as HTMLElement;

   
    const options = {
      strings: ['SOFTWARE DEVELOPER'],
      typeSpeed: 70,
      backSpeed: 50,
      smartBackspace: false,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed('.typed', options);
  }

}

