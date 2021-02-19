
import React, {Component, useEffect, useState} from 'react'
import styled from 'styled-components';
import './Fonts.css'


const space = props => {
    const {title, image, information, date, video } = props;

    const Stydiv = styled.div`
    background-color:whitesmoke;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `
    const Styabout = styled.p`
    text-align: center;
    outline: 4px solid red;
    border: 4px solid royalblue;
    font-style: oblique;
    font-weight: bold;
    color: black;
    padding: 2%;
    width:80%;
    `
    const Stytitle = styled.h2`
    font-family: 'Russo One', sans-serif;
    color: black;
    padding: 3%;
    outline: 4px solid red;
    border: 4px solid royalblue;
    height: 10%;
    width: 50%;
    `
    const Stydate = styled.h3`
    text-decoration: underline;
    `
    const Simg = styled.img`
    padding: 2%;
    margin-bottom: 2%;
    width: 80%;
    `
    const Svid = styled.iframe`
    margin: 2%;
    width:80%;
    `
    return (
        <Stydiv>
        <Stytitle>{title}</Stytitle>
        <Stydate> {date} </Stydate>    
        {image !== undefined && <Simg src = {image} alt='APOD' width='1280'/>}
        {video !== undefined && <Svid title={title} src={video} height='720' width='1280'/>}
        <Styabout>{information}</Styabout>
        
    </Stydiv>
    )
}
export default space;