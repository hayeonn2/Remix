import styled from 'styled-components';

// import Card from '~/common/Card';
import Template from '../../components/template';

export default function Footer() {
  return (
    <Wrapper>
      footer
      <Template />
      {/* <Card /> */}
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: var(--footer-height);
  background-color: #DBDBDB;;
`;
