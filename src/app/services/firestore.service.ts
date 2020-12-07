import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private baseUrl = 'https://us-central1-test-cd786.cloudfunctions.net';

  constructor(
    private firestore: AngularFirestore,
    private httpClient: HttpClient,
  ) { }

  //get campaigns from campaignUpdates that are in waiting state
  public getCampaigns() {

      return this.firestore.collection("campaignUpdates").snapshotChanges();

  }

   public getEvents() {

      return this.firestore.collection("events").snapshotChanges();

  }


  //get campaign by id
  public getOriginalCampaignById(campaign_id: any) {
    return this.firestore.collection("campaigns").doc(campaign_id).snapshotChanges();
  }

  //get last campaign update
  public getLastCampaignUpdateById(campaignUpdateId: any) {
    return this.firestore.collection("campaignUpdates").doc(campaignUpdateId).snapshotChanges();
  }

  //approve campaign update 
  public approveCampaignUpdate(payloadObject: any, campaignUpdateId: any) {
    return this.firestore.collection("campaignUpdates").doc(campaignUpdateId).update(payloadObject).then(res => { console.log(res) }, error => rejects(error))
    // return this.httpClient.put(`${this.baseUrl}/ApproveCampaignUpdate`, payloadObject).subscribe();
  }

  //deny campaign update
  public denyCampaignUpdate(payloadObject: any, campaignUpdateId: any) {
    return this.firestore.collection("campaignUpdates").doc(campaignUpdateId).update(payloadObject).then(res => { console.log(res)}, error => rejects(error))
  }
}
