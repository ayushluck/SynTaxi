import './App.css'
import { Show, SignInButton, SignOutButton ,UserButton} from '@clerk/react';
function App() {
  return (
    <>
      <h1>Welcome to the APP</h1>
      <Show when="signed-out">
        <SignInButton mode="modal">Sign in</SignInButton>
      </Show>
      <Show when="signed-in">
        <SignOutButton>Sign out</SignOutButton>
      </Show>
      <UserButton/>
    </>
  )
}

export default App
