import React from 'react'
import styled from 'styled-components'


const TextField = () => {
  return (
      <div>
          <Main>
              <Text1></Text1>
              <Text2></Text2>
              <Text3></Text3>
          </Main>
      </div>
  )
}

export default TextField

const Text3 = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const Text2 = styled.div``;

const Text1 = styled.div`
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
`;

const Main = styled.div`
  width: 90%;
  margin: 20px;
`;