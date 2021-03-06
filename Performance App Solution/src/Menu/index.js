import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 25%;
    top: 0;
    right: 0;
    z-index: 99;
    background: #212121;
    color: #fff;
    height: 100vh;
    padding: 10px 30px;
`


const Menu = ({ close }) => {
    return (
        <Container>
            <p onClick={() => close(false)}>Close</p>
            <h1>This is a dummy menu</h1>
        </Container>
    )
}

export default Menu; 