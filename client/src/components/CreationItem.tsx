import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface CreationItemProps {
  item: {
    prompt: string;
    type: "image" | "text" | string; // Adjust or extend this union as needed
    content: string;
    created_at: string | Date;
  };
}

const CreationItem: React.FC<CreationItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
      {expanded && (
        <div>
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                alt="content"
                className="mt-3 w-full max-w-md"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div className="reset-tw">
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
