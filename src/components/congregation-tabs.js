import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import {Link, useI18next} from '@herob/gatsby-plugin-react-i18next'

export default function CongregationTabs() {
    const {languages, originalPath, i18n} = useI18next()

    const [value] = React.useState(languages.indexOf(i18n.language))

    const tabInfo = {
        "zh": { label: "华语部", id: "mandarin", },
        "zf": { label: "粵語部", id: "cantonese", },
        "en": { label: "English Ministry", id: "english", },
    }

    return (
        <Tabs value={value} variant="fullWidth" aria-label="congregation tabs">
            {languages.map(lng => (
                <Tab component={Link} label={tabInfo[lng].label} to={originalPath} language={lng} id={tabInfo[lng].id} key={tabInfo[lng].id} />
            ))}
        </Tabs>
    )
}