'use client';

import { useState, useEffect } from "react";
import { FaqList } from "../config/api";

export function FaqComponent() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [faqItems, setFaqItems] = useState([]);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 5;

  const toggleAnswer = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };
  
  // Function to calculate and set paginated data
  const paginateData = (items) => {
    const total = Math.ceil(items.length / itemsPerPage);
    setTotalPages(total);
    
    const paginated = items.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    
    setPaginatedItems(paginated);
  };

  // Fetch FAQ data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFaqList();
        console.log("response==>",response);
        setFaqItems(response);
        paginateData(response);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
        setFaqItems(sampleFaqItems);
        paginateData(sampleFaqItems);
      }
    };
    
    fetchData();
  }, []);
  
  useEffect(() => {
    paginateData(faqItems);
  }, [currentPage, faqItems]);

  async function getFaqList() {
    return await FaqList();
  }

  const handlePageChange = (page) => {
    setActiveIndex(null);
    setCurrentPage(page);
  };

  return (
    <>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="elementskit-post-image-card" style={{ margin: "0px" }}>
                <div className="elementskit-post-body">
                  
                  {paginatedItems.map((item, index) => {
                    const actualIndex = (currentPage - 1) * itemsPerPage + index;
                    // console.log("actualIndex",actualIndex)
                    return (
                      <div key={actualIndex}>
                        <h2
                          className="entry-title question"
                          style={{
                            padding: "20px 30px",
                            backgroundColor: "#eee",
                            borderRadius: "18px",
                            cursor: "pointer",
                            marginBottom: activeIndex === actualIndex ? "0" : "10px"
                          }}
                          onClick={() => toggleAnswer(actualIndex)}
                        >
                          {`${(actualIndex+1)}.  ${item.question}`}
                          <i
                            className={`lni lni-chevron-${activeIndex === actualIndex ? 'up' : 'down'}-circle`}
                            style={{ float: "right" }}
                            aria-hidden="true"
                          ></i>
                        </h2>
                        <div
                          className="btn-wraper answer"
                          style={{
                            display: activeIndex === actualIndex ? "block" : "none",
                            padding: "0px 40px 30px",
                            marginBottom: "10px"
                          }}
                        >
                          {item.answer}
                        </div>
                      </div>
                    );
                  })}

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="pagination-controls" style={{ textAlign: "center", marginTop: "30px" }}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          style={{
                            margin: "0 5px",
                            padding: "8px 16px",
                            backgroundColor: page === currentPage ? "#333" : "#ddd",
                            color: page === currentPage ? "#fff" : "#000",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                          }}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}