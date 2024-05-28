
import {
  Box, Button, Card, CardActions,
  CardContent, Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { THEME } from '~/common/constants';
import { useTheme } from '~/hooks/use-theme';
import { templateState } from '~/recoil/atoms';

export { meta } from './server';

export default function Index() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useTheme();
  const templateValue = useRecoilValue(templateState);

  return (
    <Wrapper>
      <div>
        <h1>{templateValue}</h1>
      </div>
      <div>
        <h1>{i18n.language}</h1>
        <p>{t('test')}</p>
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}
        >
          locale change
        </button>
      </div>
      <div>
        <h1>{theme}</h1>
        <button
          onClick={() =>
            setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)}
        >
          theme change
        </button>
      </div>
      <Button variant="contained"> 안뇽하세연</Button>
      <Button variant="contained"> 안뇽하세연11</Button>

      {/* <Card variant="contained">카드카드</Card> */}
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>

    </Wrapper>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <>
    <CardContent>
      <Typography
        sx={{ fontSize: 18 }}
        color="text.secondary"
        gutterBottom
      >
        Word of the Day
      </Typography>
      <Typography
        variant="h5"
        component="div"
      >
        be
        {bull}
        nev
        {bull}
        o
        {bull}
        lent
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
      >
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        "a benevolent smile"
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </>
);

const Wrapper = styled.section`
  padding: 4em;
`;
