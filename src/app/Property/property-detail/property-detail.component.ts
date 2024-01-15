import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { HousingService } from 'src/app/Services/housing.service';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
  galleryImages: any[];
  
    constructor(private route: ActivatedRoute,
                private router: Router,
                private housingService: HousingService) { }
  
    ngOnInit() {
      this.propertyId = +this.route.snapshot.params['id'];
    //We can use + on a place of Number given below to TypeCast the value as this is in a String (Changing it to integer)
    //this.propertyId = Number(this.route.snapshot.params['id']);
      this.route.data.subscribe(
        (data: Property) => {
          this.property = data['prp'];
        }
      );
  
      //Using pagination, initially id was getting changed in the url only but not in the component so to have this feature, write the below code
      // this.route.params.subscribe(
      //   (params) => {
      //     this.propertyId = +params['id']; //Now id is getting changed in url and component as well using pagination
        //Adding Housing service to get the Data dynamically from Local Storage in Property-Details
      //     this.housingService.getProperty(this.propertyId).subscribe(
        //Assigning data of type Property where we have already declared the Property file separately
      //       (data: Property) => {
      //         this.property = data;
      //       }, error => this.router.navigate(['/'])
      //     );
      //   }
      // );
  

      // this.galleryOptions = [
      //   {
      //     width: '100%',
      //     height: '465px',
      //     thumbnailsColumns: 4,
      //     imageAnimation: NgxGalleryAnimation.Slide,
      //     preview: true
      //   }
      // ];
  
      this.galleryImages = [
        {
          small: 'assets/images/internal-1.jpg',
          medium: 'assets/images/internal-1.jpg',
          big: 'assets/images/internal-1.jpg'
        },
        {
          small: 'assets/images/internal-2.jpg',
          medium: 'assets/images/internal-2.jpg',
          big: 'assets/images/internal-2.jpg'
        },
        {
          small: 'assets/images/internal-3.jpg',
          medium: 'assets/images/internal-3.jpg',
          big: 'assets/images/internal-3.jpg'
        },
        {
          small: 'assets/images/internal-5.jpg',
          medium: 'assets/images/internal-5.jpg',
          big: 'assets/images/internal-5.jpg'
        }
      ];
  
  
    }
  }