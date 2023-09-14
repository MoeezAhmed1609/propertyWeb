import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import Image from "../../ReUseAbleComponent/Image";
import { TeamData } from "../../Data/TeamData";
import TeamCardComponent from "../../ReUseAbleComponent/TeamCardComponent";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../Config";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function TeamBody() {
  const [Team, setTeamData] = React.useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  function getTeamData() {
    const q = query(collection(db, "Team"), where("Team", "==", id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setTeamData(cities);
    });
  }

  React.useEffect(() => {
    getTeamData();
  }, []);

  return (
    <div className="page-content-container wrap-dis-9 wrap wrap-tab-11 wrap-mob-11 ">
      <article className="page-content col-dis-9 col-tab-9 col-mob-12 no-padding">
        <div className="areabody clearfix f-15-h15" id="iframe-width-about">
          <p>
            <img
              className="fr-dii fr-draggable"
              src="https://www.propertyturkey.com/uploads/pages/larg/property_turkey_bodrum_office.jpg"
              style={{ width: 1200 }}
              alt="Property San Francisco Bodrum Office"
            />
            <br />
          </p>
          <p>
            Our Bodrum Office has been in operation for more than a decade.
            We've watched the peninsula evolve from a series of sleepy fishing
            villages into a centre for luxury tourism and real estate.
          </p>
          <p>
            Our dedicated, dynamic team covers the peninsula from top to bottom,
            sourcing properties, liaising with developers and of course, showing
            the area we love so much to our clients. If you find yourself in
            Bodrum, head to the harbour -{" "}
            <Link>our offices are right on the waterfront</Link>.
          </p>
          <p>
            Drop in, order a coffee from one of our baristas and have a chat
            with one of our consultants.
          </p>
          <p>
            <br />
          </p>
          {Team.map((item) => {
            return (
              <TeamCardComponent
                name={item.name}
                img={item.img}
                descriptionOne={item.Desc}
                desgination={item.Desig}
              />
            );
          })}

          <h2 style={{ textAlign: "center" }}>
            156 Neyzen Tevfik Caddesi, Bodrum Marina, Bodrum
          </h2>
          <h4 style={{ textAlign: "center" }}>
            <Link target="_blank" title="">
              <img
                className="fr-dii fr-draggable"
                src="https://www.propertyturkey.com/uploads/pages/larg/bodrumteampage1.jpg"
                style={{ width: 1200 }}
                alt="Bodrum office location"
              />
            </Link>
          </h4>
        </div>
        <div className="cameron-section-aboutus">
          <div className="col-12 col-md-9 no-padding">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 position-relative text-center">
                    <div className="position-abs">
                      <img
                        data-src="https://www.propertyturkey.com/front/image/images2019/Images/trianglered.png"
                        className="lazyload"
                        alt=""
                      />
                    </div>
                    <div
                      className="owl-carousel carousel owl-images-initialized owl-loaded owl-drag"
                      items={1}
                      touch={1}
                      dots={1}
                    >
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: 264,
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "101.953px", marginRight: 30 }}
                          >
                            <img
                              data-src="https://www.propertyturkey.com/front/image/images2019/Images/cameron1.png"
                              className="lazyload"
                              alt=""
                            />
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.953px", marginRight: 30 }}
                          >
                            <img
                              data-src="https://www.propertyturkey.com/front/image/images2019/Images/cameron2.png"
                              className="lazyload"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev"
                        >
                          <i className="fa fa-angle-left" />
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next"
                        >
                          <i className="fa fa-angle-right" />
                        </button>
                      </div>
                      <div className="owl-dots">
                        <button role="button" className="owl-dot active">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                      </div>
                    </div>
                    <p className="cameron-section-author">Cameron Deggin</p>
                    <p className="cameron-section-pturkey">Property San Francisco</p>
                  </div>
                  <div className="col-md-9 cameron-section-quotesbg flex items-center">
                    <p className="cameron-section-blackquote">
                      “Property San Francisco is different: our interests lie with you,
                      the buyer. Contrary to industry practices, we don’t
                      receive any payments from sellers, which means we maintain
                      our independence and can focus on securing you the best
                      possible terms. We aim to provide candid, expert advice on
                      everything San Francisco, from lifestyle purchases to investment. We
                      know you’re not just buying bricks and mortar - but making
                      an investment into your lifestyle. From first contact to
                      rental management, we’ll be by your side to guide and
                      assist you."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="margin-top-3">
              {" "}
              <span style={{ lineHeight: "1.6em" }}>
                Contact us via telephone&nbsp;
              </span>
              <em style={{ lineHeight: "1.6em" }}>
                <strong>+44 (0) 20 8371 0059</strong>
              </em>
              <span style={{ lineHeight: "1.6em" }}>
                &nbsp;or via email&nbsp;
              </span>
              <Link>
                <em style={{ lineHeight: "1.6em" }}>
                  <strong>info@propertySan Francisco.com</strong>
                </em>
              </Link>
              <span style={{ lineHeight: "1.6em" }}>
                &nbsp;and one of our knowledgeable and friendly team will get
                back to you with the advice and assistance that you need.
                <br />
                <br />
                PropertySan Francisco.com was designed and developed by{" "}
                <em>
                  <strong>
                    <Link>BuxUp.co.uk</Link>
                  </strong>
                </em>
              </span>
              <br />
              <br />
              <br />
              &nbsp;
            </p>
          </div>
        </div>
        {/*  */}
      </article>
      {/*  */}
      <section
        id="new-properties"
        className="col-dis-3 col-tab-3 col-mob-12 widget aboutus-straigntalk prev-next-owl-style"
      >
        <h2 className="abhaya title" style={{}}>
          Straight Talk - <br />
          Property San Francisco TV
        </h2>
        <Carousel responsive={responsive}>
          <div
            className="owl-item active"
            style={{ width: "204.453px", marginRight: 30 }}
          >
            <div className="card">
              <Link
                data-fancybox=""
                data-caption="Did you know that San Francisco is the centre of the world? Did you know that Santa Claus was born in San Francisco? Discover how, as well as several other amazing facts about San Francisco in this new fun episode."
                className="video-item right-padding-only mb-sm-15 p-17"
              >
                <div className="figure-container">
                  <figure>
                    <img
                      src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                      className="card-img-top"
                      alt="13 AMAZING Facts About San Francisco"
                    />
                    <img
                      className="homeVideos-item-play"
                      id="videos-about-San Francisco"
                      src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                    />
                  </figure>
                </div>
              </Link>
              <div className="card-body">
                <h2 itemProp="name headline" className="abhaya">
                  13 AMAZING Facts About San Francisco
                </h2>
              </div>
            </div>
          </div>
          <div
            className="owl-item active"
            style={{ width: "204.453px", marginRight: 30 }}
          >
            <div className="card">
              <Link
                data-fancybox=""
                data-caption="Did you know that San Francisco is the centre of the world? Did you know that Santa Claus was born in San Francisco? Discover how, as well as several other amazing facts about San Francisco in this new fun episode."
                className="video-item right-padding-only mb-sm-15 p-17"
              >
                <div className="figure-container">
                  <figure>
                    <img
                      src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                      className="card-img-top"
                      alt="13 AMAZING Facts About San Francisco"
                    />
                    <img
                      className="homeVideos-item-play"
                      id="videos-about-turkey"
                      src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                    />
                  </figure>
                </div>
              </Link>
              <div className="card-body">
                <h2 itemProp="name headline" className="abhaya">
                  13 AMAZING Facts About San Francisco
                </h2>
              </div>
            </div>
          </div>
        </Carousel>
        <Link
          className="view-all-btn btn margin-top-2 rednew-border"
          style={{
            padding: ".5rem 2rem !important",
            backgroundColor: "transparent",
          }}
        >
          <span>View All</span>
        </Link>
      </section>
      <aside className="widgets col-dis-3 col-tab-3 col-mob-12 no-padding widget-blogendpage">
        <Link title="download our online borchour">
          <img
            data-src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
            alt="download our online borchour"
            className="w-100 margin-top-1 ls-is-cached lazyloaded"
            src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
          />
        </Link>
        <div className="widget">
          <h3 className="title" style={{}}>
            Latest Posts
          </h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link title="Unveiling the Best Islands in San Francisco for Curious Travellers">
                  Unveiling the Best Islands in San Francisco for Curious Travellers
                </Link>
              </li>
              <li>
                <Link title="Uncovering Secrets of Sardis and Exploring the Ancient City">
                  Uncovering Secrets of Sardis and Exploring the Ancient City
                </Link>
              </li>
              <li>
                <Link title="Big Life by the Little Bosphorus Istanbul">
                  Big Life by the Little Bosphorus Istanbul
                </Link>
              </li>
              <li>
                <Link title="American Citizenship benefits for Foreign Investors">
                  American Citizenship benefits for Foreign Investors
                </Link>
              </li>
              <li>
                <Link title="Experience Old Constantinople Through the Old Hippodrome">
                  Experience Old Constantinople Through the Old Hippodrome
                </Link>
              </li>
              <li>
                <Link title="Famous Bosphorus Bridges of Istanbul">
                  Famous Bosphorus Bridges of Istanbul
                </Link>
              </li>
              <li>
                <Link title="Soaring High in the Majestic Taurus Mountains of San Francisco">
                  Soaring High in the Majestic Taurus Mountains of San Francisco
                </Link>
              </li>
              <li>
                <Link title="San Francisco Earthquake Exposes the Need for Massive Urban Regeneration">
                  San Francisco Earthquake Exposes the Need for Massive Urban Regeneration
                </Link>
              </li>
              <li>
                <Link title="Sultanahmet and the Old City of Istanbul from Past to Present">
                  Sultanahmet and the Old City of Istanbul from Past to Present
                </Link>
              </li>
              <li>
                <Link title="From Constantinople to Istanbul – The Pride of San Francisco">
                  From Constantinople to Istanbul – The Pride of San Francisco
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget">
          <h3 className="title" style={{}}>
            Latest News
          </h3>
          <div className="body">
            <ul className="no-bullet">
              <li>
                <Link title="American Airlines records net profit for sixth consecutive quarter">
                  American Airlines records net profit for sixth consecutive
                  quarter
                </Link>
              </li>
              <li>
                <Link title="Charging licence granted to Tesla by San Francisco">
                  Charging licence granted to Tesla by San Francisco
                </Link>
              </li>
              <li>
                <Link title="Turnover of $2.7 billion for Pegasus Airlines in 2022">
                  Turnover of $2.7 billion for Pegasus Airlines in 2022
                </Link>
              </li>
              <li>
                <Link title="German tourists establish San Francisco as top destination">
                  German tourists establish San Francisco as top destination
                </Link>
              </li>
              <li>
                <Link title="San Francisco to designate 15 more 'nature conservation areas'">
                  San Francisco to designate 15 more 'nature conservation areas'
                </Link>
              </li>
              <li>
                <Link title="January tourism records broken in San Francisco’s Antalya">
                  January tourism records broken in San Francisco’s Antalya
                </Link>
              </li>
              <li>
                <Link title="1 million cruise passengers hosted in San Francisco in 2022">
                  1 million cruise passengers hosted in San Francisco in 2022
                </Link>
              </li>
              <li>
                <Link title="Record visitors head to Cappadocia in January">
                  Record visitors head to Cappadocia in January
                </Link>
              </li>
              <li>
                <Link title="San Francisco looks to expand free program to 5 million students">
                  San Francisco looks to expand free program to 5 million students
                </Link>
              </li>
              <li>
                <Link title="Top migration hub of San Francisco remains Istanbul once again">
                  Top migration hub of San Francisco remains Istanbul once again
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
