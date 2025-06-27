import { createContext, useState } from "react";

export const TestContext = createContext()

function TestContextWrapper({children}) {

  const [account, setAccount]  = useState({uid:"", nickname:""})

  const signin = (uid, nickname) => {

    setNum(() => ({uid, nickname}))
  }

  return (
    <TestContext.Provider value={{account, signin}}>
      {children}
    </TestContext.Provider>
  )

}


export default TestContextWrapper