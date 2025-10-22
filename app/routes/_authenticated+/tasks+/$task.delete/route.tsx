import { setTimeout as sleep } from "node:timers/promises"
import { data } from "react-router"
import { dataWithSuccess } from "remix-toast"
import { tasks } from "../_shared/data/tasks"
import type { Route } from "./+types/route"

export const action = async ({ params }: Route.ActionArgs) => {
  const taskIndex = tasks.findIndex((t) => t.id === params.task)
  if (taskIndex === -1) {
    throw data(null, { status: 404, statusText: "Task not found" })
  }

  // Delete the task
  await sleep(1000)
  tasks.splice(taskIndex, 1)

  return dataWithSuccess(
    {
      done: true,
    },
    {
      message: "Task deleted successfully",
      description: `Task with ID ${params.task} has been deleted.`,
    }
  )
}

export function TaskDeleteConfirmDialog() {
  //   {
  //   task,
  //   open,
  //   onOpenChange,
  // }: {
  //   task: Task
  //   open: boolean
  //   onOpenChange: (v: boolean) => void
  // }
  return null
}
