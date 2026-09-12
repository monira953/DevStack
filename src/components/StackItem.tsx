import type { ITechnology } from "../types/technology";

interface StackItemProps {
  technology: ITechnology;
  onRemove: (id: string) => void;
}

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center gap-3 p-3 border border-base-200 rounded-lg">

      {/* Icon */}
      <img
        src={technology.icon}
        alt={technology.name}
        className="w-9 h-9 object-contain"
      />

      {/* Name + Category */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">
          {technology.name}
        </h3>

        <p className="text-xs text-base-content/60">
          {technology.category}
        </p>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(technology.id)}
        className="btn btn-ghost btn-sm btn-circle text-error"
        aria-label={`Remove ${technology.name}`}
      >
        ✕
      </button>

    </div>
  );
};

export default StackItem;