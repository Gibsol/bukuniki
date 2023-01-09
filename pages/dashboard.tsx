import NewJournal from "../components/NewJournal";
import LatestJournal from "../components/LatestJournal";
import ReadingStreak from "../components/ReadingStreak";
import SearchBar from "../components/SearchBar";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>bukuniki / dashboard</title>
        <meta name="description" content="Dashboard of bukuniki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Container>
          <section className="mt-6 flex justify-center">
            <SearchBar />
          </section>

          {/* Card's text size is in the form of Tailwind's "text-[size]". */}
          <section className="mt-6 flex gap-8 justify-center">
            <ReadingStreak />
            <LatestJournal />
          </section>

          <section className="mt-6 flex justify-center">
            <NewJournal />
          </section>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;
