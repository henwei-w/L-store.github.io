
import styled from "styled-components";

const Wrap = styled.div`
  padding: 30px;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12%;
  font-size: 3.5rem;

  & span {
    font-size: 2rem;
    margin-top: 1rem;
    margin-left: 1.5rem;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 60px;
`

function NotFound() {



  return (
    <Wrap>
      <Title>
        404<span>not found</span>
      </Title>
      <Content>此頁面不存在</Content>
    </Wrap>
  )
}

export default NotFound;