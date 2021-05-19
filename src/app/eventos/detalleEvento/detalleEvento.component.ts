import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEvent } from 'src/app/campanas/detalleCampana/dialogevent.component';



/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'detalle-evento',
    templateUrl: './detalleEvento.component.html',
    styleUrls: ['./detalleEvento.component.css'],
})
export class DetalleEvento {
  nombreconvocatoria: string;
  descripcion: string;
  fechaconvocatoria: string;
  fotoconvocatoria: string;
  direccion: string;
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    
    misEventos: any[] = [];

    //public detalleEvento = undefined;
    public evento = undefined;;
    public eventoId = undefined;

    public promotor = undefined;
    public ciudad = undefined;
    public campania= undefined;

    public eventoUsuario: boolean = false;

    constructor(
      private firestoreService: FireBaseService,
      public router: Router, 
      public route: ActivatedRoute,
      public dialog: MatDialog,
  ) { }

   getRouteParams(): void {
    this.route.queryParams.subscribe(params => {
      this.eventoUsuario = (params.evenU == 'true');
    });
  }

   ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventoId=params['id'];
    });
    this.getRouteParams();
    this.getEventById(this.eventoId);
  }

  getEventById(eventoId) {
    
    this.firestoreService.getEventById(eventoId).subscribe((eventSnapshot) => {
        this.evento = eventSnapshot.payload.data();
        this.firestoreService.getDatosUser(this.evento.idUser).subscribe((userSnapshot) => {
          this.promotor = userSnapshot.payload.data();
         
          this.firestoreService.getCiudadById(this.evento.city).subscribe((citySnapshot) => {
            this.ciudad=citySnapshot.payload.data();
            
            this.firestoreService.getCampañasById(this.evento.idCampaign).subscribe((campSnapshot) => {
              this.campania=campSnapshot.payload.data();
              if(!this.misEventos.some((item) => item.id == eventoId)){
                this.misEventos.push({
                  name:this.evento.name,
                  eventPic:this.evento.eventPic,
                  description:this.evento.description,
                  dateComplete:this.evento.dateEvent,
                  dateEvent:this.evento.dateEvent.split(',')[0],
                  hourEvent:this.evento.dateEvent.split(',')[1],
                  address:this.evento.address,
                  city:this.ciudad.name,
                  email:this.promotor.email,
                  idCampaign:this.evento.idCampaign,
                  campaign:this.campania.name,
                  state:this.campania.state,
                  categories:this.campania.categories,
                  id:eventoId
                });
              }
            });
          });
        });
      console.log(this.misEventos);

    }), (error) => {
      console.log("Error al cargar el evento", error)
    }

    
  }


  redirectCampaignDetail(value) {
    let campaignId = value.campaignId;
    console.log(campaignId);
    //  console.log("aqui abajo",bandera)


    let navigationExtras: NavigationExtras = {
      queryParams: {
        "campU":false
      }
    };
    this.router.navigate(["detalleCampana",campaignId], navigationExtras);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEvent, {
      width: '800px',
      //height: '90%',
      data: { nombreconvocatoria: this.nombreconvocatoria, 
        descripcion: this.descripcion, 
        fechaconvocatoria: this.fechaconvocatoria, 
        fotoconvocatoria: this.fotoconvocatoria, 
        direccion: this.misEventos[0].address,
        campaignId : this.misEventos[0].idCampaign,
        city : this.misEventos[0].city,
        idEvent:this.misEventos[0].id,
        type:"Noticia",
        dateEvent:this.misEventos[0].dateComplete,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}