import styled from 'styled-components'
import {VARIABLE} from '../../constants/theme'

//  1. Tách CSS dạng Module viết trong javascript 
//      - Random Class -> Không bị trùng tên CSS
//      - Template String ES6 -> Chuỗi có thể truyền biến được vào trong
//      - Dùng giống như một Component -> Truyền Props vào CSS

export const HeaderMenuContainer = styled.header`
    border:1px solid ${VARIABLE.BLACK};
    width: ${props => props.widthProps};
`
