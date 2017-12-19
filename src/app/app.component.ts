import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  itemData = [
    { image: '/assets/images/home/slide1.jpg', title: 'Location1'}, 
    { image: '/assets/images/home/slide2.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum at mauris in fermentum. Curabitur eu dapibus sapien. Maecenas quis hendrerit elit.'},
    { image: '/assets/images/home/slide3.jpg', title: 'Location3', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum at mauris in fermentum. Curabitur eu dapibus sapien. Maecenas quis hendrerit elit.'},
    { image: '/assets/images/home/slide4.jpg', title: 'Location4'},
    { image: '/assets/images/home/slide5.jpg', title: 'Location5'},
    { image: '/assets/images/home/slide1.jpg', title: 'Location6'},
    { image: '/assets/images/home/slide3.jpg', title: 'Location7'},
    { image: '/assets/images/home/slide4.jpg', title: 'Location8'},
    { image: '/assets/images/home/slide5.jpg', title: 'Location9'},
    { image: '/assets/images/home/slide1.jpg', title: 'Location10'},
    { image: '/assets/images/home/slide1.jpg', title: 'Location11'},
    { image: '/assets/images/home/slide3.jpg', title: 'Location12'},
    { image: '/assets/images/home/slide4.jpg', title: 'Location13'},
    { image: '/assets/images/home/slide5.jpg', title: 'Location14'},
    { image: '/assets/images/home/slide1.jpg', title: 'Location15'}
  ];
}
