import fiveStars from '../public/images/illustration-five-stars.webp'
import platforms from '../public/images/illustration-multiple-platforms.webp'
import schedule from '../public/images/illustration-consistent-schedule.webp'
import posts from '../public/images/illustration-schedule-posts.webp'
import growth from '../public/images/illustration-grow-followers.webp'
import audience from '../public/images/illustration-audience-growth.webp'
import createPost from '../public/images/illustration-create-post.webp'
import ai from '../public/images/illustration-ai-content.webp'
export default function App() {
  return (
    <main className='max-w-[70rem] mx-auto
    grid grid-cols-1 md:grid-cols-2
    lg:grid-cols-4 gap-8 lg:grid-rows-[repeat(3,auto)]'>
      <div className='rounded-card bg-purple-500 text-white overflow-hidden
      md:col-span-2 lg:col-start-2 lg:row-start-1
      py-[clamp(2.5rem,_8.1425vw_+_0.5916rem,_4.5rem)] px-8 md:py-[clamp(3.875rem,_-1.4881vw_+_5.2143rem,_4.5rem)]
      flex flex-col gap-6 items-center text-center'>
        <h1 className='text-preset-1'>Social Media <span className='text-yellow-500'>10x</span> <span className='italic'>Faster</span> with AI</h1>
        <div className='flex flex-col items-center gap-2'>
          <img className='w-[12rem]' src={fiveStars} alt="five stars" />
          <p className='text-preset-4'>Over 4,000 5-star reviews</p>
        </div>
      </div>

      <div className='rounded-card bg-white overflow-hidden
      p-[clamp(1rem,_2.0356vw_+_0.5229rem,_1.5rem)]
      space-y-[clamp(1rem,_9.7964vw_-_1.296rem,_3.40625rem)] lg:space-y-[1.28125rem] '>
        <img className='w-[19.75625rem] h-[4.15875rem] max-w-none' src={platforms} alt="multiple platforms" />
        <h2 className='text-preset-3 md:pr-4'>Manage multiple accounts and platforms.</h2>
      </div>

      <div className='rounded-card bg-yellow-500 h-[13.5156rem] md:h-[15.4375rem] overflow-hidden
      p-[clamp(1rem,_2.0356vw_+_0.5229rem,_1.5rem)]
      space-y-4'>
        <h2 className='text-preset-3'>Maintain a consistent posting schedule.</h2>
        <img className='w-[13rem] h-[9.8125rem] max-h-none' src={schedule} alt="consistent schedule" />
      </div>

      <div className='rounded-card bg-purple-100 overflow-hidden
      md:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2
      py-8 px-[1.09375rem] md:py-[clamp(2rem,_2.6935vw_+_0.7071rem,_3.13125rem)] md:px-8
      flex flex-col gap-6 items-center text-center lg:items-start lg:text-start
      '>
        <h2 className='text-preset-3'>Schedule to social media.</h2>
        <img className='w-[22.33125rem] sm:max-w-none' src={posts} alt="schedule posts" />
        <p className='text-preset-4
        max-w-[22.4375rem]'>Optimize post timings to publish content at the perfect time for your audience.</p>
      </div>
      
      <div className='rounded-card bg-purple-500 text-white
      md:col-span-2 lg:col-start-3 lg:row-start-3
      py-[clamp(1.43125rem,_-0.2799vw_+_1.5656rem,_1.5rem)] px-[clamp(1.5rem,_14.6718vw_-_1.9387rem,_5.10375rem)] lg:px-6
      flex flex-col gap-10 text-center md:text-start md:flex-row items-center'>
        <img className='w-[14.23rem]' src={growth} alt="grow followers" />
        <h2 className='text-preset-2'>Grow followers with non-stop content.</h2>
      </div>

      <div className='rounded-card bg-white overflow-hidden
      md:col-span-2 lg:col-span-1
      p-6
      flex flex-col gap-6 md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start'>
        <h2 className='text-preset-1
        space-y-[0.9375rem]'><span className='block'>&gt;56% </span>
          <span className='text-preset-4 block'>faster audience growth</span>
        </h2>
        <img className='w-[11.183rem]' src={audience} alt="audience growth" />
      </div>
      
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:col-span-2 lg:col-span-1 lg:grid-cols-1 lg:col-start-1 lg:row-start-1 lg:row-span-3'>
        <div className='rounded-card bg-yellow-100 overflow-hidden
        px-[clamp(1.5rem,_-2.0356vw_+_2.4771rem,_2rem)] py-[clamp(2rem,_10.9669vw_-_0.5704rem,_4.69375rem)]
        md:px-[clamp(1.5rem,_1.1905vw_+_0.9286rem,_2rem)] md:py-[clamp(4.69375rem,_0.4762vw_+_4.4652rem,_4.89375rem)]
        space-y-6'>
          <h2 className='text-preset-2'>Create and schedule content <span className='text-purple-500 italic'>quicker</span>.</h2>
          <img className='w-[11.9rem]' src={createPost} alt="create post" />
        </div>
        
        <div className='rounded-card bg-yellow-500 overflow-hidden
        p-6
        space-y-[clamp(1.5rem,_4.6875vw_-_0.75rem,_3.46875rem)]'>
          <h2 className='text-preset-2'>Write your content using AI.</h2>
          <img className='w-[13.746875rem] max-w-none' src={ai} alt="ai content" />
        </div>
      </div>
    </main>
  )
}