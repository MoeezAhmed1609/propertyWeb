import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../ReUseAbleComponent/Header";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Box, Divider, Typography } from "@mui/material";
import Image from "../../ReUseAbleComponent/Image";
import Path from "../../assets/AboutTurkeyTagImages/Path302.svg";
import FactsAboutTurkey from "../../assets/AboutTurkeyTagImages/19-facts-about-turkey.png";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { PageHeaderData } from "../../Data/About";
import PageHeader from "../../ReUseAbleComponent/PageHeader";
import { TypographyComponent } from "../../ReUseAbleComponent/TypographyComponent";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../Config";
import RawHTMLRenderer from "../../ReUseAbleComponent/RawHTMLRenderer";
import useFirestoreQuery from "../../Hooks/useFirestoreQuery";

export default function About_Turkey__Tag() {
  const [toggleMedditerrian, settoggleMedditerrian] = useState(false);
  const [toggleAegean, settoggleAegean] = useState(false);
  const [toggleMarmara, settoggleMarmara] = useState(false);
  const [toggleLycian, settoggleLycian] = useState(false);
  const [toggleTurquoise, settoggleTurquoise] = useState(false);
  const [toggleBlackSea, settoggleBlackSea] = useState(false);
  const [toggleAirports, settoggleAirports] = useState(false);
  const [toggleWeather, settoggleWeather] = useState(false);
  const [HandleContent, setHandleContents] = useState([]);
  const [ReadContent, setReadContent] = useState([]);
  const [MarmaraRegion, setMarmaraRegion] = useState([]);
  const [SenFransico, setSenFransico] = useState([]);

  const [data, setData] = useState([]);

  const { UsaData, isLoading } = useFirestoreQuery("/RegionsInfo");

  const HandleFetchData = () => {
    const q = query(
      collection(db, "Contents"),
      where("key", "==", "Aegean region")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setHandleContents(cities);
    });
  };

  const HandleMarmarRegion = () => {
    const q = query(
      collection(db, "Contents"),
      where("key", "==", "Marmara region")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setMarmaraRegion(cities);
    });
  };
  const FransicoCulture = () => {
    const q = query(
      collection(db, "Contents"),
      where("key", "==", "About Sen Francisco Culture")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setSenFransico(cities);
    });
  };

  useEffect(() => {
    HandleFetchData();
    HandleMarmarRegion();
    FransicoCulture();
  }, []);

  // Moeez Ahmed
  const [link, setLink] = useState('About California')
  const [index, setIndex] = useState(0)
  function removewithfilter(arr) {
    let outputArray = arr.filter(function (v, i, self) {

      // It returns the index of the first
      // instance of each value
      return i == self.indexOf(v);
    });

    return outputArray;
  }

  const ReadData = () => {
    const q = query(collection(db, "Contents"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      setReadContent(cities);
    });
  };

  let keys = []
  let contents = []
  ReadContent.map((c) => {
    if (c.page === 'San Francisco') {
      keys.push(c.key)
    }
  })
  keys = removewithfilter(keys)
  ReadContent.map((c) => {
    keys.map((key) => {
      if (c.key === key) {
        contents.push({
          key,
          c
        })
      }
    })
  })
  // console.log({ keys })
  console.log({ contents })

  useEffect(() => {
    ReadData();
  }, []);

  return (
    <>
      <section id="main" className="cf  disable-copy ">
        <Header title="About San Francisco" />
        <Box className="buyer-guide" style={{ backgroundColor: "#f7f5f2" }}>
          <Box className="row">
            <Box className="col-12 col-md-3 buyer-guide--side-bar-bg">
              <Box className="container-fluid">
                <Typography varient="p" className="buyer-guide--title">
                  About San Francisco
                </Typography>
                {/* use */}
                {keys.map((key, i) => (
                  <Box key={i} className="padding-top-2 side-item">
                    <Box className="buyer-guide--supertitle">
                      <Typography
                        variant="h6"
                        title="Mediterranean region"
                        sx={{ color: 'black' }}
                      >
                        {key}
                      </Typography>
                      <FiChevronDown
                        onClick={() => {
                          settoggleMedditerrian(!toggleMedditerrian);
                          setIndex(i + 1)
                        }
                        }
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    </Box>
                    <ul
                      className={`list-unstyled buyer-guide--ul ${index === i + 1 && toggleMedditerrian ? "" : "hide"
                        }`}
                    >
                      {contents.map((data, i) => {
                        if (data.key === key) {
                          return (
                            <li key={i}>
                              <Link onClick={() => setLink(data.c.link)}>
                                {data.c.link}
                              </Link>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="col-12  col-md-9  buyer-guide--side-bar-bg-details">
              <Box className="container-fluid">
                <PageHeader
                  key={PageHeaderData[0].id}
                  Name={PageHeaderData[0].Name}
                  createdAt={PageHeaderData[0].Created}
                  UpdatedAt={PageHeaderData[0].Updated}
                />
                <article className="page-content">
                  {ReadContent.filter(
                    (item) => item.link === link
                  ).map((item) => {
                    return <RawHTMLRenderer html={item.value} />;
                  })}
                </article>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}
