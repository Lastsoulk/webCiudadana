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
}

export interface ICampaña {
  id?: string;
  Titulo: string;
  urlImagen: string;
  TipoPromotor: string;
  Promotor: string;
  Descripcion: string
}