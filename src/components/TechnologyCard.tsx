import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body">

        {/* Icon + Badge */}
        <div className="flex items-center justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain"
          />

          <div className="badge badge-outline">
            {technology.badge}
          </div>
        </div>

        {/* Name */}
        <h2 className="card-title mt-2">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-base-content/70">
          {technology.description}
        </p>

        {/* Category */}
        <div className="badge badge-ghost mt-2">
          {technology.category}
        </div>

        {/* Difficulty + Rating */}
        <div className="flex items-center justify-between mt-3 text-sm">
          <span>
            <span className="font-medium">Difficulty:</span>{" "}
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {technology.rating}
          </span>
        </div>

        {/* Add Button */}
        <div className="card-actions mt-3">
          <button
            onClick={() => onAdd(technology)}
            disabled={isAdded}
            className={`btn btn-sm w-full ${
              isAdded
                ? "btn-disabled"
                : "text-white border-0"
            }`}
            style={
              isAdded
                ? undefined
                : {
                    backgroundImage: "var(--brand-gradient)",
                  }
            }
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;