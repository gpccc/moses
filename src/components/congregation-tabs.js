import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CongregationTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="congregation tabs">
            <Tab label="华语部" id="Mandarin-tab" aria-controls="Mandarin-tabpanel" />
            <Tab label="粵語部" id="Cantonese-tab" aria-controls="Cantonese-tabpanel" />
            <Tab label="English Ministry" id="English-tab" aria-controls="English-tabpanel" />
        </Tabs>
    );
}