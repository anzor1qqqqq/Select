import * as React from 'react';

import { Form } from "./components/compoundForm";

import { ISelect } from "./types";

const App = () => {
    const [selectInfo, setSelectInfo] = React.useState<ISelect>({
        country: '',
        city: '',
        university: '',
        housing: ''
    });
    
    console.log(selectInfo);

    return (
        <>
            <Form>
                <Form.Country
                    selectInfoCountry={selectInfo.country}
                    setSelectInfo={setSelectInfo}
                />

                <Form.City
                    selectInfoCountry={selectInfo.country}
                    setSelectInfo={setSelectInfo}
                />

                <Form.University setSelectInfo={setSelectInfo} />

                <Form.Housing
                    selectInfoCountry={selectInfo.country}
                    selectInfoCity={selectInfo.city}
                    setSelectInfo={setSelectInfo}
                />
            </Form>
        </>
    );
};

export default App;