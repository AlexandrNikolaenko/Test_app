import Task from "./components/task";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <>
      <main className="relatieve max-[767px]:static flex h-screen pt-12 max-[767px]:pt-14 max-w-screen">
        <Navigation />
        <Task />
      </main>
    </>
  );
}
