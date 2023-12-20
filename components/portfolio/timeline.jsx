import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Timeline(props) {
  return (
    <div>
      <div className="container padding-left-all-section">
        <div className="about-timeline">
          <div className="wrapper inner-wrapper-padding ">
            <div className="start-point">
              <div className="black-dot" />
              <h4>Start</h4>
              <div className="corner bl" />
            </div>
            <div className="timeline-main">
              <div className="timeline-row">
                <div className="timeline-box timeline-content-img logo-timeline-arrow">
                  <div className="timeline-box-wrap time-box-wrap1">
                    <h6>1</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">
                          Quick call and email from us
                        </b>
                        <p className="desc mt-3">
                          We will call you or send you an email within 12 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line" />
                <div className="verticle-line" />
                <div className="corner top" />
                <div className="corner bottom" />
              </div>
              <div className="timeline-row">
                <div className="timeline-box timeline-content-img logo-timeline-arrow">
                  <div className="timeline-box-wrap">
                    <h6>2</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">Sign an NDA</b>
                        <p className="desc mt-3">
                          We know the value of privacy and confidentiality of
                          the information your project that you are going to
                          share with us. To maintain utter transparency, we will
                          sign a Non Disclosure Agreement (NDA) with you. Your
                          information is safe with us.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-box timeline-content-img logo-timeline-arrow">
                  <div className="timeline-box-wrap">
                    <h6>3</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">
                          Requirement Discussion
                        </b>
                        <p className="desc mt-3">
                          After signing an NDA, we will share your information
                          with our team Business Analysts who will study and
                          analyze it to make further documents.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line" />
                <div className="verticle-line" />
                <div className="corner top" />
                <div className="corner bottom" />
              </div>
              <div className="timeline-row">
                <div className="timeline-box img-right timeline-content-img">
                  <div className="timeline-box-wrap">
                    <h6>4</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">
                          Ballpark Estimation Approval
                        </b>
                        <p className="desc mt-3">
                          After getting a brief of project scope, a rough cost
                          estimation will be sent to you. We will need your
                          approval on the same to move ahead.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-box ">
                  <div className="timeline-box-wrap">
                    <h6>5</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">Analysis Report</b>
                        <p className="desc mt-3">
                          After getting approval on the rough estimation, we
                          will ask for all the project details which will help
                          us to make a full fledged Project Feature List and
                          cost bifurcation.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line" />
                <div className="verticle-line" />
                <div className="corner top" />
                <div className="corner bottom" />
              </div>
              <div className="timeline-row">
                <div className="timeline-box img-left timeline-content-img">
                  <div className="timeline-box-wrap">
                    <h6>6</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">Final Proposal</b>
                        <p className="desc mt-3">
                          Once you approve our Analysis report, Now we are all
                          set to sign the final contract document which will
                          have all the tiny details of Project scope, Cost
                          Bifurcation and Milestones.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-box timeline-content-img">
                  <div className="timeline-box-wrap">
                    <h6>7</h6>
                    <div className="timeline-content">
                      <div className="timeline-content-txt">
                        <b className="Gilroy-Bold text-xl">
                          Development Kick off
                        </b>
                        <p className="desc mt-3">
                          After getting a signed contract from your side, we
                          will kick off our development process and we will also
                          share the details of our development team.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line" />
                <div className="verticle-line" />
                <div className="corner top" />
                <div className="corner bottom" />
              </div>
              <div className="timeline-row end-tm-point">
                <div className="timeline-box img-left timeline-content-img">
                  <div className="timeline-box-wrap">
                    <h6> </h6>
                  </div>
                </div>
                <div className="horizontal-line" />
                <div className="verticle-line" />
                <div className="corner top" />
                <div className="corner bottom" />
                <div className="start-point end-point">
                  <h4 className="mb-0">End</h4>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image  
         
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6813.png"
                alt=""
                width={1500}
                height={1500}
                className=" w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
