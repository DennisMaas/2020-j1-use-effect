import React, {useEffect} from 'react'
import styled from "styled-components/macro";

export default function Counter({count,countUp,countDown}) {
    //useEffect on unmount in combination with App.js line 24
    // (if count smaller 10 show counter)
    useEffect(()=> {
            return ()=> console.log("unmount");
            }, []
    );

    return <StyledCounter>
        <h1>Count: {count}</h1>
        <div>
            <button onClick={countDown}>count down</button>
            <button onClick={countUp}>count up</button>
        </div>
    </StyledCounter>
}

const StyledCounter = styled.section`
  h1 {
    color: white;
    text-align: center;
  }
  
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  
  button {
    padding: 8px;
    background: none;
    border: 2px solid var(--nf-orange);
    border-radius: 8px;
    color: var(--nf-orange);
    text-transform: uppercase;
  }
`;
