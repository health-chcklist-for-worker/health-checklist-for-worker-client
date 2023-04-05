import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";

const HeaderWapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: 1px solid blue;
  cursor: pointer;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
`;

const Header = () => {
  const { routeTo } = useRouter();

  return (
    <HeaderWapper onClick={() => routeTo("/")}>
      <Logo>Worker Well-Being</Logo>
    </HeaderWapper>
  );
};

export default Header;
