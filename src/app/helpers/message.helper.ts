import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const addMessage = (
  err: HttpErrorResponse,
  messageService = inject(MessageService)
) => {
  if (typeof err.error === 'string') {
    messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: err.error,
    });
  } else if (err.error instanceof Object) {
    Object.entries(err.error.errors).map(([_, value]) => {
      if (value instanceof Object) {
        Object.entries(value).map(([_, value]) => {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: value,
          });
        });
      }
    });
  }
};
