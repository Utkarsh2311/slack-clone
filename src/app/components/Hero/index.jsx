import Link from 'next/link'
import { FcGoogle as Google } from 'react-icons/fc'

export default function Hero() {
  return (
    <div className='flex justify-between gap-6 max-w-[70%] mx-auto'>
      <div className='flex flex-col gap-3 w-full'>
        <h1 className='font-bold text-6xl'>Slack is where the future works</h1>
        <p className=' text-lg'>
          Transform the way you work twih one place for evertyone and everything
          tyou ened to get stuff done.
        </p>
        <section className='flex gap-2 items-center'>
          <Link
            href={''}
            className='border-2 p-3 border-[#601D64] rounded-lg text-white bg-[#601D64] '
          >
            TRY FOR FREE
          </Link>
          <Link
            href={''}
            className='bg-[#2C85ED] p-3 rounded-lg flex gap-3 text-white items-center'
          >
            <Google className='text-white bg-white text-2xl ' />
            SIGN UP WITH GOOGLE
          </Link>
        </section>
      </div>
      <div className='h-full w-full'>
        <video src='/hero.webm' alt='hero' muted autoPlay loop />
      </div>
    </div>
  )
}
