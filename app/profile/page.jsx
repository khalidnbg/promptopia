"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const hanldeEdit = async () => {};
  const handleDelete = async () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      hanldeEdit={hanldeEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
