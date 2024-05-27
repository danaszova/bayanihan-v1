"use client";

import React, { useState } from "react";
import {
  UserButton,
  OrganizationSwitcher,
  useOrganization
} from "@clerk/nextjs";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

const MenuIcon = (props:any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const Navbar = () => {
  const { organization } = useOrganization();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>

    
    
    
    
    
    
    <div className="flex items-center justify-between p-5 mx-auto w-full max-w-7xl">
      <div className="flex items-center">
        <button className="lg:hidden" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6" />
        </button>
       
       
        {/*<div className={`${menuOpen ? "block" : "hidden"} lg:flex lg:flex-1 lg:justify-center`}>
          
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:hidden my-2">
              <OrganizationSwitcher
                hidePersonal
                appearance={{
                  elements: {
                    rootBox: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: "376px",
                    },
                    organizationSwitcherTrigger: {
                      padding: "6px",
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      justifyContent: "space-between",
                      backgroundColor: "white",
                    }
                  }
                }}
              />
            </div>
            <div className="lg:hidden my-2">
              <SearchInput />
            </div>
            {organization && (
              <div className="lg:hidden my-2">
                <InviteButton />
              </div>
            )}
          </div>
       
       
          </div>*/}




      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-center">
        <SearchInput />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
        {organization && <InviteButton />}
      </div>
      
      <div className="flex items-center gap-x-4">
        <UserButton />
      </div>
     
   
    
    
    
    
    
    
    </div>
    <div className={`${menuOpen ? "block" : "hidden"} lg:flex lg:flex-1 lg:justify-center`}>
          <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
 
            <div className="lg:hidden my-2">
              <OrganizationSwitcher
                hidePersonal
                appearance={{
                  elements: {
                    rootBox: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: "376px",
                    },
                    organizationSwitcherTrigger: {
                      padding: "6px",
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      justifyContent: "space-between",
                      backgroundColor: "white",
                    }
                  }
                }}
              />
            </div>
            <div className="lg:hidden my-2">
              <SearchInput />
            </div>
            {organization && (
              <div className="lg:hidden my-2 w-full ">
                <InviteButton />
              </div>
            )}
            
            
          </div>
        </div>

</div>

  );
};