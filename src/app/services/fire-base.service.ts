import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
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
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.rejected",'==',false).where("state.running",'==',false).where("state.finished",'==',false)).snapshotChanges();
      }else if(id=="Aprobadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.running",'==',true)).snapshotChanges();
      }else if(id=="Finalizadas"){
        return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId).where("state.finished",'==',true)).snapshotChanges();
      }else{
         return this.firestore.collection("campaigns", ref => ref.where("promoter",'==',userId)).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getCampañasById(id:any){
    return this.firestore.collection("campaigns").doc(id).snapshotChanges();
  }

  getEventosUsuario(id:String="",idUser:String="") {
      if(id=="todos"){
        console.log('cargando todas de: ',idUser)
        return this.firestore.collection("events", ref => ref.where("idUser",'==',idUser)).snapshotChanges();
      }
      else if(id=="negadas"){
        return this.firestore.collection("events", ref => ref.where("idUser",'==',idUser).where("state.rejected","==",true)).snapshotChanges();
      }else if(id=="pendientes"){
        return this.firestore.collection("events", ref => ref.where("idUser",'==',idUser).where("state.waiting",'==',true)).snapshotChanges();
      }else if(id=="aprobadas"){
        return this.firestore.collection("events", ref => ref.where("idUser",'==',idUser).where("state.running",'==',true)).snapshotChanges();
      }else{
         return this.firestore.collection("events", ref => ref.where("idUser",'==',idUser)).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getCampañasCategoria(categoria:String="", ciudad:String="", estado:String="") {
  
    if(estado=="Activas"){ 
      if(categoria=="Todas"  && ciudad==""){//inicio
        //console.log("cat=todas, ciudad=vacio, ejecut=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("state.running",'==',true)).snapshotChanges();
      }
      else if(categoria=="Todas" && ciudad !=""){
        //console.log("cat=todas, ciudad!=vacio, ejecut=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("city",'==',ciudad).where("state.running",'==',true)).snapshotChanges();
      }
      else if(categoria!="Todas" && ciudad !=""){//categoria=salud,ciudad=guayaquil
        //console.log("cat!=todas, ciudad!=vacio, ejecut=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("categories",'array-contains',categoria).where("city",'==',ciudad).where("state.running",'==',true)).snapshotChanges();
      }
      else if(categoria!="Todas" && ciudad ==""){//categoria=salud, ciudad=todas
        //console.log("cat!=todas, ciudad==vacio, ejecut=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("categories",'array-contains',categoria).where("state.running",'==',true)).snapshotChanges();
      }
    }
    if(estado=="Finalizadas"){
      if(categoria=="Todas"  && ciudad==""){
        //console.log("cat==todas, ciudad=vacio, finaliz=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("state.finished",'==',true)).snapshotChanges();
      }
      else if(categoria=="Todas" && ciudad !=""){
        //console.log("cat==todas, ciudad!=vacio, finaliz=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("city",'==',ciudad).where("state.finished",'==',true)).snapshotChanges();
      }
      else if(categoria!="Todas" && ciudad !=""){
        //console.log("cat!=todas, ciudad!=vacio, finaliz=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("categories",'array-contains',categoria).where("city",'==',ciudad).where("state.finished",'==',true)).snapshotChanges();
      }
      else if(categoria!="Todas" && ciudad ==""){
        //console.log("cat!=todas, ciudad=vacio, finaliz=> "+categoria,ciudad,estado);
        return this.firestore.collection("campaigns", ref => ref.where("categories",'array-contains',categoria).where("state.finished",'==',true)).snapshotChanges();
      }
    }
    
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

  getCiudadById(idCiudad:any){
    return this.firestore.collection("cities").doc(idCiudad).snapshotChanges();
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
            let addfollow = {
              date : campaigns.dateCreate,
              idCampaign : res.id,
              idUser : campaigns.promoter,
          }
          this.addFollow(addfollow);

          }, err => reject(err));
    });
  }

  crearEvento(evento:any){
    console.log(evento);

    new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("events")
          .add(evento)
          .then(res => {

            console.log(res);
            let addfollow = {
              date : evento.dateCreate,
              assistance: true,
              idCampaign : evento.idCampaign,
              idEvent: res.id,
              idUser : evento.idUser,
            }
            if(evento.type=="Noticia"){
              addfollow.assistance=false;
            }
            this.addFollowEvent(addfollow);

          }, err => reject(err));
    });
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

  public updateDatosUser(userID: any, datos:any) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .doc(userID)
          .set({displayName    :   datos.nombre,
                cedula         :   datos.cedula,
                phoneNumber    :   datos.telefono
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

  public getEvents(ciudad: any,tipo: any,estado:any) {
      
    if(estado=="Activas"){ 
      if(ciudad=="Todas" && tipo == "Todas"){//no se cuando se ejecuta
        return this.firestore.collection("events", ref => ref.where("state.running",'==',true)).snapshotChanges();
      }
      else if(ciudad=="Todas" && tipo == "Noticias"){
        return this.firestore.collection("events", ref => ref.where("type","==","Noticia").where("state.running",'==',true)).snapshotChanges();

      }else if(ciudad=="Todas" && tipo == "Convocatorias"){//inicio
        return this.firestore.collection("events", ref => ref.where("type","==","Convocatoria").where("state.running",'==',true)).snapshotChanges();

      }else if(ciudad=="" && tipo == "Convocatorias"){//ciudad=todas, estado=ejecutandose
        //console.log("ciudad=todas, estado=ejecutandose=> "+ciudad,tipo,estado);
        return this.firestore.collection("events", ref => ref.where("type","==","Convocatoria").where("state.running",'==',true)).snapshotChanges();

      }else if(ciudad!="Todas" && tipo == "Convocatorias"){//ciudad=guayaquil;
          //console.log("ciudad!=todas, estado=ejecutandose=> "+ciudad,tipo,estado);
          
          return this.firestore.collection("events", ref => ref.where("type","==","Convocatoria").where("city","==",ciudad).where("state.running",'==',true)).snapshotChanges();
      }
  
    }
    if(estado=="Finalizadas"){
     
      if(ciudad=="Todas" && tipo == "Todas"){
        return this.firestore.collection("events", ref => ref.where("state.finished",'==',true)).snapshotChanges();
      }
      else if(ciudad=="Todas" && tipo == "Noticias"){
        return this.firestore.collection("events", ref => ref.where("type","==","Noticia").where("state.finished",'==',true)).snapshotChanges();

      }else if(ciudad=="" && tipo == "Convocatorias"){//ciudades=todas estado=rechazadas
        //console.log("ciudad==todas, finalizadas"+ciudad,estado)
        return this.firestore.collection("events", ref => ref.where("type","==","Convocatoria").where("state.finished",'==',true)).snapshotChanges();

      }else if(ciudad!="Todas" && tipo == "Convocatorias"){
        //console.log("ciudad!=todas, finalizadas"+ciudad,estado)
          return this.firestore.collection("events", ref => ref.where("type","==","Convocatoria").where("city","==",ciudad).where("state.finished",'==',true)).snapshotChanges();
      }
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

  public quitarFollow(id){
    return new Promise<any>((resolve, reject) =>{
      this.firestore.collection('followers').doc(id).delete()
          .then(res => {
            console.log(res);
          }, err => reject(err));
    });
  }

  

  public updateFollowers(variable:any,campaignID){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("campaigns")
          .doc(campaignID)
          .set({numFollowers    :   variable
          }
          , { merge: true })
          
          .then(res => {
            resolve(res);
          }, err => reject(err));
    });
  }

  public checkFollow(idUser,idCampaign){
    return this.firestore.collection("followers", ref => ref.where("idUser",'==',idUser).where("idCampaign",'==',idCampaign)).snapshotChanges();
  }

  public checkFollowEvents(idUser,idEvent){
    return this.firestore.collection("followers-events", ref => ref.where("idUser",'==',idUser).where("idEvent",'==',idEvent)).snapshotChanges();
  }

  public addFollowEvent(data:any){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("followers-events")
          .add(data)
          .then(res => {
            console.log(res);
          }, err => reject(err));
    });

  }

  public updateFollowersEvent(variable:any,id){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("events")
          .doc(id)
          .set({numFollowers    :   variable
          }
          , { merge: true })
          
          .then(res => {
            resolve(res);
          }, err => reject(err));
    });
  }
  
  public quitarFollowEvent(id){
    return new Promise<any>((resolve, reject) =>{
      this.firestore.collection('followers-events').doc(id).delete()
          .then(res => {
            console.log(res);
          }, err => reject(err));
    });
  }


  public getEventsByCampaign(campaign_id){

    return this.firestore.collection("events", ref => ref.where("idCampaign",'==',campaign_id)).snapshotChanges();
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