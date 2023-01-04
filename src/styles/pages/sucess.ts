import { convertCompilerOptionsFromJson } from "typescript";
import { styled } from "..";

export const SucessContainer = styled('main',{
    display: 'flex',
    flexDirection: 'column',
    alignItems:"center",
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,
   
    h1: {
        fontSize: '$2xl',
        color: '$gray100'
    },

    p:{
        fontSize: '$xl',
        color: '$gray300',
        maxWidth:560,
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a:{
        display:'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover':{
            color: '$green300'
        }
    }
})


export const AllImagesContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '12rem',
    position: 'relative'
})

export const ImageContainer = styled('div', {
        marginTop: '4rem',
        width: '100%',
        maxWidth: 130,
        height:145,
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: '60%',
        padding: '0.25rem',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: '$distance',
       img:{
        objectFit:'cover',
       } 
})