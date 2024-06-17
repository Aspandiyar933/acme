/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/78TyRSFkZfB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function PostForm() {
  return (
    <div className="w-full max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Post Form</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Submit your post here and we'll review it.
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter a title" required type="text" />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea className="min-h-[240px]" id="content" placeholder="Enter your post content" required />
          </div>
          <Button className="w-full" type="submit">
            Submit Post
          </Button>
        </form>
      </div>
    </div>
  )
}
