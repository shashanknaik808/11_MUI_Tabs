import React from 'react';
import { Tabs, Tab } from '@mui/material';

function Test() {
    return (
        <div>
            <Tabs indicatorColor="secondary" textColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
                <Tab label="First" />
                <Tab label="Second" />
                <Tab label="Third" />
            </Tabs>
        </div>
    )
}

export default Test;