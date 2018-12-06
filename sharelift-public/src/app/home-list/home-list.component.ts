import { Component, OnInit } from '@angular/core';

export class Journey {
  _id: string;
  name: string;
  address: string;
  rating: number;
  departure: string;
  destination: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }
  journeys: Journey[] = [{
    _id: '5a0ecd39c9ef585ea93cbc2b',
    name: 'Kenneth Malon',
    address: '1605 Park Court, Killarney, Co.Kerry',
    rating: 4,
    departure: 'Killarney',
    destination: 'Tralee',
    date: '21 October 2018',
    time: '8:00am',
  },
    {
  _id: '5a0ecd39c9ef585ea93cbc2bc',
  name: 'Joe Bloggs',
  address: '16 New Street, Tralee, Co.Kerry',
  rating: 4,
  departure: 'Tralee',
  destination: 'Killarney',
  date: '29 October 2018',
  time: '8:00am',

}];

  ngOnInit() {
  }

}
