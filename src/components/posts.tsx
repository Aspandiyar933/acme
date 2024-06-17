"use client";

import { EditPost, Post, PostsResponse } from "@/types/types";
import { LoadingPage } from "@/components/loading-page";
import { PostCard } from "@/components/post-card";
import axios from "axios";
import { useEffect, useState } from "react";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostsResponse>(
          "https://dummyjson.com/posts"
        );
        setPosts(response.data.posts);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostUpdate = (updatedPost: EditPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handlePostDelete = (postId: number) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  if (loading) return <LoadingPage />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPostUpdate={handlePostUpdate}
            onPostDelete={handlePostDelete}
          />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
