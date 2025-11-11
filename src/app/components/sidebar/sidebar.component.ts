import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonIcon
} from '@ionic/angular/standalone';
import { home, settings } from 'ionicons/icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList, RouterLink, IonIcon], 
  standalone: true
})
export class SidebarComponent implements OnInit {

  constructor() { 

    addIcons({ home, settings });
  }

  ngOnInit() {}

}
