import { Plus, Search } from 'lucide-react'

const Header = () => {
  return (
    <div className='grid-in-header flex justify-between p-5'>
      <p>Title</p>
      {/* <AddButton /> */}
      <div className='flex items-center justify-center'>
        <div>
          <Search />
          <input
            type='text'
            placeholder='Search'
            className='rounded-full bg-transparent border-4  border-slate-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400'
          />
        </div>

        <button className='w-6 h-6 bg-gradient-to-tr from-cl1 to-cl2 flex justify-center items-center rounded text-white p-1 mr-5'>
          <Plus size={24} />
        </button>

        <img
          className='w-10 h-10 rounded-full'
          src='https://rnbsov.gallerycdn.vsassets.io/extensions/rnbsov/github-purple-refined/1.2.4/1696257237537/Microsoft.VisualStudio.Services.Icons.Default'
          alt='Rounded avatar'
        />
      </div>
    </div>
  )
}

export { Header }
