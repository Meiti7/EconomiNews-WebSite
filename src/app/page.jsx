import Header from "./components/Organism/Header";
import Side from "./components/Organism/MainSide";
import Main from "./components/Organism/Main";

export default function Home() {
  return (
    <main className="font-roboto">
      <Header />
      <section className="flex justify-center gap-5">
        <Main />
        <Side />
      </section>
    </main>
  );
}
