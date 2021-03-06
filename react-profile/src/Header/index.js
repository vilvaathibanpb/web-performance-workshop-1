import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Menu from '../Menu';


const Conatiner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
`;

const Title = styled.h1`
    color: green;
`

const MenuBtn= styled.p`
    color: #212121;
`;

const Header = () => {
    const [show, toggleShow] = useState(false);
    useEffect(() => {
        console.log( _.get({ name: "Vilva"}, 'name'));
    }, [])
    return (
        <>
        <Conatiner>
            <Title>PerfKart</Title>
            <MenuBtn onClick={() => toggleShow(true)}>Open menu</MenuBtn>
        </Conatiner>
        {show && <Menu close={toggleShow} />}
        </>
    )
}

export default Header;