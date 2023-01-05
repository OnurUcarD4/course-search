import React, { useEffect } from "react";
import Card from "./card";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { setCopyData, setData } from "../../../redux/slices/filterSlice";

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
      Rating: 4.6,
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
      Title: "Complete C# Unity Game Developer 3D Development",
      Desc: "Design & Develop Video Games. Learn C# in Unity Engine. Code Your first 3D Unity games for web, Mac & PC.",
      CourseLink: "https://www.udemy.com/course/unitycourse2/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/1178124_76bb_11.jpg",
      Rating: 4.7,
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
      Rating: 4.5,
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
    {
      Id: 4,
      Title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      Desc: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
      CourseLink:
        "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      CourseImage:
        "https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
      Rating: 4,
      RatingCount: "172,237",
      RatingLink:
        "https://www.udemy.com/course/react-the-complete-guide-incl-redux/#reviews",
      Students: "681,338",
      Language: "English",
      Author: "Maximilian Schwarzmüller",
      AuthorLink: "https://www.udemy.com/user/academind/",
      Update: "01/2023",
      Price: "49.99",
      Hours: "49",
      Category: "ReactJS",
    },
    {
      Id: 5,
      Title: "Learn Python: The Complete Python Programming Course",
      Desc: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
      CourseLink: "https://www.udemy.com/course/pythonforbeginners/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      Rating: 3.5,
      RatingCount: "4,356",
      RatingLink: "https://www.udemy.com/course/pythonforbeginners/#reviews",
      Students: "24,817",
      Language: "English",
      Author: "Avinash Jain",
      AuthorLink: "https://www.udemy.com/user/avinashjain5/",
      Update: "09/2015",
      Price: "49.99",
      Hours: "14",
      Category: "Python",
    },
    {
      Id: 6,
      Title: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
      Desc: "Full Practice Exam | Learn Cloud Computing | Pass the AWS Certified Solutions Architect Associate Certification SAA-C03!",
      CourseLink:
        "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg",
      Rating: 4.7,
      RatingCount: "161,571",
      RatingLink:
        "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/#reviews",
      Students: "703,164",
      Language: "English",
      Author: "Stephane Marek",
      AuthorLink: "https://www.udemy.com/user/stephane-maarek/",
      Update: "01/2023",
      Price: "49.99",
      Hours: "27",
      Category: "AWS Certification",
    },
    {
      Id: 7,
      Title: "Complete Guitar Lessons System - Beginner to Advanced",
      Desc: "All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra",
      CourseLink:
        "https://www.udemy.com/course/complete-guitar-system-beginner-to-advanced/",
      CourseImage: "https://img-c.udemycdn.com/course/240x135/42271_886a_9.jpg",
      Rating: 4.6,
      RatingCount: "37,723",
      RatingLink:
        "https://www.udemy.com/course/complete-guitar-system-beginner-to-advanced/#reviews",
      Students: "264,974",
      Language: "English",
      Author: "Erich Andreas",
      AuthorLink: "https://www.udemy.com/user/erichandreas/",
      Update: "03/2022",
      Price: "69.99",
      Hours: "40",
      Category: "Guitar",
    },
    {
      Id: 8,
      Title: "3ds Max 2018 & V-ray ile Başlangıçtan İleri Seviyeye !!",
      Desc: "Bu kurs sizleri 3Ds Max ve V-ray'de temel seviyeden uzman seviyesine götürecek bilgilerle dolu bir rehberdir.",
      CourseLink: "https://www.udemy.com/course/3ds-max-2018-v-ray-egitimi/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/800754_bb25_2.jpg",
      Rating: 4.7,
      RatingCount: "2,212",
      RatingLink:
        "https://www.udemy.com/course/3ds-max-2018-v-ray-egitimi/#reviews",
      Students: "6,832",
      Language: "Türkçe",
      Author: "Sinan Korkulu",
      AuthorLink: "https://www.udemy.com/user/sinan-korkulu/",
      Update: "01/2021",
      Price: "169.99",
      Hours: "32",
      Category: "3ds Max",
    },
    {
      Id: 9,
      Title: "Tüm Aşamalarıyla İnşaat Eğitimi - AUTOCAD/STA4/EXCEL/PROJECT",
      Desc: "Sıfırdan başlayarak örnek bir villa projesi üzerinden AUTOCAD - STA4CAD - MS PROJECT ve EXCEL ile tüm süreci öğrenin.",
      CourseLink: "https://www.udemy.com/course/insaat-egitimi/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/1383438_2875_4.jpg",
      Rating: 5,
      RatingCount: "3,794",
      RatingLink: "https://www.udemy.com/course/insaat-egitimi/#reviews",
      Students: "10,355",
      Language: "Türkçe",
      Author: "Alper Kutlu",
      AuthorLink:
        "https://www.udemy.com/user/4eae7dbb-2292-43ec-92a9-eeeae4843349/",
      Update: "01/2023",
      Price: "169.99",
      Hours: "10.5",
      Category: "Mimarinin Temelleri",
    },
    {
      Id: 10,
      Title: "PLC Fundamentals Hardware Course Scratch (Level I)",
      Desc: "This course will give a person with no prior experience the basic tools necessary to create a PLC program from scratch.",
      CourseLink: "https://www.udemy.com/course/plc-programming-from-scratch/",
      CourseImage:
        "https://img-c.udemycdn.com/course/240x135/118042_251a_12.jpg",
      Rating: 4.6,
      RatingCount: "18,655",
      RatingLink:
        "https://www.udemy.com/course/plc-programming-from-scratch/#reviews",
      Students: "58,687",
      Language: "English",
      Author: "Paul Lynn",
      AuthorLink: "https://www.udemy.com/user/paullynn/",
      Update: "09/2022",
      Price: "49.99",
      Hours: "10",
      Category: "PLC",
    },
  ];

  const options = [];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    dispatch(setData(dummyData));
    dispatch(setCopyData(dummyData));
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="bg-white h-auto font-semibold drop-shadow-md p-4 mt-4">
      <div className="border-b pb-4">
        <span className="">Filter</span>
        <Select
          mode="tags"
          className="w-60 ml-8 mt-4"
          placeholder="Enter tags..."
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="mt-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   text-2xl ">
          {dummyData.map((g) => {
            return <Card data={g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
