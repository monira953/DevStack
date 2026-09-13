import { useState } from "react";
import type { ITechnology } from "./types/technology";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState<ITechnology[]>([]);

  const handleAdd = (technology: ITechnology) => {
  if (stack.some((item) => item.id === technology.id)) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack((currentStack) => [...currentStack, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

  const handleRemove = (id: string) => {
  const removedTechnology = stack.find(
    (technology) => technology.id === id
  );

  setStack((currentStack) =>
    currentStack.filter((technology) => technology.id !== id)
  );

  if (removedTechnology) {
    toast.info(`${removedTechnology.name} removed from your stack.`);
  }
};

  const handleRemoveAll = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <Hero />

      {/* Technologies + Your Stack */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Technology Grid */}
          <div className="lg:col-span-3">
            <TechnologyGrid
              stack={stack}
              onAdd={handleAdd}
            />
          </div>

          {/* Your Stack */}
          <div id="stack">
            <StackSidebar
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <Footer/>
    </>
  );
}

export default App;