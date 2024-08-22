import furgo from '/public/furgo.png';
import gobus from '/public/gobus.png';
import dash from '/public/sms-dashboard.png';
import mosaic from '/public/mosaic.png';
import gameville from '/public/gameville.png';
import ProjectCard from './projectCard';

export default function Projects() {
  return (
    <div className='py-10' id='projects'>
      <div>
        <h3 className='text-3xl py-1'>Projects</h3>
      </div>
      <div className='flex flex-col items-center justify-center flex-wrap gap-10 py-10'>
        {/* School Management Dashboard */}
        <ProjectCard
          title={'Upcoming Project - A school management dashboard'}
          details='An admin dashboard for a school with rich features.'
          image={dash}
          imageAltText='School management system dashboard'
          technologies={[
            'React',
            'NextJS 14',
            'TailwindCSS',
            'React-chartjs-2',
            'Auth0',
          ]}
        />

        {/* GoBus - A bus booking web-app */}
        <ProjectCard
          title={'GoBus - A bus booking web-app'}
          details='A bus ticket booking web app for easy ticket booking and much more.'
          image={gobus}
          imageAltText='Bus ticket booking website landing page'
          technologies={[
            'NextJS',
            'TailwindCSS',
            'Strapi',
            'PostgreSQL',
            'Cloudinary',
            'Stripe',
            'Auth0',
          ]}
          hasLinks={true}
          hasMoreText={true}
          links={{
            githubLink: 'https://github.com/naolmelesse/gobus',
            liveLink: 'https://gobus-liard.vercel.app/',
          }}
          moreText={[
            {
              name: 'Tip!',
              content: ' I hear there is a bus from Addis Ababa to Dire Dawa.',
            },
            {
              name: 'Payment:',
              content: ' Use card: 4242 4242 4242 4242 EXP:04/24 CVC:424',
            },
          ]}
        />

        {/* MOSAIC - An online art marketplace */}
        <ProjectCard
          title={'MOSAIC - An online art marketplace'}
          details='A web app to explore fine arts and purchase.'
          image={mosaic}
          imageAltText='An online fine arts marketplace'
          technologies={[
            'NextJS',
            'TailwindCSS',
            'Auth0',
            'Stripe',
            'PostgreSQL',
            'Strapi',
            'Cloudinary',
          ]}
          hasLinks={true}
          hasMoreText={true}
          links={{
            githubLink: 'https://github.com/naolmelesse/mosaic',
            liveLink: 'https://mosaic-silk.vercel.app/',
          }}
          moreText={[
            { name: 'Tip!', content: " Use coupon - 'FIRSTBUY'" },
            {
              name: 'Payment:',
              content: ' Use card: 4242 4242 4242 4242 EXP:04/24 CVC:424',
            },
          ]}
        />

        {/* GameVille - Discover and search games */}
        <ProjectCard
          title={'GameVille - Discover and search games'}
          details='A web app to discover and search games.'
          image={gameville}
          imageAltText='Game discover website'
          technologies={[
            'NextJS',
            'TailwindCSS',
            'REST API',
            'RAWG API',
            'Shadcn UI',
          ]}
          hasLinks={true}
          links={{
            githubLink: 'https://github.com/naolmelesse/game-ville',
            liveLink: 'https://game-ville.vercel.app/',
          }}
        />

        {/* Furgo - A car sharing web-app */}
        <ProjectCard
          title={'Furgo - A car sharing web-app'}
          details='Airbnb but for cars. Two types of users: Hosts and renters.'
          image={furgo}
          imageAltText='Car sharing web landing page'
          technologies={['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'Stripe']}
          hasLinks={true}
          links={{
            githubLink: 'https://github.com/naolmelesse/furgo',
          }}
        />
      </div>
    </div>
  );
}
