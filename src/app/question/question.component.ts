import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: false,
        margin:30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        dots: true,
        autoplayHoverPause: false,
        items: 1,
        navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      });
    })
  }

}
