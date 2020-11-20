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

  getCampañas1() {
    return this.firestore.collection("campaignUpdates").snapshotChanges();
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