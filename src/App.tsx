import { useState } from "react";
import type { ITechnology } from "./types/technology";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";

function App() {
  const [stack, setStack] = useState<ITechnology[]>([]);

  const handleAdd = (technology: ITechnology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  const handleRemove = (id: string) => {
    setStack((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== id
      )
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <TechnologyGrid
        stack={stack}
        onAdd={handleAdd}
      />

      <section
        id="stack"
        className="container mx-auto px-6 py-16"
      >
        <StackSidebar
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </section>
    </>
  );
}

export default App;