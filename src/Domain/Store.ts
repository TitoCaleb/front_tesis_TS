export class Store {
  id?: string;

  name!: string;

  constructor(data?: Partial<Store>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
