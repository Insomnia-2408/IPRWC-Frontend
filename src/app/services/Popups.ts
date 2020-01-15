import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ErrorAlertComponent} from '../error-alert/error-alert.component';

@Injectable({providedIn: 'root'})
export class Popups {

  constructor(private modal: NgbModal) { }

  openError(message: string) {
    const modalRef = this.modal.open(ErrorAlertComponent);
    modalRef.componentInstance.message = message;
  }

}
