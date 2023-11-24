// Importing necessary dependencies and components from React and other libraries
import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
// import { BlobProvider, PDFDownloadLink } from '@react-pdf-viewer/react-pdf';
// import { useReactToPrint } from "react-to-print";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import notImg from "../Assets/not-img.png";
import Img from "../Assets/img.png";
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineShareAlt, AiFillPrinter, AiOutlineArrowLeft, AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
// import downloadPDF from "../Components/downloadPDF";
import ShareModal from "../Components/Card-Ui/Modal/ShareModal";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import jsPDF from 'jspdf';
import PrintContent from "../Components/Card-Ui/printContent";
import PdfContent from "../Components/Card-Ui/pdfContent";
import {pdf} from '@react-pdf/renderer'
// Functional component for displaying flashcard details
const FlashcardDetails = () => {
  // Redux state to get flashcard data
  const userData = useSelector((state) => state.flashcards);
  const { id } = useParams();

  // Refs for PDF and printing functionality
  const pdfRef = useRef();
  const printRef = useRef();

  // Accessing flashcard data for the selected ID
  const user = userData[id];

  // State variables for managing active card index, modal state, and share state
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);


  // State variable to keep track of the selected card index
  const [selectorCardIndex, setSelectorCardIndex] = useState(0);

  // React-to-print hook for handling printing
  // Function to handle print button click
 

  // Function to handle card click
  const handelCardClick = (index) => {
    setSelectorCardIndex(index);
    setActiveIndex(index);
    
  };

  // If flashcard data is not available, display a message to create a flashcard
  if (!user) {
    return (
      <div className="text-center">
        <img src={notImg} alt="not found" className="mx-auto h-48" />
        <h1 className="text-xl mb-4 font-semibold">Flashcard not available</h1>
        <p className="text-gray-500 mb-4" >Sorry about that, Please create Flashcard</p>
        <Link to={`/`}> {" "}
          <button className="px-7 py-2 border-[1px] border-red-500   text-red-500 hover:bg-red-500 hover:text-white font-medium rounded-lg shadow-md"> Create Flashcard</button>
        </Link>
      </div>
    );
  };

 const handlePrint = async () => {
const blob = await pdf(<PrintContent flashcards={user} />).toBlob();
    const blobUrl = URL.createObjectURL(blob);
    const printWindow = window.open(blobUrl)
    if (printWindow) {
      printWindow.print();
    }
  };

  // Function to download PDF
 const downloadPDF = async () => {
    const blob = await pdf(<PdfContent flashcards={user} flashcardId={activeIndex} />).toBlob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "flashcard.pdf";
    link.click();

    URL.revokeObjectURL(blobUrl);
  };


  // Function to navigate to the previous card
  const goToPreviousSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      
      setSelectorCardIndex(activeIndex - 1);
    }
  };

  // Function to navigate to the next card
  const goToNextSlide = () => {
    if (activeIndex < user.cards.length - 1) {
      setActiveIndex(activeIndex + 1);
      
      setSelectorCardIndex(activeIndex + 1);
    }
  };

  // JSX code for rendering flashcard details
  return (
    <>
    
      {isOpen && <div className="overlay" />}
        <div className="ml-8 md:mx-40 2xl:mx-64 2xl:text-xl">
          <div className="mr-8">

            <div className=" flex items-center mb-2 ">
              <Link to={"/Myflashcard"}>
                <AiOutlineArrowLeft className="text-rose-600 text-xl  2xl:text-2xl font-extrabold " /></Link>
              <h1 className="font-bold text-lg 2xl:text-2xl 2xl:font-bold ml-6 leading-3 ">{user.groupname} </h1></div>
            <div> <p className="ml-11 leading-5 font-normal 2xl:text-xl text-slate-500 ">{user.groupdescription}</p></div>

          </div>
          <div className="md:flex mt-7 2xl:mt-10">
            <div className="bg-white md:w-60 2xl:w-72 h-min py-4 px-7 mr-7 drop-shadow-lg rounded-md mb-5">
              <div>
                <h2 className="2xl:text-base text-sm mb-2">Flashcard</h2>
              </div>
              <hr className="" />
              <div className="mt-5">
                {user.cards.map((card, index) => (
                  <ul key={index} className=" mt-2  font-medium ">
                    <li className={index === selectorCardIndex ? " text-red-500 mb-1" : "text-black mb-1 font-normal"} onClick={() => handelCardClick(index)} ><button>{card.cardname}</button></li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              <div ref={pdfRef}>
              
                <div className="prinablediv bg-white drop-shadow-lg  py-9 md:w-[600px] 2xl:w-[775px] mr-7 px-4  rounded-md " ref={printRef}>
                  <Carousel

                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    selectedItem={activeIndex}
                    onClickItem={(index) => setActiveIndex(index)}
                  >
                    {user.cards.map((card, index) => (
                      <div key={index} className=" md:grid grid-cols-5 px-5 gap-5 md:h-56 2xl:h-[340px]"  >
                        <div className=" col-start-1 col-span-3 my-auto">
                          <img className=" rounded-lg h-40 2xl:h-56 object-cover drop-shadow-lg mb-5" src={card.cardImage || Img} alt="profile" />
                        </div>
                        <div className="col-start-4 col-span-6 text-sm 2xl:text-xl text-left pl-3">
                          <p className="text-base 2xl:text-xl font-semibold mb-2 leading-3 "> {card.cardname} </p>
                          <p className=" text-slate-500">
                            {card.carddescription}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>


              <div className='mt-9 flex justify-center pb-8'>
                <div className="flex items-center carousel-navigation space-x-16">
                  <span className="carousel-arrow cursor-pointer" onClick={goToPreviousSlide}>
                    <AiOutlineLeft className="text-lg font-bold  hover:text-red-500" />
                  </span>
                  <span className="page-indicator">
                    {activeIndex + 1}/{user.cards.length}
                  </span>
                  <span className="carousel-arrow cursor-pointer" onClick={goToNextSlide}>
                    <AiOutlineRight className="text-lg hover:text-red-500" />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-80 md:w-60 2xl:w-72">
              <div>
                <div>

                  <button onClick={openModal} className="font-medium rounded-lg w-full drop-shadow-lg px-6 2xl:px-9 flex items-center py-2 2xl:py-3 bg-white"><AiOutlineShareAlt className="mr-5 text-xl 2xl:text-xl" /> Share</button>

                </div>

                <button onClick={downloadPDF} className="font-medium rounded-lg w-full drop-shadow-lg 2xl:py-3 2xl:px-9 px-6 my-4 flex items-center py-2 bg-white"><AiOutlineDownload className="mr-5 text-xl 2xl:text-2xl" /> Download</button>

               
          <button onClick={handlePrint} className="font-medium rounded-lg w-full drop-shadow-lg px-6 2xl:py-3 2xl:px-9 my-4 flex items-center py-2 bg-white">
            <AiFillPrinter className="mr-5 text-xl 2xl:text-2xl" /> Print
          </button>
              </div>

            </div >
            <div className={isOpen ? "share-parent" : ""}>
              <ShareModal className="" isOpen={isOpen} closeModal={closeModal} />
            </div>
          </div>
        </div>
    </>
  );
};

// Exporting the FlashcardDetails component
export default FlashcardDetails;
