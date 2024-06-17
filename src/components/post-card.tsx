import { Button } from "../components/ui/button";
import { EditPost, Post } from "../types/types";
import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { truncateText } from "../lib/truncate";
import { fetchRandomImage } from "../services/imageService";

interface PostCardProps {
  post: Post;
  onPostUpdate: (updatedPost: EditPost) => void;
  onPostDelete: (postId: number) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onPostUpdate,
  onPostDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editPost, setEditPost] = useState<EditPost>(post);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    setEditPost(post);
  }, [post]);

  useEffect(() => {
    const loadRandomImage = async () => {
      const randomImageUrl = await fetchRandomImage();
      setImageUrl(randomImageUrl);
    };
    loadRandomImage();
  }, []);

  const handleEditClick = () => {
    setIsOpen(true);
  };

  const handleSaveClick = () => {
    try {
      // Update the post in the parent component and localStorage
      onPostUpdate(editPost);
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to update post", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditPost((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setEditPost((prev) => ({
      ...prev,
      body: value,
    }));
  };

  const handleDeleteClick = () => {
    onPostDelete(post.id);
  };

  return (
    <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img
        alt="Postcard Image"
        className="w-full h-48 object-cover"
        height="200"
        src={`https://source.unsplash.com/random/400x200?sig=${post.id}`}
        style={{
          aspectRatio: "400/200",
          objectFit: "cover",
        }}
        width="400"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {post.title}
          </h3>
          <div className="flex gap-2">
            <Button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              size="icon"
              variant="ghost"
              onClick={handleEditClick}
            >
              <FilePenIcon className="w-5 h-5" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
              size="icon"
              variant="ghost"
              onClick={handleDeleteClick}
            >
              <TrashIcon className="w-5 h-5" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-5 h-5 text-red-500" />
            <span className="text-gray-700 dark:text-gray-300">
              {post.reactions?.likes} likes
            </span>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">
              {post.views} views
            </span>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          {truncateText(post.body, 20)}
        </p>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Edit Post</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Update the content of your post.
              </p>
            </div>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveClick();
              }}
            >
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    type="text"
                    id="title"
                    value={editPost.title}
                    onChange={handleTitleChange}
                    placeholder="Enter a title for your post"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    className="min-h-[200px]"
                    id="content"
                    value={editPost.body}
                    onChange={handleBodyChange}
                    placeholder="Write the content of your post"
                  />
                </div>
              </div>
              <Button type="submit" className="mr-2">
                Save
              </Button>
              <Button onClick={() => setIsOpen(false)} variant="ghost">
                Cancel
              </Button>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FilePenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
