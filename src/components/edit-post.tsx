/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/1AfWmkemHp6
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"

export function EditPost() {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Update the content of your post.</p>
        </div>
        <form className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input defaultValue="My Awesome Post" id="title" placeholder="Enter a title for your post" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                className="min-h-[200px]"
                defaultValue="This is the content of my awesome post. I can update it here."
                id="content"
                placeholder="Write the content of your post"
              />
            </div>
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  )
}
