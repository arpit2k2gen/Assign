import { Task } from "../types/Task";
import { toggleTask, deleteTask } from "../api/taskApi";

interface Props {
  tasks: Task[];
  refresh: () => void;
}

export default function TaskList({ tasks, refresh }: Props) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
              cursor: "pointer"
            }}
            onClick={() => { toggleTask(task.id).then(refresh); }}
          >
            {task.description}
          </span>
          <button onClick={() => { deleteTask(task.id).then(refresh); }}>❌</button>
        </li>
      ))}
    </ul>
  );
}
