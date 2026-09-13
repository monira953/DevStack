import type { ITechnology } from "../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
  stack: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body flex flex-col">

        {/* Heading */}
        <div>
          <h2 className="card-title">Your Stack</h2>

          <p className="text-sm text-base-content/60">
            {stack.length}{" "}
            {stack.length === 1 ? "technology" : "technologies"} selected
          </p>
        </div>

        {/* Empty State */}
        {stack.length === 0 ? (
          <div className="text-center py-10">
            <div className="text-4xl mb-3">🧩</div>

            <h3 className="font-semibold">
              Your stack is empty
            </h3>

            <p className="text-sm text-base-content/60 mt-1">
              Add technologies to build your stack.
            </p>
          </div>
        ) : (
          /* Stack Items */
          <div className="flex flex-col gap-3 mt-4">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}

        {/* Remove All */}
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="btn btn-ghost btn-sm text-error mt-6"
          >
            Remove All
          </button>
        )}

      </div>
    </aside>
  );
};

export default StackSidebar;