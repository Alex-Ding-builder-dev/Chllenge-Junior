import daniel from '../public/images/image-daniel.jpg'
import jonathan from '../public/images/image-jonathan.jpg'
import jeanette from '../public/images/image-jeanette.jpg'
import patrick from '../public/images/image-patrick.jpg'
import kira from '../public/images/image-kira.jpg'
export default function App() {
  return (
    <div className="bg-bg min-h-dvh page-shell">
      <h1 className="sr-only">Testimonials</h1>
      <main className="max-w-[40.4375rem] mx-auto lg:max-w-[69.625rem]
      grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article className="bg-purple-500 shadow-card rounded-card text-white
        md:col-span-2 p-8 space-y-4
        md:bg-[url('../public/images/bg-pattern-quotation.svg')] md:bg-no-repeat md:bg-position-[top_right_10.25rem] lg:bg-position-[top_right_3.75rem]">
          <header className='flex items-center gap-[0.9375em]'>
            <img className='rounded-full w-[1.875em] h-[1.875em] border-2 border-purple-300' src={daniel} alt="" />
            <div className='space-y-[0.25rem]'>
              <h2 className='text-preset-2'>Daniel Clifford</h2>
              <p className='text-preset-4 text-purple-50'>Verified Graduate</p>
            </div>
          </header>
          
          <h3 className='text-preset-1'>
            I received a job offer mid-course, and the subjects I learned were current, if not more so,
            in the company I joined. I honestly feel I got every penny’s worth.
          </h3>
          <blockquote className='text-preset-3 text-purple-50'>
            <p>
              “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
              transition and have heard some people who had an amazing experience here. I signed up
              for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my life. Since completing
              the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
            </p>
          </blockquote>
        </article>

        <article className="bg-grey-500 shadow-card rounded-card text-white p-8 space-y-4">
          <header className='flex items-center gap-[1.0625em]'>
            <img className='rounded-full w-[1.75em] h-[1.75em]' src={jonathan} alt="" />
            <div className='space-y-[0.25rem]'  >
              <h2 className='text-preset-2'>Jonathan Walters</h2>
              <p className='text-preset-4 text-grey-300'>Verified Graduate</p>
            </div>
          </header>
          
          <h3 className='text-preset-1'>The team was very supportive and kept me motivated</h3>
          <blockquote className='text-preset-3 text-grey-100'>
            <p>
              “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
              for a big company. This was one of the best investments I’ve made in myself. ”
            </p>
          </blockquote>
        </article>

        <article className="bg-white shadow-card rounded-card text-grey-500
        lg:row-start-2 p-8 space-y-4">
          <header className='flex items-center gap-[1.0625em]'>
            <img className='rounded-full w-[1.75em] h-[1.75em]' src={jeanette} alt="" />
            <div className='space-y-[0.25rem]'  >
              <h2 className='text-preset-2'>Jeanette Harmon</h2>
              <p className='text-preset-4 text-grey-400'>Verified Graduate</p>
            </div>
          </header>
          
          <h3 className='text-preset-1'>An overall wonderful and rewarding experience</h3>
          <blockquote className='text-preset-3 text-grey-400'>
            <p>
              “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
              while doing something I love. ”
            </p>
          </blockquote>
        </article>

        <article className="bg-dark-blue shadow-card rounded-card text-white
        md:col-span-2 p-8 space-y-4">
          <header className='flex items-center gap-[0.9375em]'>
            <img className='rounded-full w-[1.875em] h-[1.875em] border-2 border-purple-500' src={patrick} alt="" />
            <div className='space-y-[0.25rem]'  >
              <h2 className='text-preset-2'>Patrick Abrams</h2>
              <p className='text-preset-4'>Verified Graduate</p>
            </div>
          </header>
          
          <h3 className='text-preset-1 text-grey-200'>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
            learning from their experiences was easy.
          </h3>
          <blockquote className='text-preset-3 text-grey-100'>
            <p>
              “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
              gave me the confidence necessary to be able to go out in the world and present myself as a capable
              junior developer. The standard is above the rest. You will get the personal attention you need from
              an incredible community of smart and amazing people. ”
            </p>
          </blockquote>
        </article>

        <article className="bg-white shadow-card rounded-card text-grey-500
        md:col-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-4 lg:row-span-2 p-8 space-y-4 ">
          <header className='flex items-center gap-[1.0625em]'>
            <img className='rounded-full w-[1.75em] h-[1.75em]' src={kira} alt="" />
            <div className='space-y-[0.25rem]'  >
              <h2 className='text-preset-2'>Kira Whittle</h2>
              <p className='text-preset-4 text-grey-300'>Verified Graduate</p>
            </div>
          </header>
          <h3 className='text-preset-1 text-grey-500'>Such a life-changing experience. Highly recommended!</h3>
          <blockquote className='text-preset-3 text-grey-400'>
            <p>
              “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </blockquote>
        </article>
      </main>
  
    </div>
  )
}