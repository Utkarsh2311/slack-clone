import { RxCross1 as Cross } from 'react-icons/rx'
import { FaLongArrowAltRight as Right } from 'react-icons/fa'

export default function Notification() {
  return (
    <div className='bg-[#0064A0] px-7 text-white py-5 flex justify-between rounded-full w-full max-w-[75%] mx-auto'>
      <p className='text-nowrap flex'>
        <span className='font-semibold'>Slack is your digital HQ.</span> Meet
        the new features keeping teams conected in a work-from-anywhere world.
        <span className='ml-3 underline font-semibold flex items-center'>
          Let's go <Right />{' '}
        </span>
      </p>
      <Cross />
    </div>
  )
}
