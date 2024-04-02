import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete, selectedProjectId }) {
  const selectedProjectTask = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {selectedProjectTask.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any taks, Add some.
        </p>
      )}
      {selectedProjectTask.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-300">
          {selectedProjectTask.map((task) => {
            if (task.projectId === selectedProjectId) {
              return (
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.text}</span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => {
                      onDelete(task.id);
                    }}
                  >
                    Clear
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
}
