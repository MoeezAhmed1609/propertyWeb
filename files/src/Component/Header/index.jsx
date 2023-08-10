import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modals from "@mui/material/Modal";
import "datejs";
import CloseIcon from "@mui/icons-material/Close";
import { cityToggle } from "../../Data/CityToggle";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  FacebookAuthProvider
} from "firebase/auth";
import { auth, db } from "../../Config";
import { doc, setDoc } from "firebase/firestore";
import { Modal } from "antd";
import { AuthAction } from "../../Redux/Action/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import HeaderNav from "./HeaderNav";
import PartnertSvg from "../../assets/partner-button-01.svg";
import Image from "../../ReUseAbleComponent/Image";
import Logo from "../../assets/pt-header-logo.svg";
import PTHEADERLOGO from "../../assets/pt_new_logo.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import GoogleLogo from "../../assets/google-icon-removebg-preview.png";
import { IconButton, TextField, Chip, Divider } from "@mui/material";
import RealStateHeader from "../../pages/RealState/RealStateHeader";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "85vh !important",
  overflowY: "auto",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const loginStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "90vh !important",
  overflowY: "hidden",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModals, setopenModals] = React.useState(false);
  const handleOpenModals = () => setOpen(true);
  const handleCloseModals = () => setOpen(false);
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const MySwal = withReactContent(Swal);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [AccountOptions, setAccountsPurpose] = useState("Broker");
  const [confirmpassword, setconfirmpasswordPassword] = useState("");
  const [searchModelToggle, setsearchModelToggle] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(Name);
    console.log(Email);
    console.log(Mobile);
    console.log(AccountOptions);

    createUserWithEmailAndPassword(auth, Email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        await setDoc(doc(db, "Users", user.uid), {
          name: Name,
          Email,
          Mobile,
          AccountOptions,
          uid: user.uid,
        });
        alert("Register Successfully");
        setOpen(false)
        setIsModalOpen(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  };
  console.log(AccountOptions);
  const AuthRegister = () => {
    console.log(Name);
    console.log(Email);
    signInWithEmailAndPassword(auth, Email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        dispatch(AuthAction(user));
        console.log(user);
        alert("Login Successfully");
        setIsModalOpen(false)
        window.location.replace('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const HandleData = async (id) => {
    await setDoc(doc(db, "users", id), {
      name: Name,
      Email: Email,
    });
    MySwal.fire({
      title: <strong>Successfully Registered</strong>,
      html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };

  const AuthGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(AuthAction(user));
        setIsModalOpen(false);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        toast('Login successful!');
        // const user = res.user;
        // const userName = user.displayName;
        // const userProfilePicture = user.photoURL;

        // console.log('User Name:', userName);
        // console.log('Profile Picture:', userProfilePicture);
        const user = res.user;
        dispatch(AuthAction(user));
        setIsModalOpen(false)

      }, 500)
      .catch((err) => {
        toast.error('Login with Facebook failed. Please try again.', err);

        console.log(err.message);
      });
  };

  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  useEffect(() => {
    const resizeHandler = () => {
      setIsWideScreen(window.matchMedia("(min-width: 1024px)").matches);
      setIsNarrowScreen(window.matchMedia("(max-width: 1024px)").matches);
    };
    resizeHandler();
    $(window).on("resize", resizeHandler);
    return () => $(window).off("resize", resizeHandler);
  }, []);

  // const handleSearchFilterToggle = (e) => {
  //   $(e.currentTarget).toggleClass('active');
  //   $(e.currentTarget)
  //     .find('[class*="fa-angle"]')
  //     .toggleClass('fa-angle-up fa-angle-down');
  //   $('#search-filter').slideToggle(300);
  // };

  // const handleLevel3MouseEnter = (e) => {
  //   if (
  //     isWideScreen &&
  //     window.innerWidth / 2 - 32 < $(e.currentTarget).offset().left
  //   ) {
  //     $(e.currentTarget).find('.level-4').addClass('left');
  //   }
  // };

  // const handleLevel2Click = (e) => {
  //   const $nav = $('nav');
  //   const $icon = $(e.currentTarget).find('.fa');
  //   const $submenu = $(e.currentTarget).parent().next();
  //   if (isWideScreen || window.innerWidth > 1024) {
  //     if ($icon.hasClass('fa-angle-up')) {
  //       $nav.addClass('close');
  //       $submenu.removeClass('open');
  //       $('.fa-angle-up')
  //         .not($icon)
  //         .removeClass('fa-angle-up')
  //         .addClass('fa-angle-down');
  //     } else if ($icon.hasClass('fa-angle-down')) {
  //       $nav.removeClass('closeNav');
  //       $nav.css({ 'margin-bottom': $submenu.height() + 70 });
  //       $submenu.addClass('open');
  //       $icon.removeClass('fa-angle-down').addClass('fa-angle-up');
  //     } else if ($icon.hasClass('navClose')) {
  //       $nav.addClass('close');
  //       $('.level-2').removeClass('open');
  //     }
  //   } else {
  //     $submenu.slideToggle(300);
  //   }
  //   return false;
  // };

  const handleNavButtonClick = (e) => {
    e.preventDefault();
    $("nav").addClass("open");
  };

  const userAuth = useSelector((state) => state.AuthReducer.login);

  if (userAuth) {
    var username = extractUsernameFromEmail(userAuth.email);
  } else {
    var username = "Ahmed  ";
  }

  function extractUsernameFromEmail(email) {
    const atIndex = email.indexOf("@");

    if (atIndex === -1) {
      throw new Error("Invalid email address");
    }

    return email.substring(0, atIndex);
  }

  const HandleLogout = () => {
    console.log("Logout");
    dispatch(AuthAction(""));
    MySwal.fire({
      title: <strong>Successfully Logout!</strong>,
      icon: "success",
    });
  };

  let location = useLocation();

  // Search states to save in local storage
  const [cityData, setcityData] = useState("");
  const [typeData, settypeData] = useState("");
  const [BedroomData, setBedroomData] = useState("");

  const [minPriceInputValue, setminPriceInputValue] = useState(0);
  const [maxPriceInputValue, setmaxPriceInputValue] = useState(0);

  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchClick = (city) => {
    const data = {
      cityData: city,
      typeData: "",
      BedroomData: "",
      minPriceInputValue: 0,
      maxPriceInputValue: 0,
    };
    window.localStorage.setItem("search", JSON.stringify(data));
    // window.location.replace('/realState')
    navigate('/realState', { replace: true })
  };


  return (
    <>
      <header
        style={{ display: location.pathname === "/printPreview" ? "none" : "" }}
        className=""
      >
        {/* Not Active yet */}
        <Box className="header-top">
          {/* <Box className="wrap-dis-85 flex  content-end items-center hideMb-showDt">
            {/* <Box className="header-phone-items order-3">
              <Link to="/" className="active" title="English">EN</Link>
              <Link to="/" title="Russian" className>RU</Link>
              <Link to="/" title="Arabic">AR</Link>
              <Link to="/" title="German">DE</Link>
              <Link to="/" title="Chinese">中文</Link>
              <Link to="/" title="Farsi">FA</Link>
            </Box> */
            /* <Link to="/becomepartner" className="flex">
              <img
                src={PartnertSvg}
                alt=""
                width={95}
                className="img-fluid w-[70px] h-[70px] "
              />
            </Link> */
            /* <Box className="currencyy order-2">
              <Link
                rel="nofollow"
                to="/change-currency/3"
                className=""
                title="Sterling Pound  "
              >
                <i className="fa fa-gbp" />
              </Link>
              <Link
                rel="nofollow"
                to="/change-currency/2"
                className=""
                title="Euro "
              >
                <i className="fa fa-eur" />
              </Link>
              <Link
                rel="nofollow"
                className="active"
                title="Dollar "
              >
                <i className="fa fa-usd" />
              </Link>
              <Link
                rel="nofollow"
                to="/change-currency/4"
                className=""
                title="Turkish Lira "
              >
                <i className="fa fa-try" />
              </Link>
            </Box>

            <Box className="elastic-search d-desk">
              <AiOutlineSearch
                onClick={() => setsearchModelToggle(true)}
                aria-hidden="true"
                style={{ fontSize: "20px" }}
              />
            </Box>
          </Box> */}

          <Box className="main-header">
            <Box className="flex  items-center content-start position-relative mt-15 content-space-between">
              <Box className="logo">
                <Link
                  to="/"
                  title="Property USA"
                  // className="logoImg flex items-center content-center flex-direction-column pos-logo-lg"
                  id="desktopLogo"
                // style={{ marginTop: '20px' }}
                >
                  <img
                    // className="Desktop_Logo"
                    src={PTHEADERLOGO}
                    alt="Property USA"
                    style={{ height: '12vh' }}
                  />
                </Link>
                {/* <Link
                  title="Property USA"
                  className="flex items-center content-center flex-direction-column pos-logo-lg"
                  id="mobileLogo"
                ></Link> */}
                <Link
                  onClick={handleNavButtonClick}
                  className="navbutton  tab-inline-block mob-inline-block mobile burgermenu position-abs"
                  to="#"
                >
                  <AiOutlineMenu size={30} color="#fff" />
                </Link>
                <Box className="elastic-search" id="headerSearchIcon" sx={{ alignItems: 'center', display: { xs: 'flex', md: 'none' } }}>
                  <AiOutlineSearch
                    onClick={() => setsearchModelToggle(true)}
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  />
                </Box>
              </Box>
              {/* Navigation bar */}
              <HeaderNav user={userAuth} username={username} />
              {userAuth ? (
                <Box sx={{ display: { xs: 'none', sm: "block" } }} className="user login fl-dis-right  fl-tab-right fl-mob-right">
                  <Link className="profile-link">
                    {username} <i className="fa fa-angle-down" style={{ fontSize: '15px' }} />
                  </Link>
                  <Box className="usermenu fl-dis-right  fl-tab-right">
                    <Box className="container padding-top-1">
                      <Box className="dropdown-header flex items-center">
                        <i className="fa fa-home" aria-hidden="true" />
                        <Typography varient="span">My Homes</Typography>
                      </Box>
                      <Box className="addyourhome">
                        <p>
                          Whatever your reasons for selling your property in
                          USA. you certainly will want to achieve a handsome
                          price with minimum imposition on your time.
                        </p>
                        <Box className="text-right">
                          <Link to="/contact-us">Add Your Home</Link>
                        </Box>
                      </Box>
                      <hr />
                      <Box className="dropdown-savedhome">
                        <Box className="flex content-space-between items-base padding-top-1">
                          <Box className="flex items-center">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                            <span className="savedhome-dropdown-header">
                              Saved Homes
                            </span>
                          </Box>
                          <Link to="/setting" state={{
                            tab: 3,
                          }}>View All</Link>
                        </Box>
                      </Box>
                      <hr />
                      <Box className="saved-searches-dropdown">
                        <Box className="flex content-space-between items-base">
                          <Box className="flex items-center saved-searches-dropdown-title">
                            <i
                              className="fa fa-search clr-pt-darkred"
                              aria-hidden="true"
                            />
                            <span>Saved Searches</span>
                          </Box>
                          <Link to="/setting" state={{
                            tab: 5,
                          }}>View All</Link>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="setting-logout">
                      <Box className="flex content-space-between container padding-1">
                        <Box>
                          <BiCog className="font-13 clr-pt-darkred" />
                          <Link to="/setting" state={{
                            tab: 1,
                          }} className="font-13">
                            Account Settings
                          </Link>
                        </Box>
                        <Box onClick={HandleLogout}>
                          <FaSignOutAlt className="font-13 clr-pt-darkred" />
                          <button className="font-13">Logout</button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box className="auth header-right order-1 login-register-desktop-xl" sx={{ display: { xs: 'none', sm: "flex" } }}>

                  <Link
                    onClick={showModal}
                    className="login fl-dis-right  fl-tab-right fl-mob-right"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={handleOpen}
                    className="login fl-dis-right  fl-tab-right fl-mob-right "
                  >
                    Register
                  </Link>
                  <Box className="elastic-search d-desk">
                    <AiOutlineSearch
                      onClick={() => setsearchModelToggle(true)}
                      aria-hidden="true"
                      style={{ fontSize: "20px" }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          className={`elastic-search-form searchWrapper ${searchModelToggle ? "open" : ""
            }`}
        >
          <Box
            sx={{
              background: "white",
              height: "15vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          // onMouseLeave={() =>
          //   window.setTimeout(() => setsearchModelToggle(false), 1500)
          // }
          // onMouseEnter={() => setsearchModelToggle(true)}
          >
            <TextField
              placeholder="Search property by city name..."
              variant="outlined"
              sx={{
                width: { xs: "95%", sm: "80%", md: "60%" },
                border: "1.5px solid #5081ff",
                borderRadius: "6px",
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton onClick={() => setsearchModelToggle(false)}>
              <CloseIcon />
            </IconButton>
            {searchQuery !== "" && searchModelToggle && (
              <Box
                sx={{
                  position: "absolute",
                  top: "15vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    maxHeight: "300px",
                    overflowY: "auto",
                    width: { xs: "95%", sm: "60%", md: "40%" },
                    padding: "15px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                >
                  {cityToggle
                    .filter((item) =>
                      item.County.toLowerCase().includes(
                        searchQuery?.toLowerCase()
                      )
                    )
                    .map((item, i) => {
                      return (
                        <Typography
                          variant="h6"
                          sx={{
                            padding: "6px",
                            cursor: "pointer",

                          }}
                          key={i}
                          onClick={() => handleSearchClick(item.County)}
                        >
                          {/* <Link to='/realState' style={{ color: "black", }} > */}
                          {item.County}
                          {/* </Link> */}
                        </Typography>
                      );
                    })}
                </Box>
              </Box>
            )}
          </Box>
          {/* <form>
            <input
              type="text"
              name="keyword"
              className="form-control"
              placeholder="Example: Apartment Istanbul Sea view"
            />
            <button type="submit" className=" flex justify-center items-center">
              <img src="fonts/search-white.svg" alt="" />
              <p className="text-2xl mt-3 text-white lg:block md:block sm:hidden">
                Search
              </p>
            </button>
          </form> */}
          {/* <RealStateHeader
            setsearchModelToggle={setsearchModelToggle}
            searchModelToggle={searchModelToggle}
            cityData={cityData}
            typeData={typeData}
            BedroomData={BedroomData}
            minPriceInputValue={minPriceInputValue}
            maxPriceInputValue={maxPriceInputValue}
            setcityData={setcityData}
            settypeData={settypeData}
            setBedroomData={setBedroomData}
            setminPriceInputValue={setminPriceInputValue}
            setmaxPriceInputValue={setmaxPriceInputValue}
            scroll={false}
          /> */}
        </Box>
      </header>

      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="Modals-Modals-title"
        aria-describedby="Modals-Modals-description"
      >
        <Box sx={style}>
          <Box className="w-full overflow-y-auto flex flex-col justify-center items-center">
            <Box className=" ">
              <img src={Logo} alt="" style={{ height: "30px" }} />
            </Box>
            <h3
              className="margin-bottom-1 margin-top-1 text blink"
              style={{ textAlign: "center" }}
            >
              Sign up to Save Properties
            </h3>

            <Box className="w-[90%] h-auto  flex flex-col ">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full h-[40px] bg-[#eee]"
                required={true}
              />
            </Box>

            <Box className="w-[90%] h-auto  flex flex-col ">
              <label>E-Mail</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[40px] bg-[#eee]"
                required
              />
            </Box>

            <Box className="w-[90%] h-auto  flex flex-col ">
              <label>Accounts options</label>
              <select onChange={(e) => setAccountsPurpose(e.target.value)} style={{ WebkitAppearance: "listbox" }}>
                <option value={"Broker"}>Broker</option>
                <option value={"Buyer"}>Buyer</option>
                <option value={"Renter"}>Renter</option>
              </select>
            </Box>

            <Box className="w-[90%] h-auto  flex flex-col ">
              <label>Mobile</label>
              <input
                type="number"
                onChange={(e) => setMobile(e.target.value)}
                className="w-full h-[40px] bg-[#eee]"
                required
              />
            </Box>

            <Box className="w-[90%] h-auto  flex flex-col ">
              <label>password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[40px] bg-[#eee]"
                required
              />
            </Box>
            <Box className="w-[90%] h-auto  flex flex-col ">
              <label>confirm password</label>
              <input
                type="password"
                onChange={(e) => setconfirmpasswordPassword(e.target.value)}
                className="w-full h-[40px] bg-[#eee]"
                required
              />
            </Box>
            <StyledButton
              onClick={RegisterUser}
              title={"Register"}
              margin={"8px"}
              size={"small"}
              validation={!Name || !Email || !AccountOptions || !Mobile || !password || !confirmpassword}
              type={'submit'}
            />
            {/* <button
              onClick={RegisterUser}
              className="w-[90%] p-3 bg-[#5081ff] text-white mt-3"
            >
              Register
            </button> */}
            <Typography sx={{ marginTop: "8px" }}>
              By creating your Creating You must agree with our Privcy policy
            </Typography>
          </Box>
        </Box>
      </Modals>

      <Modals
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="Modals-Modals-title"
        aria-describedby="Modals-Modals-description"
      >
        <Box sx={loginStyle} id="logins" className="fancybox-content">
          <IconButton
            sx={{ position: "absolute", top: "15px", right: "15px" }}
            onClick={() => setIsModalOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Box className="container text-center">
            <Box className="register-form">
              <Box marginLeft={14}>
                <Image
                  src={PTHEADERLOGO}
                  style={{ height: "60px" }}
                  alt="Property USA"
                />
              </Box>
              {/* <h3 style={{ margin: "8px 0" }}>Sign in to Save Properties</h3> */}
              <Link
                to=""
                className="ion-social-google w-75 margin-ver-1 h-[45px] flex justify-around items-center"
                onClick={AuthGoogle}
                style={{ marginTop: "20px" }}
              >
                <span className="relative">
                  <img
                    src={GoogleLogo}
                    width="17"
                    class="img-fluid ver-img-middle"
                    alt="googleicon"
                  />
                  <p className="absolute -top-1 -left-20">
                    Continue with Google
                  </p>
                </span>
              </Link>

              <Link
                to=""
                className="ion-social-facebook w-75"
                style={{ marginBottom: "10px" }}
                onClick={loginWithFacebook}
              >
                <span>
                  <i className="fa fa-facebook" aria-hidden="true" /> Continue
                  with Facebook
                </span>
              </Link>
              <Divider sx={{ marginBottom: "8px" }}>
                <Chip
                  label="OR"
                  sx={{ backgroundColor: "#5081ff", color: "white" }}
                />
              </Divider>
              <Box className="body">
                {/* <Box className="form-field">
                  
                  {/* <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email*"
                    name="email"
                    type="email"
                  /> 
                </Box> */}
                <TextField
                  placeholder="Email*"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  sx={{ width: "90%", margin: "8px 0" }}
                  required
                />
                {/* <Box className="form-field">
                  <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    defaultValue=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box> */}
                <TextField
                  placeholder="Password*"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  sx={{ width: "90%", margin: "8px 0" }}
                  required
                />
                {/* <Box className="form-field">
                  <input name="remember" type="checkbox" defaultValue={1} />{" "}
                  Remember Me
                </Box> */}
                <input
                  type="hidden"
                  name="LoginUser"
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <StyledButton
                  title={"Submit"}
                  onClick={AuthRegister}
                  margin={"8px"}
                  type={'submit'}
                  validation={!Email || !password}
                />
                {/* <button
                  className="btn btn-block bg-pt crl-white margin-ver-1"
                  onClick={AuthRegister}
                >
                  Submit
                </button> */}
              </Box>
              <Box
                className="text-left padding-bottom-05"
                sx={{ textAlign: "center" }}
              >
                <Link to="">Forget Password</Link>
              </Box>
              <p
                className="text-left"
                style={{ textAlign: "center", marginBottom: "0" }}
              >
                Do not have an account?
                <Link
                  className="clr-pt"
                  onClick={() => {
                    setIsModalOpen(false);
                    setOpen(true);
                  }}
                  style={{ paddingLeft: "4px" }}
                >
                  Signup
                </Link>
              </p>
            </Box>
          </Box>
        </Box>
      </Modals>
    </>
  );
}
