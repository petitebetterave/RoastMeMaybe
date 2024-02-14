import './index.css'
import { css } from '../styled-system/css';
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react"

function App() {
  return (
    <>
      <SignedIn>
        <div className={css({ fontSize: "2xl"})}>Wesh Panda.</div>
      </SignedIn>
      <SignedOut> 
        <SignIn />
      </SignedOut>
    </>
    )
}
 
export default App;