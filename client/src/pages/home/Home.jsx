import { useEffect, useState } from "react";
// import { axiosInstance } from "../../config";
import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router";
import axios from "axios";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`posts${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
