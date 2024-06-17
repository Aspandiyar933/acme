export interface Post {
    id: number;
    title: string;
    body: string;
    reactions?: {
      likes?: number,
    };
    views?: number;
    userId?: number;
  }
  
  export interface PostsResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface EditPost {
    id: number;
    title: string;
    body: string;
  }