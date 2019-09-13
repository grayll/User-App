import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomModalService {
  private modals: any[] = [];

  constructor() {}

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    // open modal specified by id
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
    // disable background page scroll
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('overflow-hidden');
  }

  close(id: string) {
    // close modal specified by id
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
    // make page scrollable again
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('overflow-hidden');
  }
}
