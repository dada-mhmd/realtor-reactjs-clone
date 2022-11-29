import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = e => {
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      }
    })
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'
            alt='key'
            className='w-full rounded-2xl'
          />
        </div>

        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form className=''>
            <input
              type='email'
              placeholder='Email address'
              autoComplete='off'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              className='w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
            />
            <div className='relative mb-6'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                autoComplete='off'
                id='password'
                name='password'
                value={password}
                onChange={onChange}
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
              />

              {/* toggle password visibility button */}
              {showPassword ? (
                <AiFillEyeInvisible
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword(prevState => !prevState)}
                />
              ) : (
                <AiFillEye
                  className='absolute right-3 top-3 text-xl cursor-pointer'
                  onClick={() => setShowPassword(prevState => !prevState)}
                />
              )}
            </div>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>
                Don't have an account?
                <Link
                  to='/signup'
                  className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/forgot-password'
                  className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                >
                  Forgot password?
                </Link>
              </p>
            </div>

            <button
              className='w-full bg-blue-600 text-white text-sm font-medium uppercase px-7 py-3 rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
              type='submit'
            >
              Sign in
            </button>

            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300'>
              <p className='text-center font-medium mx-3'>OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
