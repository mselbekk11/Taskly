import Task from './Task';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { useToast } from '@/hooks/use-toast';

export default function Todos({ items }) {
  const { toast } = useToast();

  const checkATodo = useMutation(api.todos.checkATodo);
  const unCheckATodo = useMutation(api.todos.unCheckATodo);

  const handleOnChangeTodo = (task: Doc<'todos'>) => {
    if (task.isCompleted) {
      unCheckATodo({ taskId: task._id });
    } else {
      toast({
        title: 'Task completed',
        description: "You're a rockstar",
        duration: 3000,
      });
      checkATodo({ taskId: task._id });
    }
  };

  return items.map((task, idx) => (
    <Task
      {...task}
      key={task._id}
      handleOnChange={() => handleOnChangeTodo(task)}
    />
  ));
}
