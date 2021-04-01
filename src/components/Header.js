import React from 'react'; 
import styled from 'styled-components'; 
import { Avatar } from "@material-ui/core"; 
import AccessTimeIcon from "@material-ui/icons/AccessTime"; 
import SearchIcon from "@material-ui/icons/Search"; 
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"; 

// Using Style Component instead of CSS 
// Source: https://styled-components.com/docs/basics#installation
// Add Style Component in terminal: "npm install --save styled-components"
// Add the "resolutions: "style-component" to package json 

// Add Material UI in terminal type: "npm install @material-ui/core" & "npm install @material-ui/icons"

function Header () { 
    return ( 
        <HeaderContainer>
            
            <HeaderLeft>
                <HeaderAvatar 
                    // ToDo: Add onClick
                />
                <AccessTimeIcon />
            </HeaderLeft>
    
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search Slack" />
            </HeaderSearch>

            <HeaderRight> 
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderSearch = styled.div`
    flex: 0.4; 
    opacity: 1; 
    border-radius: 6px; 
    background-color: #421f44; 
    text-align: center; 
    display: flex; 
    padding: 0 50px; 
    color: gray; 
    border: 1px gray solid; 

    > input {
        background-color: transparent; 
        border: none; 
        text-align: center; 
        min-width: 30vw; 
        outline: 0; 
        color: white; 
    }
`

const HeaderContainer = styled.div`
    display: flex; 
    position: fixed; 
    width: 100%; 
    align-items: center; 
    justify-content: space-between; 
    padding: 10px 0; 
    background-color: var(--slack-color); 
    color: white; 
`; 

const HeaderLeft = styled.div`
    flex: 0.3; 
    display: flex; 
    align-items: center; 
    margin-left: 20px; 


    // .MuiSvgIcon is default class for Material UI. Use this to target Material UI icons
    > .MuiSvgIcon-root {
        margin-left: auto; 
        margin-right: 30px; 
    }
`; 

const HeaderRight = styled.div`
    flex: 0.3; 
    display: flex; 
    align-items: flex-end; 

    > .MuiSvgIcon-root { 
        margin-left: auto; 
        margin-right: 20px; 
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer; 

    :hover { 
        opacity: 0.8; 
    }
`; 


// Had to download the extension "vscode-styled-components" in the extension tab for the colors to change from "" default color