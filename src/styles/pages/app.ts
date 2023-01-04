import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',

})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth:1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',

    svg:{
        padding: '0.875rem',
        background: '$gray800',
        borderRadius: 6,
        color: '$gray400',
        cursor: 'pointer'
    }
})