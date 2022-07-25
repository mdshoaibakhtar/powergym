/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    {/* <GymSubtitle /> */}
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="You Can Do Your Daily Excercise, With Personal Trainers, Who Help You To Do The Excercise."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="We Offer Advanced Course For You, In This Muscle Course We Offer Different Different Training's With Our Professional"
      />
      <GymProgramCard
        title="New Gym Training"
        desc="If You Wish To Take Admission In Our Gym And Want To Be A Part Of This Gym Then Feel Free To Contact."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="In Our Gym We Also Provides Yoga Training Which Is Most Popular now A Day, Register To Get The Info."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="You can Do Only Basic Things With Our Trainers Which is Free Of Cost, If You Want To Be The Memeber Of Our Gym, Please Conrtact Us."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="If You Are Very Passionate About Your Body And Want To Be Professional In This Field Then You Should Contact Us."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
