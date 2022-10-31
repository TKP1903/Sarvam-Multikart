import React, { useEffect, useState } from "react";
import "../public/assets/scss/app.scss";
import { ToastContainer } from "react-toastify";
import TapTop from "../components/common/widgets/Tap-Top";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import CartContextProvider from "../helpers/cart/CartContext";
import { WishlistContextProvider } from "../helpers/wishlist/WishlistContext";
import FilterProvider from "../helpers/filter/FilterProvider";
import { CompareContextProvider } from "../helpers/Compare/CompareContext";
import { CurrencyContextProvider } from "../helpers/Currency/CurrencyContext";
import Helmet from "react-helmet";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from '../helpers/apollo';

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];

    let timer=setTimeout(function () {
      setIsLoading(false)
    }, 1000);
    return () => { clearTimeout(timer)}
  }, []);


  return (
    <>
    <ApolloProvider client={apolloClient}>
      {isLoading ? (
        <div className="loader-wrapper">
          { (
            <div className="loader"></div>
          )}
        </div>
      ) : (
        <>
          {/* <MessengerCustomerChat
            pageId="2123438804574660"
            appId="406252930752412"
            htmlRef="https://connect.facebook.net/en_US/sdk.js"
          /> */}
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {/* <Head>
              <link rel="icon" type="image/x-icon" href={favicon} />
            </Head> */}
            <title>Sarvam</title>
          </Helmet>
          <div>
            <>
              <CompareContextProvider>
                <CurrencyContextProvider>
                  <CartContextProvider>
                    <WishlistContextProvider>
                      <FilterProvider>
                        <Component {...pageProps} />
                      </FilterProvider>
                    </WishlistContextProvider>
                  </CartContextProvider>
                </CurrencyContextProvider>
              </CompareContextProvider>
            </>
            <ToastContainer />
            <TapTop />
          </div>
        </>
      )}
      </ApolloProvider>
    </>
  );
}
