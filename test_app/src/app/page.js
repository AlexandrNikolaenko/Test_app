import Task from "./components/task";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <>
      <main className="relatieve flex h-screen pt-12 max-w-screen">
        <Navigation />
        <Task />
      </main>
    </>
  );
}
