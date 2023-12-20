export interface AddOns {
  onlineService: AddOn;
  largerStorage: AddOn;
  customizableProfile: AddOn;
}

export interface AddOn {
  active: boolean;
  price: number;
}
