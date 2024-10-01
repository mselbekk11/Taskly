import clsx from 'clsx';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Doc, Id } from '@/convex/_generated/dataModel';
import AddTaskDialog from '../add-tasks/AddTaskDialog';

export default function Task({
  data,
  _id,
  isCompleted,
  handleOnChange,
}: {
  data: Doc<'todos'>;
  _id: Id<'todos'>;
  isCompleted: boolean;
  handleOnChange: any;
}) {
  const { taskName } = data;
  return (
    <div
      key={_id}
      className='flex items-center space-x-2 border-b-2 p-2 border-gray-100 animate-in fade-in'
    >
      <Dialog>
        <div className='flex gap-2 items-center justify-end w-full'>
          <div className='flex gap-2 w-full'>
            <Checkbox
              id='todo'
              className={clsx(
                'w-5 h-5 rounded-xl',
                isCompleted &&
                  'data-[state=checked]:bg-gray-300 border-gray-300'
              )}
              checked={isCompleted}
              onCheckedChange={handleOnChange}
            />
            <DialogTrigger asChild>
              <div className='flex flex-col items-start'>
                <button
                  className={clsx(
                    'text-sm font-normal text-left',
                    isCompleted && 'line-through text-foreground/30'
                  )}
                >
                  {taskName}
                </button>
              </div>
            </DialogTrigger>
          </div>
          <AddTaskDialog data={data} />
        </div>
      </Dialog>
    </div>
  );
}
