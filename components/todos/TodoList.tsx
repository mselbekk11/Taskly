'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import Task from './Task';
import Todos from './todos';
import CompletedTodos from './CompletedTodos';
import { AddTaskWrapper } from '../add-tasks/AddTaskButton';

export default function TodoList() {
  const todos = useQuery(api.todos.get) ?? [];
  const completedTodos = useQuery(api.todos.completedTodos) ?? [];
  const inCompleteTodos = useQuery(api.todos.inCompleteTodos) ?? [];
  const totalTodos = useQuery(api.todos.totalTodos) ?? 0;

  if (
    todos === undefined ||
    completedTodos === undefined ||
    inCompleteTodos === undefined
  ) {
    <p>Loading...</p>;
  }

  return (
    <div className='xl:px-40'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold md:text-2xl'>Inbox</h1>
      </div>

      <div className='flex flex-col gap-1 py-4'>
        <Todos items={inCompleteTodos} />
      </div>
      <AddTaskWrapper />
      <div className='flex flex-col gap-1 py-4'>
        <Todos items={completedTodos} />
      </div>

      <CompletedTodos totalTodos={totalTodos} />
    </div>
  );
}
