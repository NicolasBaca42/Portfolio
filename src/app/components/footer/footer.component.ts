/*import { Component } from '@angular/core';*/
import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';// realizar la importacion luego de instalar el paquete nop
//declare let $: any;
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
/*export class FooterComponent {

}*/
export class FooterComponent implements AfterViewInit { // implematar la interface AfterViewInit


  ngAfterViewInit(): void {
    document.getElementById('jumbotron') as HTMLElement;

   
    const options = {
      strings: ['Baca Sergio Nicolas'],
      typeSpeed: 70,
      backSpeed: 50,
      smartBackspace: false,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed('.typed', options);
  }

}


