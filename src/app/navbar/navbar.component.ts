import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit() {

    jQuery('.classic-navigation').fadeOut(0);

    jQuery(document).on('scroll', function(){
      const scrollPos = jQuery(this).scrollTop() || 0;
      if (scrollPos < (jQuery('.navigation-container').height() || 0)) {
        jQuery('.navigation-corner,.navigation-title').css({
          'margin-left' : - scrollPos*2 + "px",
        });
        jQuery('.navigation-buttons').css({
          'margin-top' : - scrollPos + "px",
        });
      } 
      
      if (scrollPos < (jQuery('.navigation-container').height() || 0) - 700){
        jQuery('.classic-navigation').fadeOut(300);
      }
      else {
        jQuery('.classic-navigation').fadeIn(300);
      }
    });  

  }
}
