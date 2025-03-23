import Link from 'next/link'
import { FaSearch as Search } from 'react-icons/fa'
import { FaAngleDown as Down } from 'react-icons/fa'

export default function Navbar() {
  const navdata = [
    {
      name: 'Product',
      route: '/product',
      isChildren: true,
      children: [
        { name: 'product1', route: '/' },
        { name: 'product1', route: '/' },
        { name: 'product1', route: '/' },
        { name: 'product1', route: '/' },
        { name: 'product1', route: '/' },
      ],
    },

    { name: 'Enterprise', route: '/', isChildren: false },
    { name: 'Resources', route: '/', isChildren: false },
    { name: 'Pricing', route: '/', isChildren: false },
  ]
  return (
    <div className='flex p-3 items-center justify-evenly'>
      <div className='flex gap-5 font-semibold items-center'>
        <div>
          <img src='/photo/logo.png' />
        </div>
        {navdata.map((item, idx) =>
          item.isChildren ? (
            <p key={idx} className='items-center flex gap-1'>
              {item.name} <Down />
            </p>
          ) : (
            <Link href={item.route}>{item.name}</Link>
          )
        )}
      </div>
      <div className='flex items-center gap-5 font-semibold'>
        <Search />
        <Link href={'/'}>Sign in</Link>
        <Link
          href={''}
          className='p-3 border-2 border-[#601D64] rounded-lg text-[#601D64]'
        >
          TALK TO SALES
        </Link>
        <Link
          href={''}
          className='border-2 p-3 border-[#601D64] rounded-lg text-white bg-[#601D64] '
        >
          TRY FOR FREE
        </Link>
      </div>
    </div>
  )
}

