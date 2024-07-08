import React, { useState } from "react";
import axios from 'axios';

const Site = (props) => {
  const [isStarted, setIsStarted] = useState(props.isStarted);
  const handleClick = (funcName) => {
    setIsStarted(!isStarted);
    if (isStarted == false) {
      print ("Start_Scraping_Download")
    }
  };
  return (
    <div className="grid grid-cols-4 items-center font-secular">
      <p>{props.siteName}</p>
      <div className="flex justify-center">
        <div class="btn-conteiner" onClick={handleClick}>
          <a class="btn-content" href="#">
            {isStarted === false ? (
              <span class="btn-title">START</span>
            ) : (
              <span class="btn-title">STOP</span>
            )}
            <span class="icon-arrow">
              <svg
                width="66px"
                height="43px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="arrow"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    id="arrow-icon-one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    id="arrow-icon-two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    id="arrow-icon-three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="text-center loader3">
        {isStarted === false ? (
          <div></div>
        ) : (
          <div className="flex">
            <div class="bars bar1"></div>
            <div class="bars bar2"></div>
            <div class="bars bar3"></div>
            <div class="bars bar4"></div>
            <div class="bars bar5"></div>
            <div class="bars bar6"></div>
            <div class="bars bar7"></div>
            <div class="bars bar8"></div>
            <div class="bars bar9"></div>
            <div class="bars bar10"></div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button class="Documents-btn">
          <span class="folderContainer">
            <svg
              class="fileBack"
              width="146"
              height="113"
              viewBox="0 0 146 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                fill="url(#paint0_linear_117_4)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_117_4"
                  x1="0"
                  y1="0"
                  x2="72.93"
                  y2="95.4804"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8F88C2"></stop>
                  <stop offset="1" stop-color="#5C52A2"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              class="filePage"
              width="88"
              height="99"
              viewBox="0 0 88 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="88"
                height="99"
                fill="url(#paint0_linear_117_6)"
              ></rect>
              <defs>
                <linearGradient
                  id="paint0_linear_117_6"
                  x1="0"
                  y1="0"
                  x2="81"
                  y2="160.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="#686868"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              class="fileFront"
              width="160"
              height="79"
              viewBox="0 0 160 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                fill="url(#paint0_linear_117_5)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_117_5"
                  x1="38.7619"
                  y1="8.71323"
                  x2="66.9106"
                  y2="82.8317"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C3BBFF"></stop>
                  <stop offset="1" stop-color="#51469A"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p class="text">Documents</p>
        </button>
      </div>
    </div>
  );
};

export default Site;
