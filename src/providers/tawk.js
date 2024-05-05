import React, { useState, useRef } from "react"
import TawkMessengerReact from "@tawk.to/tawk-messenger-react"

const TawkContext = React.createContext({})

//  https://github.com/tawk/tawk-messenger-react/blob/main/docs/api-reference.md#toggle

const TawkContextProvider = ({ children }) => {
  const [tawkMessenger, setTawkMessenger] = useState(null)
  const tawkMessengerRef = useRef()
  const onLoad = () => {
    // tawkMessengerRef.current.showWidget()
    if (tawkMessengerRef?.current) setTawkMessenger(tawkMessengerRef.current)
  }
  return (
    <TawkContext.Provider
      value={{
        tawkMessenger,
      }}
    >
      <TawkMessengerReact
        propertyId="663778f507f59932ab3c3b78"
        widgetId="1ht4b0vnb"
        onLoad={onLoad}
        ref={tawkMessengerRef}
      />
    
      {children}
    </TawkContext.Provider>
  )
}
export default TawkContext
export { TawkContextProvider, TawkContext }
