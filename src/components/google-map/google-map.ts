import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map:any;

  constructor() {
    
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){
    let coords = new google.maps.LatLng(3.353940, -76.519340);
    let mapOptions = google.maps.MapOptions = {
      center: coords,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
