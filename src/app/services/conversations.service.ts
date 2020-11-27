import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  private baseUrl = 'https://us-central1-test-cd786.cloudfunctions.net';
  constructor(
    private firestore: AngularFirestore,
    private httpClient: HttpClient,
  ) { }

  
  //Conseguir Mensajes de la conversacion
  public getMessages(eventID:any){
    return this.firestore.collection("conversations").doc(eventID).collection("messages", ref => ref.orderBy("timestamp",'asc'))
    // return this.firestore.collection("conversations").doc(eventID).collection("messages",ref => ref.orderBy("timestamp', 'desc'").limit(12))
  }

  //Actualizar Conversacion
  public updateConversation(payloadObject:any,eventID:any){
    return this.firestore.collection("conversations").doc(eventID).collection("messages").add(payloadObject);
  }
  //Crear Conversacion
  public createConversation(payloadObject:any, eventID:any){
    return this.firestore.collection(`conversations/` + eventID + "/messages" ).add(payloadObject).then(res => { console.log(res) }, error => rejects(error))
  }

   //Habilitar/bloqueadar conversacion
   public statusChat(payloadObject:any, eventID:any){
    return  this.firestore.collection("conversations").doc(eventID).set(payloadObject)
  }

  //Obtener el estado de la conversacion
  public getStatusChat(eventID:any){
    return  this.firestore.collection("conversations").doc(eventID).snapshotChanges();
  }

  //Verificar si existen mensajes sin leer
  public getUnreadMessages(eventID:any){
    return this.firestore.collection("conversations").doc(eventID).collection("messages", ref => ref.limit(1))
  }
}
