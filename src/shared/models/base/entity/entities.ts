import { BaseEntity } from './entity';

export abstract class BaseEntities<T extends BaseEntity<any>> {
  // eslint-disable-next-line no-useless-constructor
  constructor(protected list: T[]) {
    //
  }

  exists(): boolean {
    return this.list.length > 0;
  }
}
