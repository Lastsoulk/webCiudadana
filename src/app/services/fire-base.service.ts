import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';
// import firebase from "firebase/app";
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  // public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
  // public userId;
  // public datosUsuario;


  constructor(
    //private AuthService: AuthService,
   // private firestoreService: FireBaseService,
    private firestore: AngularFirestore,
    private http: HttpClient
  ) { }

  // getCampañas() {
  //   return this.firestore.collection("Campañas").snapshotChanges();
  // }

  async ngOnInit() {
    // const user = await this.AuthService.getCurrentUser();
    // this.userId = await this.AuthService.getCurrentUser();
    // console.log('aqui: ',this.userId.uid)
    //this.getDatosUser(user.uid);
   // console.log(user.displayName);

  }

  getCampanasActivas(){
    console.log('luis');
    console.log(this.firestore.collection("campaigns").snapshotChanges());
    return this.firestore.collection("campaigns", ref => ref.where("state.running",'==',true)).snapshotChanges();
  }

  getCampañasUsuario(id:String="",userId:String="") {
      if(id=="todas"){
        console.log('cargando todas de: ',userId)
        return this.firestore.collection("campaigns", ref => ref.where("promoter.id",'==',userId)).snapshotChanges();
      }
      else if(id=="negadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter.id",'==',userId).where("state.rejected","==",true)).snapshotChanges();
      }else if(id=="pendientes"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter.id",'==',userId).where("state.waiting",'==',true)).snapshotChanges();
      }else if(id=="aprobadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter.id",'==',userId).where("state.running",'==',true)).snapshotChanges();
      }else{
         return this.firestore.collection("campaigns", ref => ref.where("promoter.id",'==',userId)).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getEventosUsuario(id:String="",userId:String="") {
      if(id=="todos"){
        console.log('cargando todas de: ',userId)
        return this.firestore.collection("events", ref => ref.where("userId",'==',userId)).snapshotChanges();
      }
      else if(id=="negadas"){
        return this.firestore.collection("events", ref => ref.where("userId",'==',userId).where("state.rejected","==",true)).snapshotChanges();
      }else if(id=="pendientes"){
        return this.firestore.collection("events", ref => ref.where("userId",'==',userId).where("state.waiting",'==',true)).snapshotChanges();
      }else if(id=="aprobadas"){
        return this.firestore.collection("events", ref => ref.where("userId",'==',userId).where("state.running",'==',true)).snapshotChanges();
      }else{
         return this.firestore.collection("events", ref => ref.where("userId",'==',userId)).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getCampañasCategoria(categoria:String="") {
      if(categoria==""){

        return this.firestore.collection("campaigns", ref => ref.where("state.running",'==',true)).snapshotChanges();
      }
      else if(categoria.toLowerCase()=="todas"){

        return this.firestore.collection("campaigns", ref => ref.where("state.running",'==',true)).snapshotChanges();
      }
     else{
         return this.firestore.collection("campaigns", ref => ref.where("categoria",'==',categoria).where("state.running",'==',true)).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getAutoridades(){
    return this.firestore.collection("authorities").snapshotChanges();
  }

  getCiudades(){
    return this.firestore.collection("ciudades").snapshotChanges();
  }



  getCategorias(){
    return this.firestore.collection("categories").snapshotChanges();
  }

  crearCampaña(campaigns:any){


    let body = JSON.stringify(campaigns[0]);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });


    let producto = [{description:'campanita de prueba',name:'hola'}];
    

    return this.firestore.collection("campaigns").add(campaigns);

  }

  crearEvento(evento:any){
    let body = JSON.stringify(evento[0]);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    
    console.log('listo')
    console.log(evento)
    console.log('-')
    return this.firestore.collection("events").add(evento);
  }

  agregarCiudad(ciudad:any){
      let body = JSON.stringify(ciudad[0]);
      let headers = new HttpHeaders({
        'Content-Type':'application/json'
      });
      console.log(ciudad)
      return this.firestore.collection("ciudades").add(ciudad);
  }



  public getOriginalCampaignById(campaign_id: any) {
    return this.firestore.collection("campaigns").doc(campaign_id).snapshotChanges();
  }

// const racesCollection: AngularFirestoreCollection<Race>;
// return racesCollection.snapshotChanges().map(actions => {       
//   return actions.map(a => {
//     const data = a.payload.doc.data() as Race;
//     data.id = a.payload.doc.id;
//     return data;
//   });
// });



  public getDatosUser(userId: any){
    return this.firestore.collection("users").doc(userId).snapshotChanges();
  }

  public getEventById(event_id: any) {
    //console.log(this.firestore.collection("events").doc(event_id).snapshotChanges());
    return this.firestore.collection("events").doc(event_id).snapshotChanges();
    //return this.firestore.collection("events", ref => ref.where("campaignId",'==',event_id)).snapshotChanges();
  }

  public getEvents(ciudad: any,tipo: any) {
    if(ciudad=="Todas" && tipo == "Todas"){
      return this.firestore.collection("events").snapshotChanges(); //, ref => ref.where("state.running",'==',true)).snapshotChanges();

    }
    else if(ciudad=="Todas" && tipo == "Noticias"){
      return this.firestore.collection("events", ref => ref.where("type","==","noticia")).snapshotChanges();

    }else if(ciudad=="Todas" && tipo == "Convocatorias"){
        return this.firestore.collection("events", ref => ref.where("type","==","convocatoria")).snapshotChanges();

    }else if(ciudad!="Todas" && tipo == "Convocatorias"){
        return this.firestore.collection("events", ref => ref.where("type","==","convocatoria").where("city","==",ciudad)).snapshotChanges();

    }


  }


}

export interface ICampaña {
  id?: string;
  Titulo: string;
  urlImagen: string;
  TipoPromotor: string;
  Promotor: string;
  Descripcion: string
}

export interface IUser{
  
}