import * as React from 'react';

enum ECountrys {
    'Russia',
    'Belarus',
    ''
}

enum ECitys {
    'Moscow',
    'Sochi',
    'Minsk',
    'Gomel',
    ''
}

enum EUniversitys {
    'humanitarian',
    'technical',
    ''
}

enum EHousing {
    'not interesting',
    'dormitory',
    'rent',
    'dormitory + rent',
    ''
}

export type TCountry = keyof typeof ECountrys;
export type TCity = keyof typeof ECitys;
export type TUniversity = keyof typeof EUniversitys;
export type THousing = keyof typeof EHousing;

export interface IDataSelect {
    country: ["Russia", "Belarus"];

    city: {
        ru: ["Moscow", "Sochi"];
        br: ["Minsk", "Gomel"];
    }

    univeraity: ["technical", "humanitarian"];

    housing: {
        br: ['not interesting', 'dormitory'];
        ru: ['not interesting', 'dormitory', 'rent', 'dormitory + rent'];
    }
}

export interface ISelect {
    country: TCountry;
    city: TCity;
    university: TUniversity;
    housing: THousing;
}

export type ISetStateSelect = React.Dispatch<React.SetStateAction<ISelect>>;

export interface IPropsCountry {
    selectInfoCountry: ISelect['country'];
    setSelectInfo: ISetStateSelect;
}

export interface IPropsCity extends IPropsCountry { }

export type TPropsUniversity = Pick<IPropsCity, 'setSelectInfo'>;

export interface IProspHousing extends IPropsCountry {
    selectInfoCity: ISelect['city'];
}