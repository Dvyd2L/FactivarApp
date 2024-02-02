import { Injectable, inject } from '@angular/core';
import { StoreEnum } from '@app/interfaces/enums/store.enum';
import { UUID } from '@app/interfaces/user';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  private db = inject(NgxIndexedDBService);

  // Método para agregar un registro a la base de datos
  public create<T>(record: T, storeName: StoreEnum): Observable<T> {
    return this.db.add(storeName, record);
  }

  // Método para obtener registros de la base de datos
  public read<T>(storeName: StoreEnum, key?: UUID): Observable<T | T[]> {
    return key ? this.db.getByKey<T>(storeName, key) : this.db.getAll<T>(storeName);
  }

  // Método para actualizar un registro en la base de datos
  public update<T>(record: T, storeName: StoreEnum): Observable<T> {
    return this.db.update(storeName, record);
  }

  // Método para eliminar un registro de la base de datos
  public delete<T>(key: UUID, storeName: StoreEnum): Observable<T[]> {
    return this.db.delete(storeName, key);
  }
}
