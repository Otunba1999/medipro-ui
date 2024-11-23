import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {expandContrast, slideIn} from "../../../animations/slide";

@Component({
  selector: 'app-spec',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './spec.component.html',
  styleUrl: './spec.component.scss',
  animations: [slideIn, expandContrast]
})
export class SpecComponent {
  private _specs: {icon:string, title:string}[] = [
    {icon: 'fa-solid fa-bed', title: 'Operation Theater'},
    {icon: 'fa-solid fa-truck-medical', title: 'Emergency Services'},
    {icon: 'fa-solid fa-kit-medical', title: 'Rehabilitation Center'},
    {icon: 'fa-solid fa-user-doctor', title: 'Qualified Doctor'},
  ];
  private _services: { title:string, subTitle:string, image:string }[] = [
    {title: 'Medical Surgery', subTitle:'Abuja Medical Science Institute' , image: 'assets/images/services/services-img2.jpg' },
    {title: 'Department', subTitle: 'Medical Guide Department', image: 'assets/images/services/services-img3.jpg' },
    {title: 'Patient Life', subTitle: 'Patient Life In Hospital', image: 'assets/images/services/services-img1.jpg' },
    {title:'Baby Birth' , subTitle: 'Latest Technology', image: 'assets/images/services/services-img4.jpg' },
  ];
  private _members: {image:string, name:string, title:string}[] = [
    {image:'assets/images/members/team-member1.jpg', name: 'Dr Andrew Bert', title: 'Outpatient Surgery'},
    {image:'assets/images/members/team-member2.jpg', name: 'Dr Sara Stefon', title: 'Cardiologist'},
    {image:'assets/images/members/team-member3.jpg', name: 'Dr Wahab Apple', title: 'Heart Specialist'},
  ];
  currentServiceIndex: number = 0;
  showOptions: boolean = false;
  showContact: boolean = false;
  contactIndex : null|number = null;
  get specs(){
    return this._specs;
  }
  get services(){
    return this._services;
  }

  get members(){
    return this._members;
  }
  onShowOptions() {
    this.showOptions = !this.showOptions;
  }

  changeService(index: number) {
    this.showOptions = !this.showOptions;
    this.currentServiceIndex = index;
  }

  onShowContacts(index: number) {
    this.contactIndex = index;
    this.showContact = !this.showContact;
  }
}
