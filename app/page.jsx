import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center orange_red_gradient">
        Verse Haven 
      <br className="max-md:hidden"/>
      <br/>
      <span className="purple_gradient text-center"> A Poetry Sanctuary</span>
    </h1>
    <p className="desc text-center">
      Unleash your creativity and share the beauty of words with fellow poets
      around the world
    </p>

    <Feed />
  </section>
);

export default Home;
