import { Show, SignInButton, SignOutButton, UserButton } from '@clerk/react';
import { toast } from 'react-hot-toast';
const HomePage = () => {
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => toast.success('Button clicked!')}>Click Me</button>
      <Show when="signed-out">
        <SignInButton />
      </Show>
      <Show when="signed-in">
        <SignOutButton />
      </Show>
      <UserButton />
    </div >
  )
}

export default HomePage