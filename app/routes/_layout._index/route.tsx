
import {
  Box, Card, CardActions,
  CardContent, Grid,
  Radio,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { THEME } from '~/common/constants';
import {  useTheme } from '~/hooks/use-theme';
import { templateState } from '~/recoil/atoms';

import  CommonButton  from '../../common/CommonButton';

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

      <Radio
        color="secondary"

      />

      <Box mt={3}>
        <CommonButton
          gradient={['skyblue', 'navy']}
        >
          사용자 임의 지정
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="primaryMain"
        >
          primary Main
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="primaryLight"
        >
          primary Light
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="primaryDark"
        >
          primary Dark
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="secondaryMain"
        >
          secondary Main
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="secondaryLight"
        >
          secondary Light
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="secondaryDark"
        >
          secondary Dark
        </CommonButton>
      </Box>

      <Box mt={3}>
        <CommonButton
          gradient="other"
        >
          other Accent
        </CommonButton>
      </Box>

      <TextField color="primary">dd</TextField>

      {/* Card 컴포넌트 만들어보기 */}
      <Box
        sx={{ minWidth: 275 }}
        mt={3}
      >
        <Card variant="outlined">{card}</Card>
      </Box>

      {/* 그리드는 1~12 사이의 정수 */}
      <Grid
        container
        spacing={2}
        mt={2}
      >
        <Grid
          item
          xs={12}
        >
          <Item>xs=12</Item>
        </Grid>
        <Grid
          item
          xs={2}
        >
          <Item>xs=2</Item>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Item>xs=4</Item>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Item>xs=3</Item>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Item>xs=3</Item>
        </Grid>
        <Grid
          item
          xs={9}
        >
          <Item>xs=9</Item>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Item>xs=3</Item>
        </Grid>

      </Grid>

    </Wrapper>
  );
}

const Item = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  // borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  // padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  padding: '10px',
}));

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
      <CommonButton>MORE!!!!</CommonButton>
    </CardActions>
  </>
);

const Wrapper = styled.section`
  padding: 4em;
`;
