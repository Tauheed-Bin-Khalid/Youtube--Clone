import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "../utils/axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if(type){
      try {
        console.log("Type",type)
        const fetchVideos = async () => {
          const res = await axios.get(`/videos/${type}`);
          setVideos(res.data);
        };
        fetchVideos();
        
      } catch (error) {
        console.log(error)
      } 
    }
    
    // const fetchVideos = async () => {
    //   const res = await axios.get(`/videos/${type}`);
    //   setVideos(res.data);
    // };
    // fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  );
};

export default Home;