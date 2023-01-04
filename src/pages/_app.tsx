
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import Image from 'next/image';
import { Container, Header } from '../styles/pages/app';
import {Handbag} from 'phosphor-react'
import Cart from '../components';
import * as Dialog from '@radix-ui/react-dialog';
import { ProductsContextProvider } from '../contexts/ProductContex';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
 
  return(
    <ProductsContextProvider>
      <Container>
        <Header>
            <Image src={logo} alt='' />
            <Dialog.Root>
              <Dialog.Close/>
              <Dialog.Trigger asChild>
                <Handbag size={55} weight='bold'/>
              </Dialog.Trigger>
              <Cart/>
            </Dialog.Root>
        </Header>
      <Component {...pageProps} />
      </Container>
      </ProductsContextProvider>

  )

}


