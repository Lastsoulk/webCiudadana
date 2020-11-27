import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCampañas() {
    return this.firestore.collection("Campañas").snapshotChanges();
  }

  getCampanasActivas(){
    return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  getCampañas1(id:String="") {
      if(id=="todas"){
        return this.firestore.collection("campaignUpdates", ref => ref.where("promoter.id",'==',"1JxdyCTzsdZcVMjvqHfTk5I9Dpv2")).snapshotChanges();
      }
      else if(id=="negadas"){
        return this.firestore.collection("campaignUpdates", ref => ref.where("promoter.id",'==',"1JxdyCTzsdZcVMjvqHfTk5I9Dpv2").where("state.rejected","==",true)).snapshotChanges();
      }else if(id=="pendientes"){
        return this.firestore.collection("campaignUpdates", ref => ref.where("promoter.id",'==',"1JxdyCTzsdZcVMjvqHfTk5I9Dpv2").where("state.waiting",'==',true)).snapshotChanges();
      }else if(id=="aprobadas"){
        return this.firestore.collection("campaignUpdates", ref => ref.where("promoter.id",'==',"1JxdyCTzsdZcVMjvqHfTk5I9Dpv2").where("state.approved",'==',true)).snapshotChanges();
      }else{
         return this.firestore.collection("campaignUpdates", ref => ref.where("promoter.id",'==',"1JxdyCTzsdZcVMjvqHfTk5I9Dpv2")).snapshotChanges();
      }
    //return this.firestore.collection("campaignUpdates").snapshotChanges();
  }

  public getOriginalCampaignById(campaign_id: any) {
    return this.firestore.collection("campaigns").doc(campaign_id).snapshotChanges();
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