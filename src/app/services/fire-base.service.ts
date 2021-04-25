import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';
// import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(

    private firestore: AngularFirestore,
    private http: HttpClient
  ) { }


  async ngOnInit() {
  }

  getCampanasActivas(){
    console.log('luis');
    console.log(this.firestore.collection("campaigns").snapshotChanges());
    return this.firestore.collection("campaigns", ref => ref.where("state.running",'==',true)).snapshotChanges();
  }

  getCampañasUsuario(id:String="",userId:String="") {
      if(id=="Todas"){
        console.log('cargando todas de: ',userId)
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId)).snapshotChanges();
      }
      else if(id=="Negadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.rejected","==",true)).snapshotChanges();
      }else if(id=="Pendientes"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.rejected",'!=',true).where("state.running",'!=',true).where("state.finished",'!=',true)).snapshotChanges();
      }else if(id=="Aprobadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.running",'==',true)).snapshotChanges();
      }else if(id=="Finalizadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.finished",'==',true)).snapshotChanges();
      }else{
         return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId)).snapshotChanges();
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
         return this.firestore.collection("campaigns", ref => ref.where("categories",'array-contains',categoria).where("state.running",'==',true)).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getAutoridades(){
    return this.firestore.collection("authorities").snapshotChanges();
  }

  getCiudades(idProvince:any){
    if(idProvince=="todas"){
      return this.firestore.collection("cities").snapshotChanges();
    }else{
      return this.firestore.collection("cities", ref => ref.where("idProvince",'==',idProvince)).snapshotChanges();
    }
    
    
  }

  getProvinces(){
    return this.firestore.collection("provinces").snapshotChanges();
  }

  getCategorias(){
    return this.firestore.collection("categories").snapshotChanges();
  }

  crearCampaña(campaigns:any){    
    console.log(campaigns);

    new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("campaigns")
          .add(campaigns)
          .then(res => {

            console.log(res);
            let addfollo = {
              date : campaigns.dateCreate,
              idCampaign : res.id,
              idUser : campaigns.promoter,
          }
          this.addFollow(addfollo);

          }, err => reject(err));
    });
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


  getDatosUser(userId: any){
    return this.firestore.collection("users").doc(userId).snapshotChanges();
  }
  getAutoridad(autoridad: any){
    return this.firestore.collection("authorities").doc(autoridad).snapshotChanges();
  }

  public updateDatosUser(userID: any, nombre:any, cedula:any, telefono:any) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .doc(userID)
          .set({name      :   nombre,
                cedula    :   cedula,
                telefono  :   telefono
          }
          , { merge: true })
          
          .then(res => {
            resolve(res);
            window.location.reload();
          }, err => reject(err));
    });
    

  }

  public getEventById(event_id: any) {
    return this.firestore.collection("events").doc(event_id).snapshotChanges();
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

  public addFollow(data:any){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("followers")
          .add(data)
          .then(res => {
            console.log(res);
          }, err => reject(err));
    });

  }


}





export interface ICampaña {
  id: string;

  name: string;
  numFollowers:number;
  promoter: string;
  state: any[];
  campaignPic: any[];
  dateStart: Date;
  dateEnd:Date;
  dateModified:Date;
  dateCreate:Date;
  categories: any[];
  description: string;
  city: string;
  questionAffect:string;
  questionAsking:string;
  questionProblem:string;
  authority: string;
  province:string;

  
}



export interface IUser{
  id: string;
  categories: any[];
  cedula:string;
  email:string;
  name:string;
  profilePic:string;
  role:any[];
  telefono:any[];
}