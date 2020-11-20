import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'detalle-campana',
    templateUrl: './detalleCampana.component.html',
    styleUrls: ['./detalleCampana.component.css'],
})
export class DetalleCampana {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


    public campaignUpdateId;
    public campaignId;

    public originalCampaign = undefined;
    public lastCampaignUpdate = undefined;
    
    public categoriesUpdate = [];
    public categoriesOriginal = [];
    public zone;
    public params;

    constructor(
    private firestoreService: FireBaseService,
    public router: Router, 
    public route: ActivatedRoute,
  ) { }

   getRouteParams(): void {
       console.log('aca');
        this.route.queryParams.subscribe(params => {
        this.params = params
    });    

        this.campaignId = this.params.camp.replace("\"","");   
        this.campaignId = this.campaignId.toString().substring(0,this.campaignId.length-1)
// this.campaignUpdateId = this.params.upd;
//  this.campaignUpdateId = this.params.upd.replace("\"","");   
//  this.campaignUpdateId = this.campaignUpdateId.toString().substring(0,this.campaignUpdateId.length-1)

    console.log("this.campaignId", this.campaignId);
  }

   ngOnInit(): void {
       console.log('aqui');
        this.getRouteParams();
   // this.getLastCampaignUpdateById(JSON.parse(this.params.upd));
        this.getOriginalCampaignById(JSON.parse(this.params.camp));
  }

  getOriginalCampaignById(campaignId) {
    this.firestoreService.getOriginalCampaignById(campaignId).subscribe((campaignSnapshot) => {
    this.originalCampaign = campaignSnapshot.payload.data();
   // this.categoriesOriginal = campaignSnapshot.payload.data()['categories']

    // console.log("this.categoriesOriginal", this.categoriesOriginal)
     console.log("this.originalCampaign", this.originalCampaign);

    }, (error) => {
      console.log(error)
    });
  }

//   getLastCampaignUpdateById(campaignUpdateId) {
//     this.firestoreService.getLastCampaignUpdateById(campaignUpdateId).subscribe((campaignUpdateSnapshot) => {
//     this.lastCampaignUpdate = campaignUpdateSnapshot.payload.data();
//     this.categoriesUpdate = campaignUpdateSnapshot.payload.data()['categories']

//     console.log("this.lastCampaignUpdate", this.lastCampaignUpdate)
//     console.log("this.categoriesUpdate", this.categoriesUpdate)
    
//     }, (error) => {
//       console.log(error);
//     });
//   }




}