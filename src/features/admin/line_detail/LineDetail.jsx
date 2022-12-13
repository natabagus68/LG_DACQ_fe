
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Asis } from './Asis';
import { OnePole } from './OnePole';
import { Hipot } from './Hipot';
import { OptionManual } from './OptionManual';
import { OptionAutomatic } from './OptionAutomatic';
import { WhiteBalance } from './WhiteBalance';
import { DTVInspection } from './DTVInspection';
import { Shipmode } from './Shipmode';

export const LineDetail = ({children}) => {
    const search = useLocation().search;
    const title = new URLSearchParams(search).get("t");
    
    return (
        <>
            {title == 'asis' ? <Asis /> : null}
            {title == 'onepole' ? <OnePole /> : null}
            {title == 'hipot' ? <Hipot /> : null}
            {title == 'option_manual' ? <OptionManual /> : null}
            {title == 'option_automatic' ? <OptionAutomatic /> : null}
            {title == 'white_balance' ? <WhiteBalance /> : null}
            {title == 'dtv_inspection' ? <DTVInspection /> : null}
            {title == 'shipmode' ? <Shipmode /> : null}
        </>
    );
}