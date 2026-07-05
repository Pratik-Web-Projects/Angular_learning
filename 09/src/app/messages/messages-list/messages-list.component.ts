import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports:[AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {

  private cdRef = inject(ChangeDetectorRef);
  private deRef = inject(DestroyRef);
  // messages = input.required<string[]>();
  private messageService = inject(MessagesService);
  // messages = this.messageService.allMessages;
  messages$ = this.messageService.messages$;

  messsages :string[] = [];

  ngOnInit(): void {
    // const subscription = this.messageService.messages$.subscribe((messages)=>{
    //   this.messsages = messages;
    //   this.cdRef.detectChanges();
    // });

    // this.deRef.onDestroy(()=>{
    //   subscription.unsubscribe();
    // })
  }

  get messages (){
    return this.messageService.allMessages ;
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
