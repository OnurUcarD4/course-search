import React from "react";

const SearchArea = () => {
  const dummyData = [
    {
      Id: 1,
      Title: "Blender & Substance: Modeling and texturing videogame props",
      Desc: "Learn the complete workflow of the models for videogames and create ¡five assets! using Blender and Substance Painter",
      CourseLink:
        "https://www.udemy.com/course/next-gene-assets-for-videogames/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/1642266_c156_8.jpg",
      Rating: "4.6",
      RatingCount: "431",
      RatingLink:
        "https://www.udemy.com/course/next-gene-assets-for-videogames/#reviews",
      Students: "2,361",
      Language: "English",
      Author: "Jose Moreno",
      AuthorLink:
        "https://www.udemy.com/user/fb130209-02fc-40b5-a802-26e290687abf/",
      Update: "02/2021",
      Price: "49.99",
      Hours: "14.5",
      Category: "3D & Animation",
    },
    {
      Id: 2,
      Title: "Complete C# Unity Game Developer 3D",
      Desc: "Design & Develop Video Games. Learn C# in Unity Engine. Code Your first 3D Unity games for web, Mac & PC.",
      CourseLink: "https://www.udemy.com/course/unitycourse2/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/1178124_76bb_11.jpg",
      Rating: "4.7",
      RatingCount: "37,282",
      RatingLink: "https://www.udemy.com/course/unitycourse2/#reviews",
      Students: "197,117",
      Language: "English",
      Author: "Ben Tristem",
      AuthorLink: "https://www.udemy.com/user/bentristem/",
      Update: "07/2022",
      Price: "69.99",
      Hours: "30.5",
      Category: "Game Development",
    },
    {
      Id: 3,
      Title: "Java Programming for Complete Beginners",
      Desc: "Java Programming for Beginners to Java Object Oriented Programming. Core Java + REST API with Spring Boot. Java 8 to 16.",
      CourseLink:
        "https://www.udemy.com/course/java-programming-tutorial-for-beginners/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/1535678_0ce9_7.jpg",
      Rating: "4.5",
      RatingCount: "30,879",
      RatingLink: "https://www.udemy.com/course/unitycourse2/#reviews",
      Students: "189,566",
      Language: "English",
      Author: "in28Minutes Official",
      AuthorLink: "https://www.udemy.com/user/in28minutes/",
      Update: "12/2022",
      Price: "49.99",
      Hours: "33.5",
      Category: "Java",
    },
  ];
  return (
    <div className="mt-4 text-2xl bg-white h-96 flex font-semibold drop-shadow-md">
      SearchArea
    </div>
  );
};

export default SearchArea;
