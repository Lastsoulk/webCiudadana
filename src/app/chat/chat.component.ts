import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit,ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, Input } from '@angular/core';
import { ConversationsService } from 'src/app/services/conversations.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit {
  @ViewChild('message') inputElement: ElementRef;
  @Output() messageEvent = new EventEmitter<string>();
  @Input()chat:any;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChildren("messageContainer") messageContainers: QueryList<ElementRef>;
  public conversaciones=[]
  public status:boolean
  public Id
  public type: String
  constructor(private elementRef: ElementRef,
    private Service: ConversationsService) {}

  statusConversations(status:boolean){
    let payloadObjectConversation = {status: status}
    this.status=status
   this.Service.statusChat(payloadObjectConversation,this.Id)
   }
   getStatusChat():void{
    this.Service.getStatusChat(this.Id).subscribe((estado)=>
    {
      this.status = estado.payload.data()["status"] 
    })
  
  }
  getConversations():void{
    this.Service.getMessages(this.Id).snapshotChanges().subscribe((mensajes)=>{
      this.conversaciones=[]
      mensajes.forEach((mensaje:any)=>{
        var mensaje = mensaje.payload.doc.data()
        this.conversaciones.push(mensaje)
        console.log(mensaje)
      })
    })
  }

  ngOnInit(){
    console.log("soy el chat ")
    console.log(this.chat)
    this.Id=this.chat.Id
    this.type=this.chat.type
    this.getConversations()
    this.getStatusChat()
  }
  ngAfterViewInit(): void {
    
      this.scrollToBottom(); // carga antes
      this.messageContainers.changes.subscribe((list: QueryList<ElementRef>) => {
        this.scrollToBottom(); // al añadir
      });
  }
  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
  
  
  mensaje = ""
  public disabled = true

  toogle_buton(event){
    this.mensaje = event.target.value;
    if(this.mensaje){
      this.disabled = false
      
    }else{
      this.disabled = true
   
    }
      
  }

  sendMessage(){
      this.messageEvent.emit(this.mensaje);
      this.mensaje = ""
      this.inputElement.nativeElement.focus();
  }

  

  



}
