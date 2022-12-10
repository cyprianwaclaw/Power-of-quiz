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

export interface UserSettings {
    personal: {
      name: string;
      surname: any;
      email: string;
      phone: string;
    };
    company: {
      name: string;
      nip: string;
      regon: string;
      address: {
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
      };
    };
    financial: {
      iban: string;
      bank_name: string;
      swift: string;
    };
  };

export type UserSettingsPersonal = {
  personal:{
    name: string
    surname: any
    email: string
    phone: string
  }
}
export type UserSettingsCompany = {
    name: string;
    nip: string;
    regon: string;
}
export type UserSettingsCompanyAddress = {
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

export type UserSettingsFinancial = {
    iban: string;
    bank_name: string;
    swift: string;
}

export type User = {
    user: string[]

}
