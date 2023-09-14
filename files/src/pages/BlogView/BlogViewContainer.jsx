import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { db } from '../../Config';
import RawHTMLRenderer from '../../ReUseAbleComponent/RawHTMLRenderer';

export default function BlogViewContainer() {
  const { id } = useParams();
  const [blog, setBlog] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);


  const HandleBlog = async () => {
    const q = query(collection(db, "Blogs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setBlogs(cities)

      const newArr = cities.filter(item => item.id === id);
      console.log(newArr)
      setBlog(newArr)

    });
  }
  React.useEffect(() => {
    HandleBlog()
  }, [id]);


  return (
    <div
      className="article-container"
      itemScope=""
      itemType="http://schema.org/BlogPosting"
    >
      <div className="endpage-main-intro ">
        <div className="endpage-title-actions">
          <div className="endpage-title">
            <h3 className="d-mobile">
              <label className="author">
                <a
                  href="https://www.propertyturkey.com/related-blogs/keyword?keyword=Turkish history"
                  title="American history"
                >
                  American history
                </a>
                ,{" "}
                <a
                  href="https://www.propertyturkey.com/related-blogs/keyword?keyword="
                  title=""
                />
              </label>
              <label className="date ">Created : 16 June 2023</label>
            </h3>
            <div className="endpage-actions d-mobile share-btn-pos">
              <a href="#" className="social-shares">
                <img
                  src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                  width={21}
                  alt=""
                />
              </a>
            </div>
            <h1 itemProp="name headline" className="page-title abhaya">
              {blog[0]?.title}
            </h1>
            <h3 className="d-desk">
              <label className="author">
                <a
                  href="https://www.propertyturkey.com/related-blogs/keyword?keyword=Turkish history"
                  title="American history"
                >
                  American history
                </a>
                ,{" "}
                <a
                  href="https://www.propertyturkey.com/related-blogs/keyword?keyword="
                  title=""
                />
              </label>
              <div className="flex">
                <div className="d-desk">
                  <h3 className="written_by">
                    <img
                      src="https://www.propertyturkey.com/front/image/user-regular.svg"
                      width={18}
                    />
                    By:{" "}
                    <a href="https://www.propertyturkey.com/about-us/cameron-deggin">
                      {" "}
                      Cameron Deggin{" "}
                    </a>
                  </h3>
                </div>
                <label className="date no-margin ml-1-important">
                  <span className="clr-pt">Created</span> : 16 June 2023
                </label>
              </div>
            </h3>
            <div className="d-mobile">
              <h3 className="written_by">
                <img
                  src="https://www.propertyturkey.com/front/image/user-regular.svg"
                  width={15}
                />
                By: <a href="#"> Cameron Deggin </a>
              </h3>
            </div>
          </div>
          <div className="endpage-actions d-desk">
            <a href="#" className="social-shares">
              <img
                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="page-content-container wrap-dis-9 wrap wrap-tab-11 wrap-mob-11 ">
        <article className="page-content col-dis-9 col-tab-9 col-mob-12 no-padding">
          <RawHTMLRenderer html={blog[0]?.value} />
          <span
            itemProp="image"
            itemScope=""
            itemType="http://schema.org/ImageObject"
          >
            <meta
              itemProp="url"
              content="https://www.propertyturkey.com/files/large/economicgrowth_turkey.jpg"
            />
            <meta itemProp="height" content={800} />
            <meta itemProp="width" content={800} />
          </span>
        </article>
        {/* <div className="text-center-xs flex-xl">
          <a
            className="view-all-btn btn rednew-border margin-1"
            style={{ marginTop: 0, marginLeft: 0 }}
            data-fancybox=""
            data-src="#subscribe-media-modal"
            href="javascript:;"
          >
            <span>Subscribe to get the latest Blogs</span>
          </a>
        </div> */}
        {/* <section
          id="new-properties"
          className="col-dis-3 col-tab-3 col-mob-12 widget new-buyerguide prev-next-owl-style"
        >
          <h2 className="abhaya title" style={{}}>
            Recommended
          </h2>
          <div
            className="owl-carousel carousel owl-images-initialized owl-loaded owl-drag"
            items={1}
            touch={1}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 644,
                  paddingLeft: 30,
                  paddingRight: 30
                }}
              >
                <div
                  className="owl-item active"
                  style={{ width: "115.953px", marginRight: 30 }}
                >
                  <div
                    itemScope=""
                    itemType="http://schema.org/Product"
                    type="Bodrum"
                    className="property-box  cf hot-property"
                    hot="Hot Property"
                  >
                    <link
                      itemProp="additionalType"
                      href="https://www.productontology.org/id/Condominium"
                    />
                    <div className="position-relative">
                      <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                        <span>Villa</span>
                      </div>
                      <a
                        className="btn --circle position-abs heart-label border-none"
                        id="inline"
                        href="#logins1"
                        data-id={6957}
                      >
                        <span className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.189"
                            height="18.465"
                            viewBox="0 0 20.189 18.465"
                          >
                            <path
                              id="Heart"
                              d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                              transform="translate(0.975 0.975)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth={2}
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                      <meta
                        itemProp="name"
                        content="Beautiful sea view Koyunbaba villa with shared pool"
                      />
                      <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-222px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: 556
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  alt="Sea view Koyunbaba"
                                  src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  alt="Sea view Koyunbaba"
                                  src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  alt="Sea view Koyunbaba"
                                  src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  alt="Sea view Koyunbaba"
                                  src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  alt="Sea view Koyunbaba"
                                  src="https://www.propertyturkey.com/uploads/realestate/6957/thumb/bodrum_villa_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
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
                        <div className="owl-dots disabled" />
                      </figure>
                      <a
                        href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                        title="Beautiful sea view Koyunbaba villa with shared pool"
                        className="property-title abhaya"
                      >
                        Beautiful sea view Koyunbaba villa with shared pool
                      </a>
                      <a
                        rel="nofollow"
                        href="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                      >
                        <p itemProp="description" limit={600}>
                          Renovated to excellent standards, this charming home is
                          for sale in Koyunbaba area of Bodrum and has access to a
                          shared swimming pool – suitable for families and those
                          moving to Turkey permanently.
                        </p>
                      </a>
                      <div className="features">
                        <div className="location">
                          <img
                            className="icon-location img-fluid"
                            src="https://www.propertyturkey.com/front/image/location.svg"
                          />
                          <span className="quantity">Bodrum</span>
                        </div>
                        <div className="bedrooms flex content-space-evenly">
                          <div>
                            <img
                              className="icon-bedroom img-fluid"
                              src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">3</span>
                          </div>
                        </div>
                        <div className="bathrooms flex content-space-evenly padding-left-05">
                          <div>
                            <img
                              className="icon-bathrooms img-fluid"
                              src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">4</span>
                          </div>
                        </div>
                        <div className="quantity  padding-left-05">200 sq.m</div>
                      </div>
                      <div className="card-actions flex padding-1 content-space-between">
                        <div
                          className="price"
                          itemProp="offers"
                          itemScope=""
                          itemType="http://schema.org/Offer"
                        >
                          <span className="unit-price flex">$610,000</span>
                          <meta itemProp="priceCurrency" content="$610,000" />
                          <meta itemProp="price" content={610000.0} />
                        </div>
                        <div>
                          <a
                            className="quich-enquire-btn abhaya"
                            id="inline"
                            href="#data"
                            data-id={6957}
                            title="Quick Enquire"
                          >
                            <span>Quick Enquire</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <meta
                      itemProp="url"
                      content="https://www.propertyturkey.com/real_estate/6957-beautiful-sea-view-koyunbaba-villa-with-shared-pool"
                    />
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "115.953px", marginRight: 30 }}
                >
                  <div
                    itemScope=""
                    itemType="http://schema.org/Product"
                    type="Istanbul"
                    className="property-box  cf hot-property"
                    hot="Hot Property"
                  >
                    <link
                      itemProp="additionalType"
                      href="https://www.productontology.org/id/Condominium"
                    />
                    <div className="position-relative">
                      <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                        <span>Apartment</span>
                      </div>
                      <a
                        className="btn --circle position-abs heart-label border-none"
                        id="inline"
                        href="#logins1"
                        data-id={4340}
                      >
                        <span className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.189"
                            height="18.465"
                            viewBox="0 0 20.189 18.465"
                          >
                            <path
                              id="Heart"
                              d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                              transform="translate(0.975 0.975)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth={2}
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                      <meta
                        itemProp="name"
                        content="Princess Island sea view apartments in Kartal for sale"
                      />
                      <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-222px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: 556
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  alt="Apartments with Princess island views for sale in Kartal"
                                  src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  alt="Apartments with Princess island views for sale in Kartal"
                                  src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  alt="Apartments with Princess island views for sale in Kartal"
                                  src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  alt="Apartments with Princess island views for sale in Kartal"
                                  src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  alt="Apartments with Princess island views for sale in Kartal"
                                  src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
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
                        <div className="owl-dots disabled" />
                      </figure>
                      <a
                        href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        title="Princess Island sea view apartments in Kartal for sale"
                        className="property-title abhaya"
                      >
                        Princess Island sea view apartments in Kartal for sale
                      </a>
                      <a
                        rel="nofollow"
                        href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                      >
                        <p itemProp="description" limit={600}>
                          Belview Istanbul available at bargain prices not to miss
                          out on, these designer apartments can be purchased in
                          sizes ranging from one – three bedrooms with duplexes and
                          normal floor residences to choose from on the Anatolian
                          side in Dragos.
                        </p>
                      </a>
                      <div className="features">
                        <div className="location">
                          <img
                            className="icon-location img-fluid"
                            src="https://www.propertyturkey.com/front/image/location.svg"
                          />
                          <span className="quantity">Istanbul</span>
                        </div>
                        <div className="bedrooms flex content-space-evenly">
                          <div>
                            <img
                              className="icon-bedroom img-fluid"
                              src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">1</span>
                          </div>
                        </div>
                        <div className="bathrooms flex content-space-evenly padding-left-05">
                          <div>
                            <img
                              className="icon-bathrooms img-fluid"
                              src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">1</span>
                          </div>
                        </div>
                        <div className="quantity  padding-left-05">78 sq.m</div>
                      </div>
                      <div className="card-actions flex padding-1 content-space-between">
                        <div
                          className="price"
                          itemProp="offers"
                          itemScope=""
                          itemType="http://schema.org/Offer"
                        >
                          <span className="unit-price flex">$300,400</span>
                          <meta itemProp="priceCurrency" content="$300,400" />
                          <meta itemProp="price" content={5775000.0} />
                        </div>
                        <div>
                          <a
                            className="quich-enquire-btn abhaya"
                            id="inline"
                            href="#data"
                            data-id={4340}
                            title="Quick Enquire"
                          >
                            <span>Quick Enquire</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <meta
                      itemProp="url"
                      content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                    />
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "115.953px", marginRight: 30 }}
                >
                  <div
                    itemScope=""
                    itemType="http://schema.org/Product"
                    type="Bodrum"
                    className="property-box  cf hot-property"
                    hot="Hot Property"
                  >
                    <link
                      itemProp="additionalType"
                      href="https://www.productontology.org/id/Condominium"
                    />
                    <div className="position-relative">
                      <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                        <span>Villa</span>
                      </div>
                      <a
                        className="btn --circle position-abs heart-label border-none"
                        id="inline"
                        href="#logins1"
                        data-id={6988}
                      >
                        <span className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.189"
                            height="18.465"
                            viewBox="0 0 20.189 18.465"
                          >
                            <path
                              id="Heart"
                              d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                              transform="translate(0.975 0.975)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth={2}
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                      <meta
                        itemProp="name"
                        content="Majestic sea view villa in central Yalikavak Bodrum"
                      />
                      <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-222px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: 556
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  alt="Sea view Yalikavak"
                                  src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  alt="Sea view Yalikavak"
                                  src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  alt="Sea view Yalikavak"
                                  src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  alt="Sea view Yalikavak"
                                  src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  alt="Sea view Yalikavak"
                                  src="https://www.propertyturkey.com/uploads/realestate/6988/thumb/bodrum_villa_1_1-300x200.jpg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
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
                        <div className="owl-dots disabled" />
                      </figure>
                      <a
                        href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                        title="Majestic sea view villa in central Yalikavak Bodrum"
                        className="property-title abhaya"
                      >
                        Majestic sea view villa in central Yalikavak Bodrum
                      </a>
                      <a
                        rel="nofollow"
                        href="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                      >
                        <p itemProp="description" limit={600}>
                          Furnished and ready to move in today, this majestic sea
                          view villa is nestled within a residential area of
                          Yalikavak in Bodrum Peninsula and is just a short walking
                          distance away from a public beach.
                        </p>
                      </a>
                      <div className="features">
                        <div className="location">
                          <img
                            className="icon-location img-fluid"
                            src="https://www.propertyturkey.com/front/image/location.svg"
                          />
                          <span className="quantity">Bodrum</span>
                        </div>
                        <div className="bedrooms flex content-space-evenly">
                          <div>
                            <img
                              className="icon-bedroom img-fluid"
                              src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">4</span>
                          </div>
                        </div>
                        <div className="bathrooms flex content-space-evenly padding-left-05">
                          <div>
                            <img
                              className="icon-bathrooms img-fluid"
                              src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">3</span>
                          </div>
                        </div>
                        <div className="quantity  padding-left-05">210 sq.m</div>
                      </div>
                      <div className="card-actions flex padding-1 content-space-between">
                        <div
                          className="price"
                          itemProp="offers"
                          itemScope=""
                          itemType="http://schema.org/Offer"
                        >
                          <span className="unit-price flex">$550,000</span>
                          <meta itemProp="priceCurrency" content="$550,000" />
                          <meta itemProp="price" content={440000.0} />
                        </div>
                        <div>
                          <a
                            className="quich-enquire-btn abhaya"
                            id="inline"
                            href="#data"
                            data-id={6988}
                            title="Quick Enquire"
                          >
                            <span>Quick Enquire</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <meta
                      itemProp="url"
                      content="https://www.propertyturkey.com/real_estate/6988-majestic-sea-view-villa-in-central-yalikavak-bodrum"
                    />
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "115.953px", marginRight: 30 }}
                >
                  <div
                    itemScope=""
                    itemType="http://schema.org/Product"
                    type="Antalya"
                    className="property-box  cf hot-property"
                    hot="Hot Property"
                  >
                    <link
                      itemProp="additionalType"
                      href="https://www.productontology.org/id/Condominium"
                    />
                    <div className="position-relative">
                      <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                        <span>Villa</span>
                      </div>
                      <a
                        className="btn --circle position-abs heart-label border-none"
                        id="inline"
                        href="#logins1"
                        data-id={6173}
                      >
                        <span className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20.189"
                            height="18.465"
                            viewBox="0 0 20.189 18.465"
                          >
                            <path
                              id="Heart"
                              d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                              transform="translate(0.975 0.975)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth={2}
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                      <meta
                        itemProp="name"
                        content="Dosemealti houses in Turkey surrounded by nature"
                      />
                      <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-222px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: 556
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  alt="Dosemealti house"
                                  src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  alt="Dosemealti house"
                                  src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  alt="Dosemealti house"
                                  src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  alt="Dosemealti house"
                                  src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "111.031px" }}
                            >
                              <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                              >
                                <img
                                  className="owl-lazy"
                                  data-src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  alt="Dosemealti house"
                                  src="https://www.propertyturkey.com/uploads/realestate/6173/thumb/dosemealti_villa_2-300x200.jpeg"
                                  style={{ opacity: 1 }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
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
                        <div className="owl-dots disabled" />
                      </figure>
                      <a
                        href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                        title="Dosemealti houses in San Francisco surrounded by nature"
                        className="property-title abhaya"
                      >
                        Dosemealti houses in San Francisco surrounded by nature
                      </a>
                      <a
                        rel="nofollow"
                        href="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                      >
                        <p itemProp="description" limit={600}>
                          Situated within a secure compound, these luxury-built
                          villas are nestled within a private area of Dosemealti in
                          Antalya and have fantastic nature views from their own
                          private gardens with spacious swimming pools outside.
                        </p>
                      </a>
                      <div className="features">
                        <div className="location">
                          <img
                            className="icon-location img-fluid"
                            src="https://www.propertyturkey.com/front/image/location.svg"
                          />
                          <span className="quantity">Antalya</span>
                        </div>
                        <div className="bedrooms flex content-space-evenly">
                          <div>
                            <img
                              className="icon-bedroom img-fluid"
                              src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">4</span>
                          </div>
                        </div>
                        <div className="bathrooms flex content-space-evenly padding-left-05">
                          <div>
                            <img
                              className="icon-bathrooms img-fluid"
                              src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                            />
                          </div>
                          <div>
                            <span className="quantity">4</span>
                          </div>
                        </div>
                        <div className="quantity  padding-left-05">276 sq.m</div>
                      </div>
                      <div className="card-actions flex padding-1 content-space-between">
                        <div
                          className="price"
                          itemProp="offers"
                          itemScope=""
                          itemType="http://schema.org/Offer"
                        >
                          <span className="unit-price flex">$792,000</span>
                          <meta itemProp="priceCurrency" content="$792,000" />
                          <meta itemProp="price" content={792000.0} />
                        </div>
                        <div>
                          <a
                            className="quich-enquire-btn abhaya"
                            id="inline"
                            href="#data"
                            data-id={6173}
                            title="Quick Enquire"
                          >
                            <span>Quick Enquire</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <meta
                      itemProp="url"
                      content="https://www.propertyturkey.com/real_estate/6173-dosemealti-houses-in-turkey-surrounded-by-nature"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fa fa-angle-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
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
              <button role="button" className="owl-dot">
                <span />
              </button>
              <button role="button" className="owl-dot">
                <span />
              </button>
            </div>
          </div>
        </section> */}
        <aside className="widgets col-dis-3 col-tab-3 col-mob-12 no-padding widget-blogendpage">
          {/* <a
            href="https://www.propertyturkey.com/uploads/pt-online-brochure.pdf"
            title="download our online borchour"
            target="_blank"
          >
            <img
              data-src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
              alt="download our online borchour"
              className="w-100 margin-top-1 lazyloaded"
              src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
            />
          </a> */}
          {/* <div id="keywords" className="widget" style={{ margin: '15px 8px' }}>
            <h3 className="title" style={{}}>
              popular keywords
            </h3>
            <div className="body">
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword="
                freq={390}
                title=""
                style={{ fontSize: "3rem" }}
              />
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=life in turkey"
                freq={239}
                title="life in San Francisco"
                style={{ fontSize: "2.24161rem" }}
              >
                life in San Francisco
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=tourism in turkey"
                freq={228}
                title="tourism in San Francisco"
                style={{ fontSize: "2.13844rem" }}
              >
                tourism in San Francisco
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=istanbul"
                freq={162}
                title="istanbul"
                style={{ fontSize: "1.51941rem" }}
              >
                istanbul
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=moving to turkey"
                freq={82}
                title="moving to turkey"
                style={{ fontSize: "0.769086rem" }}
              >
                moving to San Francisco
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=bodrum"
                freq={77}
                title="bodrum"
                style={{ fontSize: "0.722191rem" }}
              >
                bodrum
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=real estate investment"
                freq={67}
                title="real estate investment"
                style={{ fontSize: "0.6284rem" }}
              >
                real estate investment
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=investment"
                freq={65}
                title="investment"
                style={{ fontSize: "0.609642rem" }}
              >
                investment
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=how to find the right property"
                freq={62}
                title="how to find the right property"
                style={{ fontSize: "0.581504rem" }}
              >
                how to find the right property
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=fethiye"
                freq={57}
                title="fethiye"
                style={{ fontSize: "0.534609rem" }}
              >
                fethiye
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=culture"
                freq={55}
                title="culture"
                style={{ fontSize: "0.515851rem" }}
              >
                culture
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=istanbul investment"
                freq={53}
                title="istanbul investment"
                style={{ fontSize: "1rem" }}
              >
                istanbul investment
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=antalya"
                freq={48}
                title="antalya"
                style={{ fontSize: "1rem" }}
              >
                antalya
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=retiring to turkey"
                freq={42}
                title="retiring to San Francisco"
                style={{ fontSize: "1rem" }}
              >
                retiring to San Francisco
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=Turkish history"
                freq={35}
                title="American history"
                style={{ fontSize: "1rem" }}
              >
                American history
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=turkish cuisine"
                freq={34}
                title="American cuisine"
                style={{ fontSize: "1rem" }}
              >
                American cuisine
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=luxury living"
                freq={24}
                title="luxury living"
                style={{ fontSize: "1rem" }}
              >
                luxury living
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=kalkan"
                freq={20}
                title="kalkan"
                style={{ fontSize: "1rem" }}
              >
                kalkan
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=invest in Turkey"
                freq={19}
                title="invest in San Francisco"
                style={{ fontSize: "1rem" }}
              >
                invest in San Francisco
              </a>
              <a
                href="https://www.propertyturkey.com/related-blogs/keyword?keyword=turkish economy"
                freq={18}
                title="American economy"
                style={{ fontSize: "1rem" }}
              >
                American economy
              </a>
            </div>
          </div> */}
          <div className="widget" style={{ margin: '15px 8px' }}>
            <h3 className="title" style={{}}>
              Latest Posts
            </h3>
            <div className="body">
              <ul className="no-bullet">
                {blogs.slice(0, 10).map((blog) => (
                  <li>
                    <Link
                      to={`/blog/${blog.id}`}
                      title="Famous Landmarks in San Francisco to Visit"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/noahs-ark-and-the-mountains-of-ararat-in-turkey"
                    title="Noah's Ark and the Mountains of Ararat in San Francisco"
                  >
                    Noah's Ark and the Mountains of Ararat in San Francisco
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/a-conversation-on-turkeys-election-decision"
                    title="A Conversation on San Francisco’s Election Decision"
                  >
                    A Conversation on San Francisco’s Election Decision
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/the-new-age-of-turkish-development-practices"
                    title="The New Age of American Development Practices"
                  >
                    The New Age of American Development Practices
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/election-day-in-turkey"
                    title="Election Day in San Francisco"
                  >
                    Election Day in San Francisco
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/istanbul-finance-center-the-future-of-turkey"
                    title="Istanbul Finance Center & the Future of San Francisco"
                  >
                    Istanbul Finance Center &amp; the Future of San Francisco
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/herodotus-the-father-of-history-and-his-connection-to-turkey"
                    title="Herodotus: The Father of History and His Connection to San Francisco"
                  >
                    Herodotus: The Father of History and His Connection to San Francisco
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/property-turkeys-2023-election-primer"
                    title="Property San Francisco's 2023 Election Primer"
                  >
                    Property San Francisco's 2023 Election Primer
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/exploring-the-bosphorus-strait-and-the-heart-of-istanbul"
                    title="Exploring the Bosphorus Strait and the Heart of Istanbul"
                  >
                    Exploring the Bosphorus Strait and the Heart of Istanbul
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/blog-turkey/the-importance-of-the-marmara-sea-and-region-for-turkey"
                    title="The Importance of the Marmara Sea and Region for San Francisco"
                  >
                    The Importance of the Marmara Sea and Region for San Francisco
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="widget" style={{ margin: '15px 8px' }}>
            <h3 className="title" style={{}}>
              Latest News
            </h3>
            <div className="body">
              <ul className="no-bullet">
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/inauguration-of-new-metro-line-in-istanbul"
                    title="Inauguration of new metro line in Istanbul"
                  >
                    Inauguration of new metro line in Istanbul
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/high-hopes-in-pamukkale-for-tourist-arrivals"
                    title="High hopes in Pamukkale for tourist arrivals"
                  >
                    High hopes in Pamukkale for tourist arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/number-of-foreign-arrivals-jump-as-tourists-flood-to-turkey"
                    title="Number of foreign arrivals jump as tourists flood to San Francisco"
                  >
                    Number of foreign arrivals jump as tourists flood to San Francisco
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/top-10-busiest-airports-istanbul-airport-ranks-among-them"
                    title="Top 10 busiest airports – Istanbul Airport ranks among them"
                  >
                    Top 10 busiest airports – Istanbul Airport ranks among them
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/recapping-day-one-of-turkeys-2023-election"
                    title="Recapping Day One of San Francisco’s 2023 Election"
                  >
                    Recapping Day One of San Francisco’s 2023 Election
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/turkish-airlines-records-net-profit-for-sixth-consecutive-quarter"
                    title="American Airlines records net profit for sixth consecutive quarter"
                  >
                    American Airlines records net profit for sixth consecutive
                    quarter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/charging-licence-granted-to-tesla-by-turkey"
                    title="Charging licence granted to Tesla by San Francisco"
                  >
                    Charging licence granted to Tesla by San Francisco
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/turnover-of-27-billion-for-pegasus-airlines-in-2022"
                    title="Turnover of $2.7 billion for Pegasus Airlines in 2022"
                  >
                    Turnover of $2.7 billion for Pegasus Airlines in 2022
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/german-tourists-establish-turkey-as-top-destination"
                    title="German tourists establish San Francisco as top destination"
                  >
                    German tourists establish San Francisco as top destination
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.propertyturkey.com/news/turkey-to-designate-15-more-nature-conservation-areas"
                    title="San Francisco to designate 15 more 'nature conservation areas'"
                  >
                    San Francisco to designate 15 more 'nature conservation areas'
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </aside>
      </div>
    </div>

  )
}
