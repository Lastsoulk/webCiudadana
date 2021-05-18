import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEvent } from 'src/app/campanas/detalleCampana/dialogevent.component';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { ShareMediaContentExampleDialog } from 'src/app/shareMedia/shareMedia.component';
import { DatePipe } from '@angular/common';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';


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

    //public detalleEvento = undefined;
    public evento = undefined;
    originalInfo = undefined;
    public eventoId = undefined;

    public promotor = undefined;
    public ciudad = undefined;
    public campania= undefined;

    public eventoUsuario: boolean = false;

    public followed = false;
    public followID;

    usuario: any;
    user: any;

    constructor(
      private firestoreService: FireBaseService,
      public router: Router, 
      public route: ActivatedRoute,
      public dialog: MatDialog,
      private AuthService: AuthService,
      private datePipe: DatePipe,
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
    this.dialog.open(LoadingContentExampleDialog);
    this.getRouteParams();
    this.getEventById(this.eventoId);
  }

  async getLoggedUser(){
    this.user = await this.AuthService.getCurrentUser();
    this.firestoreService.getDatosUser(this.user.uid).subscribe((userSnapshot) => {
    this.usuario = userSnapshot.payload.data();
    this.firestoreService.checkFollowEvents(this.user.uid,this.eventoId).subscribe((snp) => {
      if(snp.length>0){
        this.followID= snp[0].payload.doc.id;
        this.followed=true;
      }
      });

    }, (error) => {
      console.log(error)
    });
  }


  getEventById(eventoId) {
    
    this.firestoreService.getEventById(eventoId).subscribe((eventSnapshot) => {
        this.originalInfo = eventSnapshot.payload.data();
        this.eventoId = eventSnapshot.payload.id;
        this.firestoreService.getDatosUser(this.originalInfo.idUser).subscribe((userSnapshot) => {
          this.promotor = userSnapshot.payload.data();
         
          this.firestoreService.getCiudadById(this.originalInfo.city).subscribe((citySnapshot) => {
            this.ciudad=citySnapshot.payload.data();
            this.firestoreService.getCampañasById(this.originalInfo.idCampaign).subscribe((campSnapshot) => {
              this.campania=campSnapshot.payload.data();
              let appObj = { ...this.originalInfo,['userP']:this.promotor,['campana']:this.campania, ['ciudad']:this.ciudad, eventId: eventSnapshot.payload.id}
              this.evento=appObj;
              this.dialog.closeAll();
              console.log(this.evento);
            });
          });
        });
      this.getLoggedUser();
      
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
        fechaconvocatoria: this.evento.dateEvent, 
        fotoconvocatoria: this.fotoconvocatoria, 
        direccion: this.evento.address,
        campaignId : this.evento.idCampaign,
        city : this.evento.city,
        idEvent:this.evento.eventId,
        type:"Noticia",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async firmarEvento(){
    this.firestoreService.checkFollow(this.user.uid,this.evento.idCampaign).subscribe((snp) => {
      if(snp.length==0){
        Swal.fire({
          title: 'Usted necesita firmar la campaña antes de poder asistir al evento.',
          text: this.evento.campana.name,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ir a la campaña!'
        }).then((result) => {
          if (result.isConfirmed) {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                "campU":false
              }
            };
            this.router.navigate(["detalleCampana",this.evento.idCampaign], navigationExtras);
          }
        })
      }
      if(this.usuario!=null && snp.length>0){
        if(this.usuario.cedula!=""){
          Swal.fire({
              title: '¿Desea firmar el evento?',
              text: this.evento.name,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Firmar!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: '¿Desea asistir al evento?',
                  text: this.evento.name,
                  icon: 'info',
                  showCancelButton: false,
                  showDenyButton: true,
                  confirmButtonColor: '#3085d6',
                  denyButtonColor: '#d33',
                  confirmButtonText: 'Asistir!',
                  denyButtonText: 'No asistire',
                }).then((result) => {
                  let addfollow;
                  if (result.isConfirmed) {
                    addfollow = {
                      date : this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                      idCampaign : this.evento.idCampaign,
                      idEvent:this.evento.eventId,
                      idUser : this.user.uid,
                      assistance:true,
                    }
                  }
                  if (result.isDenied) {
                    addfollow = {
                      date : this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                      idCampaign : this.evento.idCampaign,
                      idEvent:this.evento.eventId,
                      idUser : this.user.uid,
                      assistance:false,
                    }
                  }
                  if(addfollow!=null){
                    console.log(this.firestoreService.addFollowEvent(addfollow));
                    this.followed=true;
                    //eliminar updateFollowersEvent en caso se cree el trigger en la base.
                    //console.log(this.firestoreService.updateFollowersEvent(this.evento.numFollowers+1,this.evento.eventId));
                    Swal.fire({
                      title:'Firmada!',
                      text:'El evento ha sido firmado!',
                      icon:'success',
                      showCloseButton: true,
                      confirmButtonText:
                        '<i class="fa fa-thumbs-up"></i> Compartir!',
                      confirmButtonAriaLabel: 'Share',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        this.dialog.open(ShareMediaContentExampleDialog);
                      }
                    })
                    this.getLoggedUser();
                  }
                    
                })
                  
                
              }
            })
        }
        if(this.usuario.cedula==""){
          Swal.fire({
            icon: 'warning',
            title: 'No tiene registrado su cédula.',
            text: 'Digité su cédula',
            input: 'text',
            inputAttributes: {
            autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Registrar',
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              let number = this.validateNumber(result.value);
              if(number){
                let datos={
                  nombre:this.usuario.displayName, cedula:result.value,telefono:this.usuario.phoneNumber
                }
                this.firestoreService.updateDatosUser(this.user.uid, datos);
                let timerInterval
                Swal.fire({
                  title: 'Procesando!',
                  html: 'Se recargará la página',
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: () => {
                  Swal.showLoading()
                  timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                      const b = content.querySelector('b')
                      if (b) {
                            //b.textContent = Swal.getTimerLeft()
                      }
                    }
                  }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                  }
                })
              }
              else if(!number){
                Swal.fire({
                  title: 'Formato incorrecto de cédula.',
                  icon: 'error',
                  html:'Usted ingreso <b>'+result.value+'</b>',
                  footer: "Tienen que ser 10 números.",
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'Ok'
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.reload();
                  }
                })
              }
            }
          })
        }
      }
      if(this.usuario==null){
        Swal.fire({
          title: 'Usted necesita tener una cuenta para firmar la campaña.',
          text: this.evento.name,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(["/login"]);
          }
        })
      }
    });
  }

  validateNumber(input){
    const s = String(input)
    return !isNaN(+s) && isFinite(+s) && (typeof input === 'number' || !/e/i.test(s)) && input.length==10;
  }
  async quitarFirma(){
        Swal.fire({
          title: '¿Desea quitar la firma del evento?',
          text: this.evento.name,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Quitar firma!'
        }).then((result) => {
          if (result.isConfirmed) {

            console.log(this.firestoreService.quitarFollowEvent(this.followID));
            this.followed=false;
            //eliminar updateFollowersEvent en caso se cree el trigger en la base.
            console.log(this.firestoreService.updateFollowersEvent(this.evento.numFollowers-1,this.evento.eventId));
            
            Swal.fire(
              'Confirmado!',
              'Se ha eliminado la firma de la campaña!',
              'success'
            )
          }
        })
    }

}