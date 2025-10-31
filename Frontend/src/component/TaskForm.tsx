import { useState } from "react";
import { addTask } from "../api/taskApi";

interface Props {
  refresh: () => void;
}

export default function TaskForm({ refresh }: Props) {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    await addTask(description);
    setDescription("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

