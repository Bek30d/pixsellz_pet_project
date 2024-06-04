import Logo from '@/assets/images/logo.svg'
import Facebook from '@/assets/images/facebook.svg'
import Twitter from '@/assets/images/twitter.svg'
import { Button } from './components/ui/button'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import Lock from '@/assets/images/lock.svg'
import Eye from '@/assets/images/eyeOpen.svg'
import EyeClose from '@/assets/images/eyeOpen.svg'
import Arrow from '@/assets/images/arrow.svg'
import { useState } from 'react'
import { Checkbox } from './components/ui/checkbox'


function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="w-[344px] flex flex-col items-center px-4 py-6 rounded-xl bg-white space-y-5">
        <div className='flex flex-col space-y-4 items-center'>
          <img src={Logo} alt='logo' className='w-12' />
          <div className='flex flex-col gap-1 items-center px-6'>
            <p className='text-gray-900 text-xl font-semibold'>Welcome back</p>
            <p className='text-gray-500	 text-center'>Sign in to access to your dashboard, settings and projects</p>
          </div>
        </div>
        <div className='w-full flex flex-col space-y-4 items-center'>
          <div className='flex flex-col gap-2 w-full'>
            <Button variant="outline" className='rounded-full flex items-center gap-1.5 opacity-100 shadow-sm'>
              <img src={Facebook} alt="Facebook" />
              <p className="text-gray-900 font-semibold text-sm">Connect with Facebook</p>
            </Button>
            <Button variant="outline" className='rounded-full flex items-center gap-1.5 opacity-100 shadow-sm'>
              <img src={Twitter} alt="Twitter" />
              <p className="text-gray-900 font-semibold text-sm">Connect with Twitter</p>
            </Button>
          </div>
          <div className='w-full flex items-center'>
            <div className='flex-grow h-[1px] bg-gray-300'></div>
            <p className='text-sm text-gray-500 px-3 bg-white'>or sign in with email</p>
            <div className='flex-grow h-[1px] bg-gray-300'></div>
          </div>

          <div className="w-full flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" className='rounded-full hover:border-[cyan-500]' />
          </div>

          <div className="w-full flex flex-col space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className='relative'>
              <img src={Lock} alt="lock" className='absolute top-1/2 transform left-2 -translate-y-1/2' />
              <Input type={showPassword ? "text" : "password"} id="password" placeholder="Password" className='rounded-full hover:border-[cyan-500] pl-8' />
              <button onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 transform -translate-y-1/2 right-2'>
                <img src={showPassword ? EyeClose : Eye} alt="eye" />
              </button>
            </div>
          </div>
          <div className="w-full flex items-center space-x-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-text-gray-900"
            >
              Remember for 30 days
            </label>
          </div>
          <Button className='w-full flex items-center gap-2 text-white opacity-100 bg-cyan-500 rounded-full'>
            <p>Sign in</p>
            <img src={Arrow} alt="arrow right icon" />
          </Button>
        </div>
        <div className='flex flex-col space-y-4 items-center'>
          <p className="text-sm text-text-gray-900">No account? <span className='text-cyan-500'>Create an account</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
