import { useEffect, useState } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  stack: ITechnology[];
  onAdd: (technology: ITechnology) => void;
}

const TechnologyGrid = ({
  stack,
  onAdd,
}: TechnologyGridProps) => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section id="technologies" className="bg-base-100">
      <div className="container mx-auto px-6 py-16">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Explore the{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "var(--brand-gradient)",
              }}
            >
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-base-content/70">
            Explore popular tools and technologies for modern development.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={stack.some(
                (item) => item.id === technology.id
              )}
              onAdd={onAdd}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyGrid;