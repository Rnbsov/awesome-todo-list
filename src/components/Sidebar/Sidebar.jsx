import {
  CalendarCheck,
  CheckCircle,
  FlaskConical,
  Settings,
} from 'lucide-react'
import cn from '../../utils/classnames.js'

const navigation = [
  { name: 'Today', href: '#', icon: CalendarCheck, current: true },
  { name: 'Tasks', href: '#', icon: CheckCircle, current: false },
  { name: 'Tags', href: '#', icon: FlaskConical, current: false },
]

const Sidebar = () => {
  return (
    <aside role='sidebar' className='grid-in-sidebar w-72'>
      {/* <header className='d-flex justify-between align-center p-40'> */}
      <div className='flex flex-1 flex-col gap-y-5 px-6 pb-4 h-full'>
        {/* logo */}
        <div className='flex items-center h-16'>
          <div className='text-4xl'>👾</div>
          <div className='ml-3'>
            <h3 className='text-2xl text-white font-bold'>Brighen</h3>
          </div>
        </div>

        <nav className='flex flex-1 flex-col'>
          <ul className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul className='-mx-2 space-y-1'>
                {navigation.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={cn(
                        item.current
                          ? 'bg-purple-950 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-purple-950 hover:bg-opacity-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className='h-6 w-6 shrink-0'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>


            <li className='mt-auto'>
              <a
                href='#'
                className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-purple-950 hover:bg-opacity-50 hover:text-white'
              >
                <Settings size={24} />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Nav */}
      <nav>
        <section></section>
        <section></section>
        <section></section>
      </nav>
    </aside>
  )
}

export { Sidebar }
