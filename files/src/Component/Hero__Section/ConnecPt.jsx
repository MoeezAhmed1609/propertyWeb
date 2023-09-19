import { Box } from "@mui/material";
import React, { useState } from "react";
import { auth, db } from "../../Config";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import ContactIcon from "../../assets/contact-form-icon.svg";
import PhoneComponent from "../../ReUseAbleComponent/PhoneComponent";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import StyledButton from "../../ReUseAbleComponent/StyledButton";
import { useNavigate } from "react-router-dom";

export default function ConnecPt() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.AuthReducer);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneswitch, setPhoneswitch] = useState(false);
  const MySwal = withReactContent(Swal);

  const state = useSelector((state) => state.AuthReducer.login);

  const HandleAddConnectPt = async () => {
    console.log(user.uid);

    if (!auth.currentUser.uid) {
      return toast("Please Login First ! ");
    }
    if (!Name || !Email || !Phone) {
      return toast("Please fill all feilds ! ");
    }

    const docRef = await addDoc(collection(db, "ConnectPt"), {
      ID: auth.currentUser.uid,
      name: Name,
      email: Email,
      phone: Phone,
    }).then(() => {
      toast("Successfull message send!");
      setName('')
      setEmail("")
      setPhone("")
    })

  };

  const HandleCountries = (e) => {
    console.log(e.target.value);
  };

  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    setPhone(selectedCountry);
    console.log(Phone);
  };

  return (
    <Box>
      <div
        className="container-pt bg-pt-light-red "
        style={{ backgroundColor: "#e5e4d5", marginTop: 100 }}
      >
        <div
          className="row align-itens-center justify-content-center mt-6 pt-4 align-items-center"
          id="connectWithPT"
        >
          <div className="col-lg col-12 mb-4">
            <div className="d-flex align-items-center justify-lg-content-end justify-content-center">
              <div className="col-auto px-0 text-right">
                <img
                  src={ContactIcon}
                  className="contact-phone"
                  alt="contact phone"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <div className="col-auto fw-bold text-pt-dark-red text-md">
                CONNECT WITH PS
              </div>
            </div>
          </div>
          <div className="col-lg col-12 mb-4">
            <div className="search-filter-input search-tab-input w-100 flex items-center">
              <input
                className="fs-5"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={Name}
                required
              />
            </div>
          </div>
          <div className="col-lg col-12 mb-4">
            <div className="search-filter-input search-tab-input w-100 flex items-center">
              <PhoneComponent
                containerClassName="intl-tel-input"
                inputClassName="form-control"
                onChange={HandleCountries}
                onPhoneNumberChange={handlePhoneInputChange}
                defaultCountry={"us"}
                value={Phone}
                setValue={setPhone}
              />
            </div>
          </div>
          <div className="col-lg col-12 mb-4">
            <div className="search-filter-input search-tab-input w-100 flex items-center">
              <input
                className="fs-5 "
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                required
              />
            </div>
          </div>
          <div className="col-lg col-12 mb-4">
            <StyledButton title={"Contact"} onClick={HandleAddConnectPt} type={"submit"} />

            {/* <button
              className="bg-pt-dark-red border-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{ padding: "10px 0" }}
              onClick={HandleAddConnectPt}
            >
              <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-5">
                CONTACT
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </Box>
  );
}
