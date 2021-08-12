import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import IndexHeader from '../components/IndexHeader';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* <IndexHeader /> */}

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mt-10 mx-auto px-8 sm:px-16 2xl:max-w-full 2xl:mx-20">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ id, img, location, distance }) => (
              <SmallCard 
                key={id}
                img={img} 
                location={location} 
                distance={distance} 
              />
            ))}
          </div>
          <LargeCard 
          img="https://a0.muscache.com/im/pictures/258b129d-d1cd-48b5-86d4-86206c13ebf7.jpg"
          title="Not sure where to go? Perfect."
          
          buttonText="I'm flexible"
        />  
        {/* flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold py-8">Live anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 xl:overflow-visible xl:grid xl:grid-cols-4 2xl:grid 2xl:overflow-visible 2xl:grid-cols-4 xl:w-full xl:h-72 2xl:h-96 xl:gap-5 2xl:gap-5" >
              {cardsData?.map(({ id, img, title }) => (
                <MediumCard key={id} img={img} title={title}/>
              ))}
            </div>
            
          </section>
        </section>  
        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>  
      <Footer />
    
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch("https://14sandee.github.io/json/places.json").then((res) => res.json());

  const cardsData = await fetch("https://14sandee.github.io/json/card.json").then(res => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}