import { action } from '@storybook/addon-actions';
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SelectControls from '../src/components/selectControls';
import Phone from '../src/components/phone';
import Phones from '../src/Data';   // Test data set
import PhoneList from '../src/components/phoneList';

storiesOf('Phone Catalogue', module)
        .add('Select controls', 
            () =>   <SelectControls 
            onUserInput={ action('input changed') }
            filterText='' />  
        )
        .add('Phone', 
        () =>  <Phone phone={Phones[0]} /> 
        )
        .add('Phone list', 
        () =>  <PhoneList phones={Phones} /> 
        ) 
     
