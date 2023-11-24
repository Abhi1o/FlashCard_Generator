// Importing React, useEffect, and useState from React library
import React, { useEffect, useState } from "react";
// Importing Button and Modal components from react-daisyui
import { Button, Modal } from "react-daisyui";
// Importing social media share buttons and icons from react-share
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';
// Importing icons from various libraries
import { TbCopy } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { BsShare } from "react-icons/bs";
// Importing local image assets
import Whatsapp from "../../../Assets/whatsapp-icon.svg";
import Facebook from "../../../Assets/facebook-icon.svg";
import Twitter from "../../../Assets/twitter-icon.svg";
import LinkedIn from "../../../Assets/linkedin-icon.svg";
import Mail from "../../../Assets/mail-icon.svg";
import CopyToClipboard from "react-copy-to-clipboard";

// Functional component for the ShareModal
const ShareModal = ({isOpen, closeModal}) => {
    // const title = `${document.title} | Advanced Dontpad`;
    // Getting the current URL
    const url = window.location.href;
    // const iconSize = 48;

    // State for tracking if the link is copied
    const [isCopied, setIsCopied] = useState(false);

    // useEffect to reset isCopied state after a certain time
    useEffect(() => {
        isCopied &&
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
      }, [isCopied]);

    return (
      // Wrapping div for the modal
      <div>
      
      <div className={isOpen ? 'shareModel' : ''}>
        {/* Modal component for sharing */}
        <Modal
          open={isOpen}
          onClickBackdrop={closeModal}
          dataTheme="light"
          className="m-2"
        >
        
          {/* Modal header */}
          <Modal.Header className="font-bold">Share</Modal.Header>
          {/* Modal body */}
          <Modal.Body>
            {/* Container for modal content */}
            <div className="m-5 flex flex-col ">
              {/* Close button for the modal */}
              <Button
                size="sm"
                shape="circle"
                className="bg-absolute right-2 top-2 bg-white border-none text-slate-700 text-2xl font-bold shadow-lg"
                onClick={() => {
                  setIsCopied(false);
                  closeModal();
                }}
              >
                {/* Close icon */}
                <IoMdClose
                  onClick={closeModal}
                  className="absolute text-slate-500 right-3 top-3 text-2xl cursor-pointer"
                />
              </Button>

              {/* Container for link, copy button, and share button */}
              <div className="flex items-center space-x-3 ">
                {/* Displaying the current URL */}
                <p className="flex items-center flex-1 border-2 p-2 text-xs text-slate-500 border-slate-300 rounded-md border-dashed">
                  Link:
                  <span className="mx-2 font-semibold text-xs overflow-x-hidden text-black">
                    {url}
                  </span>
                </p>

                {/* Copy to clipboard button */}
                <CopyToClipboard text={url} onCopy={() => setIsCopied(true)}>
                  <TbCopy className="text-xl text-slate-500 scale-x-[-1] cursor-pointer" />
                </CopyToClipboard>

                {/* Share button */}
                <BsShare className="text-xl text-slate-500 cursor-pointer" />
              </div>
              {/* Display message when link is copied */}
              <h2 className="p-2 h-5 ml-3 text-md text-green-500 font-semibold">
                {isCopied && "Link copied to clipboard"}
              </h2>
              {/* Container for social media share buttons */}
              <div className="mt-6 flex items-center space-x-10 justify-center">
                {/* Whatsapp share button */}
                <WhatsappShareButton url="https://web.whatsapp.com/">
                  <img
                    src={Whatsapp}
                    alt="Whatsapp"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </WhatsappShareButton>

                {/* Facebook share button */}
                <FacebookShareButton url="https://www.facebook.com/">
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </FacebookShareButton>

                {/* Twitter share button */}
                <TwitterShareButton url="https://twitter.com/">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </TwitterShareButton>

                {/* LinkedIn share button */}
                <LinkedinShareButton url="https://www.linkedin.com/">
                  <img
                    src={LinkedIn}
                    alt="Linkedin"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </LinkedinShareButton>

                {/* Email share button */}
                <EmailShareButton url="https://gmail.com/">
                  <img
                    src={Mail}
                    alt="Mail"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </EmailShareButton>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      </div>
    );
   }

// Exporting the ShareModal component
export default ShareModal;
