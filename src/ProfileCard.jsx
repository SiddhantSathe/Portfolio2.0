import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProfileContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 400px;
  padding: 30px;
  text-align: center;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled(motion.h1)`
  font-size: 2.2rem;
  color: #333;
  margin: 0;
`;

const ProfileTitle = styled(motion.h3)`
  font-size: 1.2rem;
  color: #af4261;
  margin-bottom: 10px;
`;

const ProfileInfo = styled(motion.p)`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

const ProfileButton = styled(motion.button)`
  background: #af4261;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: #f3ec78;
    color: #af4261;
  }
`;

function ProfileCard() {
  return (
    <ProfileContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <ProfileImage
          src="https://via.placeholder.com/150"
          alt="profile"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <ProfileName
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Siddhant Sathe
        </ProfileName>
        <ProfileTitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Web Developer
        </ProfileTitle>
        <ProfileInfo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Passionate about creating interactive web applications and providing
          delightful user experiences.
        </ProfileInfo>
        <ProfileButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Follow
        </ProfileButton>
      </Card>
    </ProfileContainer>
  );
}

export default ProfileCard;
