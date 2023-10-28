import { Plus, Search } from 'lucide-react'

const Header = () => {
  return (
    <header
      role='banner'
      className='grid-in-header flex justify-between p-5 role'
    >
      <p>Title</p>
      {/* <AddButton /> */}
      <div className='flex items-center justify-center gap-5'>
        <div className='relative flex items-center justify-center'>
          <input
            type='search'
            placeholder='Search'
            name='search'
            className='rounded-2xl outline-none pl-10 bg-transparent border-[3px] border-darkOutline px-5 py-2   focus:border-purple-600 '
          />
          <Search color='#8F8D9A' className='absolute left-2' />
        </div>

        <button className='w-6 h-6 bg-gradient-to-tr from-cl1 to-cl2 flex justify-center items-center rounded text-white p-1'>
          <Plus size={24} />
        </button>

        <img
          className='w-10 h-10 rounded-full'
          src='https://rnbsov.gallerycdn.vsassets.io/extensions/rnbsov/github-purple-refined/1.2.4/1696257237537/Microsoft.VisualStudio.Services.Icons.Default'
          alt='Rounded avatar'
        />
      </div>
    </header>
  )
}

export { Header }
