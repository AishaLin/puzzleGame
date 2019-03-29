import React from 'react';
import styled from 'styled-components';
import '../style.css';

const HeadContent = styled.div`
  flex:none;
  color: rgb(0, 0, 0);
  padding-top: 10px;
  text-align: center;
  font-family: sans-serif;
  font-size: 26px;
`;

const Head = () => (
    <HeadContent>
        <p>Klotski Puzzle</p>
    </HeadContent>
);

export default Head;