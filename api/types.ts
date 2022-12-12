export type FastTwo = {
  success: boolean,
  data: string[],
  message: string,
  count: number
}

export type Quiz = {
  title: string,
  image: string,
  questions_count: number,
  difficulty: string,
  time: number,
}

// START type for user settings data and state single data group
export type UserSettingsPersonal = {
  personal: {
    name: string
    surname: any
    email: string
    phone: string
  }
}

export type UserSettingsCompany = {
  company: {
    name: string;
    nip: string;
    regon: string;
  }
}
export type UserSettingsCompanyAddress = {
  company:{
  address:{
  id: number;
  addressable_type: string;
  addressable_id: number;
  city: string;
  postcode: string;
  street: string;
  building_number: string;
  house_number: string;
  created_at: string;
  updated_at: string;
  }
  }
}

export type UserSettingsFinancial = {
  financial:{
  iban: string;
  bank_name: string;
  swift: string;
  }
}

export type UserSettingsPersonalState = {
  name: string
  surname: any
  email: string
  phone: string
}
export type UserSettingsCompanyState = {
  name: string;
  nip: string;
  regon: string;
}
export type UserSettingsCompanyAddressState = {
  id: number;
  addressable_type: string;
  addressable_id: number;
  city: string; 
  postcode: string;
  street: string;
  building_number: string;
  house_number: string;
  created_at: string;
  updated_at: string;
}
export type UserSettingsFinancialState = {
  iban: string;
  bank_name: string;
  swift: string;

}
export type StateSettings = {
  success: boolean
  userSettingsPersonal: UserSettingsPersonalState
  userSettingsCompany: UserSettingsCompanyState,
  userSettingsCompanyAddress: UserSettingsCompanyAddressState
  userSettingsFinancial: UserSettingsFinancialState
}

// END type for user settings

export type User = {
  user: string[]

}
