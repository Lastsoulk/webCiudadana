import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../services/auth.service';

/**
 * @title Card with multiple sections
 */



interface Ciudad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css'],
})
export class Campana {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  myArray: any[] = []
  public dataSource = new MatTableDataSource<Campana>();
  public dataSource2 = new MatTableDataSource<Campana>();

  public campaigns = [];
  public campaigns2 = [];
  public categories = [];

  constructor(
    private firestore: AngularFirestore,
    private firestoreService: FireBaseService,
    public router: Router,
    private AuthService: AuthService,

  ) {

  }

  // getCampaigns(): void {
  //     this.firestore
  //         .collection("campaignsUpdates")
  //         .get()
  //         .subscribe((ss) => {
  //             ss.docs.forEach((doc) => {
  //                 this.myArray.push(doc.data());
  //             });
  //         });
  // }

  getCampaigns(): void {
    this.firestoreService.getCampanasActivas().subscribe((campaignsSnapshot) => {
      this.campaigns = [];
      this.categories = [];
      campaignsSnapshot.forEach((campaign: any) => {
        this.campaigns.push({
          campaignInfo: campaign.payload.doc.data(),
          campaignPic: campaign.payload.doc.data().campaignPic,
          category: campaign.payload.doc.data().categories,
          campaignId: campaign.payload.doc.data().campaignId,
          campaignUpdateId: campaign.payload.doc.id,
          name: campaign.payload.doc.data().name,
          description: campaign.payload.doc.data().description,
          promoter: campaign.payload.doc.data().promoter,
          categories: campaign.payload.doc.data().categories,
          dateStart: campaign.payload.doc.data().dateStart,
          numFollowers: campaign.payload.doc.data().numFollowers,
          state: campaign.payload.doc.data().state,
          //state: this.stateToStringGlobal(campaign.payload.doc.data().state),

        });
      });
      //console.log("this.campaigns", this.campaigns);
      // this.dataSource.data = this.campaigns as Campaign[];
    }, (error) => {
      console.log("Error al cargar las campañas", error)
    });
  }

  getCampaignsUser(username): void {
    this.firestoreService.getCampanasActivas().subscribe((campaignsSnapshot) => {
      this.campaigns2 = [];
      this.categories = [];
      campaignsSnapshot.forEach((campaign: any) => {
        if (username == campaign.payload.doc.data().promoter.name) {
          this.campaigns2.push({
            campaignInfo: campaign.payload.doc.data(),
            campaignPic: campaign.payload.doc.data().campaignPic,
            category: campaign.payload.doc.data().categories,
            campaignId: campaign.payload.doc.data().campaignId,
            campaignUpdateId: campaign.payload.doc.id,
            name: campaign.payload.doc.data().name,
            description: campaign.payload.doc.data().description,
            promoter: campaign.payload.doc.data().promoter,
            categories: campaign.payload.doc.data().categories,
            dateStart: campaign.payload.doc.data().dateStart,
            numFollowers: campaign.payload.doc.data().numFollowers,
            state: campaign.payload.doc.data().state,
            //state: this.stateToStringGlobal(campaign.payload.doc.data().state),
          });
        }

      });
      console.log("this.campaigns", this.campaigns2);
      // this.dataSource.data = this.campaigns as Campaign[];
    }, (error) => {
      console.log("Error al cargar las campañas", error)
    });
  }

  async ngOnInit() {
    const user = await this.AuthService.getCurrentUser();
    //console.log(user.displayName);

    this.getCampaignsUser(user.displayName);

    this.getCampaigns();

    // this.firestore
    //         .collection("campaigns")
    //         .get()
    //         .subscribe((ss) => {
    //             ss.docs.forEach((doc) => {
    //                 this.myArray.push(doc.data());
    //             });
    //         });

    this.dataSource2.filterPredicate = (data: Campana, filter: string): boolean => {
      const dataStr2 = Object.keys(data).reduce((currentTerm: string, key: string) => {
        //console.log((data as { [key: string]: any })[key]);
        return (currentTerm + (data as { [key: string]: any })[key]);
      }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      return dataStr2.indexOf(transformedFilter) != -1;
    }

    this.dataSource.filterPredicate = (data: Campana, filter: string): boolean => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        //console.log((data as { [key: string]: any })[key]);
        return (currentTerm + (data as { [key: string]: any })[key]);
      }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      return dataStr.indexOf(transformedFilter) != -1;
    }
  }


  redirectCampaignDetail(value) {
    let campaignId = value.campaignId;
    //  console.log("aqui abajo",bandera)


    let navigationExtras: NavigationExtras = {
      queryParams: {
        "camp": JSON.stringify(campaignId),
        "misCampanas": false,
        // "estadoNegado": bandera,

      }
    };
    this.router.navigate(["detalleCampana"], navigationExtras);




  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ciudades: Ciudad[] = [
    { value: 'ciudad-0', viewValue: 'Guayaquil' },
    { value: 'ciudad-1', viewValue: 'Quito' },
    { value: 'ciudad-2', viewValue: 'Cuenca' }
  ];
}