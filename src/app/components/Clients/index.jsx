export default function Clients() {
  const clientIcon = [
    '/photo/client1.png',
    '/photo/client2.png',
    '/photo/client3.png',
    '/photo/client4.png',
    '/photo/client5.png',
    '/photo/client6.png',
  ]
  return (
    <div className='max-w-[70%] flex items-center gap-20 mx-auto overflow-auto'>
      {clientIcon.map((item, idx) => (
        <div className='h-24 w-24 ' key={idx}>
          <img
            src={item}
            alt='clients'
            className='object-contain h-full w-full'
          />
        </div>
      ))}
    </div>
  )
}
