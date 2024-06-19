import { TCity, TCountry, TUniversity, THousing } from "../types/"

export const guardCountry = (country: string): country is TCountry => {
    return country === 'Russia' || country === 'Belarus';
};

export const guardCity = (city: string): city is TCity => {
    return city === 'Gomel' || city === 'Minsk' || city === 'Sochi' || city === 'Moscow';
};

export const guardUniversity = (university: string): university is TUniversity => {
    return university === 'technical' || university === 'humanitarian';
};

export const guardHousing = (housing: string): housing is THousing => {
    return housing === 'not interesting' || housing === 'dormitory' || housing === 'rent' || housing === 'dormitory + rent';
};