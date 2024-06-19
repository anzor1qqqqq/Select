/* eslint-disable react-hooks/rules-of-hooks */

import * as React from 'react';

import { data } from "src/data";

import * as TypeGuard from "src/utility/typeGuard";
import type * as TypeSelect from "../types";

export const Form = ({ children }: { children: React.ReactNode }) => {

    return (
        <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            {children}

            <button style={{ marginTop: '50px', cursor: 'pointer' }}
                id="btn_sumbit"
                formAction='#'
                disabled
                onClick={e => e.preventDefault()}>SUBMIT</button>
        </form>
    );
};

Form.Country = ({ selectInfoCountry, setSelectInfo }: TypeSelect.IPropsCountry) => {

    return (
        <>
            <label htmlFor="country">Choose a country:</label>

            <select name="country" id="country" value={selectInfoCountry} onChange={e =>
                setSelectInfo(state => {
                    return {
                        ...state,
                        country: TypeGuard.guardCountry(e.target.value) ? e.target.value : ''
                    }
                })}>
                <option value="">--Please choose an country--</option>
                {
                    data.country.map((elem, i) =>
                        <option value={elem} key={i}>{elem}</option>
                    )
                }
            </select>
        </>
    );
};

Form.City = ({ selectInfoCountry, setSelectInfo }: TypeSelect.IPropsCity) => {

    React.useEffect(() => {
        const elem = document.querySelector('#city') as HTMLSelectElement;

        elem.value = '';

        setSelectInfo(state => {
            return {
                ...state,
                city: ''
            }
        });
    }, [selectInfoCountry, setSelectInfo])

    return (
        <>
            <label htmlFor="city">Choose a city:</label>

            <select name="city" id="city" disabled={selectInfoCountry === ''} onChange={e =>
                setSelectInfo(state => {
                    return {
                        ...state,
                        city: TypeGuard.guardCity(e.target.value) ? e.target.value : ''
                    }
                })}>

                <option value="">--Please choose an city--</option>
                {
                    selectInfoCountry === 'Russia'
                        ?
                        data.city.ru.map((elem, i) =>
                            <option value={elem} key={i}>{elem}</option>
                        )
                        :
                        selectInfoCountry === 'Belarus' && data.city.br.map((elem, i) =>
                            <option value={elem} key={i}>{elem}</option>
                        )
                }
            </select>
        </>
    );
};

Form.University = ({ setSelectInfo }: TypeSelect.TPropsUniversity) => {

    return (
        <>
            <label htmlFor="university">Choose a university:</label>

            <select name="university" id="university" onChange={e =>
                setSelectInfo(state => {
                    return {
                        ...state,
                        university: TypeGuard.guardUniversity(e.target.value) ? e.target.value : ''
                    }
                })}>

                <option value="">--Please choose an university--</option>
                {
                    data.univeraity.map((elem, i) =>
                        <option value={elem} key={i}>{elem}</option>
                    )
                }
            </select>
        </>
    );
};

Form.Housing = ({ selectInfoCountry, selectInfoCity, setSelectInfo }: TypeSelect.IProspHousing) => {

    const ref: React.MutableRefObject<null | HTMLSelectElement> = React.useRef(null);

    React.useEffect(() => {
        if (!selectInfoCity) {
            const elem = document.querySelector('#housing') as HTMLSelectElement;

            elem.value = '';

            setSelectInfo(state => {
                return {
                    ...state,
                    housing: ''
                }
            });
        }
    }, [selectInfoCity, setSelectInfo]);

    React.useEffect(() => {
        const elemBtn = document.querySelector('#btn_sumbit') as HTMLButtonElement;

        ref.current?.value ? elemBtn.disabled = false : elemBtn.disabled = true;

    }, [ref.current?.value]);

    return (
        <>
            <label htmlFor="housing">Choose a housing:</label>

            <select name="housing" id="housing" disabled={!selectInfoCity.length} ref={ref} onChange={e =>
                setSelectInfo(state => {
                    return {
                        ...state,
                        housing: TypeGuard.guardHousing(e.target.value) ? e.target.value : ''
                    }
                })}>

                <option value="">--Please choose an housing--</option>
                {
                    selectInfoCountry === 'Russia'
                        ?
                        data.housing.ru.map((elem, i) =>
                            <option value={elem} key={i}>{elem}</option>
                        )
                        :
                        data.housing.br.map((elem, i) =>
                            <option value={elem} key={i}>{elem}</option>
                        )
                }
            </select>
        </>
    );
};