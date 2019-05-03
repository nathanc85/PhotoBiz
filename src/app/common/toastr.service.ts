import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
  constructor() {
    toastr.options.progressBar = true;
    toastr.options.closeEasing = 'linear';
    toastr.options.showEasing = 'swing';
  }
  error(message: string, title?: string) {
    toastr.success(message, title);
  }

  warn(message: string, title?: string) {
    toastr.warning(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  success(message: string, title?: string) {
    toastr.success(message, title);
  }
}
