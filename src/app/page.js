import Clients from './components/Clients'
import Hero from './components/Hero'
import Notification from './components/Notification'

export default function Home() {
  return (
    <div className='flex gap-12 h-full w-full flex-col mt-3'>
      <Notification />
      <Hero />
      <Clients />
    </div>
  )
}
