
import styled from "styled-components";

const Background = styled.div`
  padding: 30px;
`

const Wrap = styled.div`
  max-width: 600px;
  margin: auto;
  font-size: 1.5rem;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`

function Pay() {



  return (
    <Background>
      <Wrap>
        付款方式
      </Wrap>
    </Background>
  )
}

export default Pay;