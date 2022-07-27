import React from 'react'
import "./Navbar.css"

import myImg from "../../Images/header/flipkart_plus.png"
import { Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; 
export const Navbar=()=> {
  return (
    <div id="mainhead">
      <div id="navhead">
        <div id="new">
          <img src={myImg} id="imghead" alt="flipkartheader" />
          <br />
          <b id="parahead" style={{ paddingTop: "0px", marginTOp: "0px" }}>
            Explore{" "}
            <span id="plus" style={{ paddingTop: "0px", marginTOp: "0px" }}>
              Plus{" "}
              <IconButton
                style={{
                  color: "#FFE500",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <AddCircleOutlineIcon style={{ maxHeight: "18px" }} />
              </IconButton>
            </span>
          </b>
        </div>

        <div id="searchbarstyle">
          <input
            style={{
              minWidth: "550px",
              paddingRight: "0px",
              marginRight: "0px",
            }}
            type="text"
            name=""
            id="searchbar"
            placeholder="Search for products, brands and more"
          />
          <IconButton
            style={{
              cursor: "pointer",
              border: "none",
              marginTop: "-5px",
              paddingLeft: "0px",
              marginLeft: "0px",
            }}
          >
            <SearchIcon
              style={{
                color: "#2874F0",
                border: "none",
                backgroundColor: "white",
                minHeight: "38px",
                minWidth: "30px",
                paddingLeft: "0px",
                marginLeft: "0px",
                paddingTop: "0px",
                marginTop: "0px",
              }}
            />
          </IconButton>
        </div>
        <div id="thirdnav" style={{ display: "flex" }}>
          <Button
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              color: "#2874F0",
              width: "120px",
              height: "30px",
              fontWeight:"600"
            }}
            variant="contained"
          >
            Login
          </Button>
          <p
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              paddingLeft: "45px",
            }}
          >
            Become a Seller
          </p>

          <DropdownButton
            id="dropdown-basic-button"
            title="More"
            style={{
              backgroundColor: "#2874F0",
              border: "none",
              padding: "0px",
              margin: "0px",
              marginTop: "-5px",

              paddingLeft: "30px",
            }}
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <div>
            <IconButton
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "40px",
                marginTop: "-5px",
              }}
            >
              <ShoppingCartIcon />
              Cart {0}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

