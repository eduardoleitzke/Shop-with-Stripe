import { styled } from ".."
import * as Dialog from '@radix-ui/react-dialog'
export const CartContent = styled(Dialog.Content, {
    position: 'absolute',
    width: '30%',
    minHeight: '100%',
    top: 0,
    right: 0,
    background: '$gray800',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5rem 3rem',
    button: {
        cursor: 'pointer'
    },
    
    h2:{
        color: '$gray100',
        fontSize: '$md',
        marginBottom: '2rem'
    }
})


export const ItensInfo = styled('div', {
    display: 'flex',
    gap: '1.25rem',
    marginBottom: '1.5rem',
})

export const ImageContainer= styled('div', {
    height: '5.8rem',
    width: '6.3rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 6,

    img:{
        objectFit: 'cover',
    }
})

export const ItensInfoTexts= styled('div', {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    div:{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
        
        p: {
            fontSize: '$md',
            color: '$gray100',
        },

        span: {
            fontSize: '$md',
            color: '$gray100',
            fontWeight: 'bold',
        },

    },

    button: {
        backgroundColor: 'transparent',
        display: 'flex',
        fontSize: '$md',
        color: '$green500',
        fontWeight: 'bold',
    }    
})

export const ItensDetails= styled('div',{
    display: 'flex',
    flexDirection: 'column',
    div:{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '$md',
        color: '$gray100',
        marginBottom: '0.875rem',
    },

    button:{
        marginTop: '0.875rem',
        fontSize: '$md',
        color: '$gray100',
        background: '$green500',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        borderRadius: 6
    }
})