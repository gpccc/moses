import * as React from 'react';
import Container from '@mui/material/Container';

import ServiceCard from '../components/services/service-card'

import englishServices from '../constants/english-services'
import mandarinServices from '../constants/mandarin-services'
import cantoneseServices from '../constants/cantonese-services';

const WorshipServices = () => (
    <Container component="section" sx={{ my: 4 }}>
      <ServiceCard
        showSnackbar={msg => console.info('snackbar', msg)}
        preferredWorshipService="English"
        cantoneseServices={cantoneseServices}
        mandarinServices={mandarinServices}
        englishServices={englishServices}
      />
    </Container>
  );

export default WorshipServices