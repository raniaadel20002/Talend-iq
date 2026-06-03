import './App.css'
import { SignedOut, SignInButton } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
      <SignedOut>
        <SignInButton mode="modal" >
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <UserButton />
    </>
  )
}

export default App
