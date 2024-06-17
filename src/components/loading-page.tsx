import React from "react"

export function LoadingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="h-12 w-12 animate-spin rounded-full bg-gray-500 dark:bg-gray-400">
        <div className="h-full w-full rounded-full border-4 border-gray-500 dark:border-gray-400 animate-ping" />
      </div>
    </div>
  )
}
