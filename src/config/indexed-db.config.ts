import { StoreEnum } from '@app/interfaces/enums/store.enum';
import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
  name: 'FactivarApp', // Nombre de tu base de datos IndexedDB
  version: 1, // Versión de tu base de datos IndexedDB
  objectStoresMeta: [
    // Define los almacenes de objetos que quieres crear
    {
      store: StoreEnum.USER, // Nombre del almacén de objetos
      //   storeConfig: { keyPath: ['id', 'email'], autoIncrement: true }, // Configuración del almacén de objetos
      storeConfig: { keyPath: 'Sid', autoIncrement: true }, // Configuración del almacén de objetos
      storeSchema: [
        // Esquema del almacén de objetos
        { name: 'Sid', keypath: 'Sid', options: { unique: true } },
        { name: 'Name', keypath: 'Name', options: { unique: false } },
        { name: 'Surname', keypath: 'Surname', options: { unique: false } },
        { name: 'Role', keypath: 'Role', options: { unique: false } },
        {
          name: 'Thumbprint',
          keypath: 'Thumbprint',
          options: { unique: false },
        },
        {
          name: 'MobilePhone',
          keypath: 'MobilePhone',
          options: { unique: false },
        },
        { name: 'Email', keypath: 'Email', options: { unique: true } },
        { name: 'exp', keypath: 'exp', options: { unique: false } },
        { name: 'iss', keypath: 'iss', options: { unique: false } },
        { name: 'aud', keypath: 'aud', options: { unique: false } },
        { name: 'token', keypath: 'token', options: { unique: true } },
      ],
    },
  ],
};
