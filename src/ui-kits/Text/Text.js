import React from 'react';
import {
    TextNormal,
    TextLink,
    TextPara
} from './Text.styled'
// Custom lại tên thẻ - span - tag - p...
// Props.tag -> span -> ...
export default function Text({tag="span",href,children}){
    if(tag==="a" && href){
        return(
            <TextLink>{children}</TextLink>
        )
    }
    else if(tag==="p"){
        return(
            <TextPara>{children}</TextPara>
        )
    }
    return(
        <TextNormal>{children}</TextNormal>
    )
}