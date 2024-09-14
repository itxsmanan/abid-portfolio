import React from "react";

function heroSection() {
  return (
    <div>
      <main className="site-content" id="content">
        {/* <!-- HERO SECTION START --> */}
        <section className="hero-section d-flex align-items-center" id="intro">
          <div className="intro_text">
            <svg viewBox="0 0 1320 300">
              <text x="50%" Y="50%" text-anchor="middle">
                HI
              </text>
            </svg>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hero-content-box">
                  <span
                    className="hero-sub-title wow fadeInLeft"
                    data-wow-delay="1.1s"
                  >
                    I am Gerold
                  </span>
                  <h1
                    className="hero-title wow fadeInLeft"
                    data-wow-delay="1.2s"
                  >
                    Web Developer +<br />
                    UX Designer
                  </h1>

                  <div
                    className="hero-image-box d-md-none text-center wow fadeInRight"
                    data-wow-delay="1.3s"
                  >
                    <img src="/src/assets/img/hero/me.png" alt="" />
                  </div>

                  <p className="lead wow fadeInLeft" data-wow-delay="1.4s">
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </p>
                  <div className="button-box d-flex flex-wrap align-items-center">
                    <a
                      href="#"
                      className="btn tj-btn-secondary wow fadeInLeft"
                      data-wow-delay="1.5s"
                    >
                      Download CV
                    </a>
                    <ul
                      className="ul-reset social-icons wow fadeInLeft"
                      data-wow-delay="1.6s"
                    >
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-light fa-basketball"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <div
                  className="hero-image-box text-center wow fadeInRight"
                  data-wow-delay="1.5s"
                >
                  <img src="/src/assets/img/hero/me.png" alt="" />
                </div>
              </div>
            </div>

            <div className="funfact-area">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                    <div className="number">
                      <span className="odometer" data-count="14">
                        0
                      </span>
                    </div>
                    <div className="text">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                    <div className="number">
                      <span className="odometer" data-count="50">
                        0
                      </span>
                      +
                    </div>
                    <div className="text">
                      Project <br />
                      Completed
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                    <div className="number">
                      <span className="odometer" data-count="1.5">
                        0
                      </span>
                      K
                    </div>
                    <div className="text">
                      Happy <br />
                      Clients
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                    <div className="number">
                      <span className="odometer" data-count="14">
                        0
                      </span>
                    </div>
                    <div className="text">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- HERO SECTION END --> */}

        {/* <!-- SERVICES SECTION START --> */}
        <section className="services-section" id="services-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    My Quality Services
                  </h2>
                  <p className=" wow fadeInUp" data-wow-delay=".4s">
                    We put your ideas and thus your wishes in the form of a
                    unique web project that inspires you and you customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="services-widget position-relative">
                  <div
                    className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="left-box d-flex flex-wrap align-items-center">
                      <span className="number">01</span>
                      <h3 className="service-title">Branding Design</h3>
                    </div>
                    <div className="right-box">
                      <p>
                        I break down complex user experinece problems to create
                        integritiy focussed solutions that connect billions of
                        people
                      </p>
                    </div>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#service-wrapper"
                      className="service-link modal-popup"
                    ></button>
                  </div>
                  <div
                    className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="left-box d-flex flex-wrap align-items-center">
                      <span className="number">02</span>
                      <h3 className="service-title">Web Design</h3>
                    </div>
                    <div className="right-box">
                      <p>
                        I break down complex user experinece problems to create
                        integritiy focussed solutions that connect billions of
                        people
                      </p>
                    </div>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#service-wrapper"
                      className="service-link modal-popup"
                    ></button>
                  </div>
                  <div
                    className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="left-box d-flex flex-wrap align-items-center">
                      <span className="number">03</span>
                      <h3 className="service-title">UI/UX Design</h3>
                    </div>
                    <div className="right-box">
                      <p>
                        I break down complex user experinece problems to create
                        integritiy focussed solutions that connect billions of
                        people
                      </p>
                    </div>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#service-wrapper"
                      className="service-link modal-popup"
                    ></button>
                  </div>
                  <div
                    className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="left-box d-flex flex-wrap align-items-center">
                      <span className="number">04</span>
                      <h3 className="service-title">Graphics Design</h3>
                    </div>
                    <div className="right-box">
                      <p>
                        I break down complex user experinece problems to create
                        integritiy focussed solutions that connect billions of
                        people
                      </p>
                    </div>
                    <i className="flaticon-up-right-arrow"></i>
                    <button
                      data-mfp-src="#service-wrapper"
                      className="service-link modal-popup"
                    ></button>
                  </div>
                  <div
                    className="active-bg wow fadeInUp"
                    data-wow-delay=".5s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- SERVICES SECTION END --> */}

        {/* <!-- start: Service Popup --> */}
        <div
          id="service-wrapper"
          className="popup_content_area zoom-anim-dialog mfp-hide"
        >
          <div className="popup_modal_img">
            <img src="/src/assets/img/services/modal-im/g.jpg" alt="" />
          </div>

          <div className="popup_modal_content">
            <div className="service_details">
              <div className="row">
                <div className="col-lg-7 col-xl-8">
                  <div className="service_details_content">
                    <div className="service_info">
                      <h6 className="subtitle">SERVICES</h6>
                      <h2 className="title">UI/UX Design</h2>
                      <div className="desc">
                        <p>
                          Elizabeth some dodgy chavs are you taking the piss
                          faff about pardon amongst car boot a load of old tosh
                          is cracking goal blow off telling brown.
                        </p>

                        <p>
                          Brolly show off show off pick your nose and blow off
                          well A bit of how’s your father tomfoolery blimey, me
                          old mucker starkers Queen’s English dropped a clanger
                          bite your arm spiffing good time burke Why chancer.
                          Hotpot bum bag cracking goal young delinquent naff
                          bugger cup of chars bender loo it’s all gone to pot
                          the nancy cheeky.
                        </p>

                        <p>
                          At public school cras bog some dodgy chav Richard Why
                          argy bargy vagabon William bender matie boy, off his
                          nut chancer Jeffrey up the kyver say mufty you mug
                          ummm telling pear shaped Oxford owt to do with me do
                          one so said are you taking his.
                        </p>
                      </div>

                      <h3 className="title">Services Process</h3>
                      <div className="desc">
                        <p>
                          Elizabeth some dodgy chavs are you taking the piss
                          faff about pardon amongst car boot a load of old tosh
                          is cracking goal blow off telling brown.
                        </p>
                      </div>
                      <ul>
                        <li>Reinvent Your Business to Better</li>
                        <li>Pioneering the Internet's First</li>
                        <li>Pioneering the Design World's First</li>
                        <li>Pioneering the Design World's First</li>
                        <li>Pioneering the Design World's First</li>
                        <li>Pioneering the Design World's First</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                  <div className="tj_main_sidebar">
                    <div className="sidebar_widget services_list">
                      <div className="widget_title">
                        <h3 className="title">All Services</h3>
                      </div>
                      <ul>
                        <li className="active">
                          <button>
                            <i className="flaticon-design"></i>
                            Branding Design
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="flaticon-3d-movie"></i>
                            3D Animation
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="flaticon-ux-design"></i>
                            UI/UX Design
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="flaticon-web-design"></i>
                            Web Design
                          </button>
                        </li>
                        <li>
                          <button>
                            <i className="flaticon-ui-design"></i>
                            App Design
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="sidebar_widget contact_form">
                      <div className="widget_title">
                        <h3 className="title">Get in Touch</h3>
                      </div>

                      <form action="index.html">
                        <div className="form_group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            autocomplete="off"
                          />
                        </div>
                        <div className="form_group">
                          <input
                            type="email"
                            name="semail"
                            id="semail"
                            placeholder="Email"
                            autocomplete="off"
                          />
                        </div>
                        <div className="form_group">
                          <textarea
                            name="smessage"
                            id="smessage"
                            placeholder="Your message"
                            autocomplete="off"
                          ></textarea>
                        </div>
                        <div className="form_btn">
                          <button className="btn tj-btn-primary" type="submit">
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end: Service Popup --> */}

        {/* <!-- PORTFOLIO SECTION START --> */}
        <section className="portfolio-section" id="works-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    My Recent Works
                  </h2>
                  <p className=" wow fadeInUp" data-wow-delay=".4s">
                    We put your ideas and thus your wishes in the form of a
                    unique web project that inspires you and you customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div
                  className="portfolio-filter text-center wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="button-group filter-button-group">
                    <button data-filter="*" className="active">
                      All
                    </button>
                    <button data-filter=".uxui">UX/UI</button>
                    <button data-filter=".branding">Branding</button>
                    <button data-filter=".mobile-app">Apps</button>
                    <div className="active-bg"></div>
                  </div>
                </div>

                <div
                  className="portfolio-box wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="portfolio-sizer"></div>
                  <div className="gutter-sizer"></div>
                  <div className="portfolio-item branding">
                    <div className="image-box">
                      <img src="/src/assets/img/portfolio/2.jpg" alt="" />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">Deloitte</h3>
                      <p>Project was about precision and information.</p>
                      <i className="flaticon-up-right-arrow"></i>
                      <button
                        data-mfp-src="#portfolio-wrapper"
                        className="portfolio-link modal-popup"
                      ></button>
                    </div>
                  </div>
                  <div className="portfolio-item uxui">
                    <div className="image-box">
                      <img src="/src/assets/img/portfolio/1.jpg" alt="" />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">New Age</h3>
                      <p>Project was about precision and information.</p>
                      <i className="flaticon-up-right-arrow"></i>
                      <button
                        data-mfp-src="#portfolio-wrapper"
                        className="portfolio-link modal-popup"
                      ></button>
                    </div>
                  </div>
                  <div className="portfolio-item mobile-app">
                    <div className="image-box">
                      <img src="/src/assets/img/portfolio/3.jpg" alt="" />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">Sebastian</h3>
                      <p>Project was about precision and information.</p>
                      <i className="flaticon-up-right-arrow"></i>
                      <button
                        data-mfp-src="#portfolio-wrapper"
                        className="portfolio-link modal-popup"
                      ></button>
                    </div>
                  </div>
                  <div className="portfolio-item branding">
                    <div className="image-box">
                      <img src="/src/assets/img/portfolio/4.jpg" alt="" />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">Mochnix</h3>
                      <p>Project was about precision and information.</p>
                      <i className="flaticon-up-right-arrow"></i>
                      <button
                        data-mfp-src="#portfolio-wrapper"
                        className="portfolio-link modal-popup"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- PORTFOLIO SECTION END --> */}

        {/* <!-- start: Portfolio Popup --> */}
        <div
          id="portfolio-wrapper"
          className="popup_content_area zoom-anim-dialog mfp-hide"
        >
          <div className="popup_modal_img">
            <img src="/src/assets/img/portfolio/modal-i/mg.jpg" alt="" />
          </div>

          <div className="popup_modal_content">
            <div className="portfolio_info">
              <div className="portfolio_info_text">
                <h2 className="title">DStudio</h2>
                <div className="desc">
                  <p>
                    They are was greater open above shelter lets itself under
                    appear sixth open gathering made upon can't own above midst
                    gathering gathered he one us saying can't divide.
                  </p>
                </div>
                <a href="#" className="btn tj-btn-primary">
                  live preview <i className="fal fa-arrow-right"></i>
                </a>
              </div>
              <div className="portfolio_info_items">
                <div className="info_item">
                  <div className="key">Category</div>
                  <div className="value">Web Design</div>
                </div>
                <div className="info_item">
                  <div className="key">Client</div>
                  <div className="value">Artboard Studio</div>
                </div>
                <div className="info_item">
                  <div className="key">Start Date</div>
                  <div className="value">August 20, 2023</div>
                </div>
                <div className="info_item">
                  <div className="key">Designer</div>
                  <div className="value">
                    <a href="#">ThemeJunction</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio_gallery owl-carousel">
              <div className="gallery_item">
                <img
                  src="/src/assets/img/portfolio-gallery//p-gallery-1.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_item">
                <img
                  src="/src/assets/img/portfolio-gallery//p-gallery-2.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_item">
                <img
                  src="/src/assets/img/portfolio-gallery//p-gallery-3.jpg"
                  alt=""
                />
              </div>
              <div className="gallery_item">
                <img
                  src="/src/assets/img/portfolio-gallery//p-gallery-4.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="portfolio_description">
              <h2 className="title">Project Description</h2>
              <div className="desc">
                <p>
                  The goal is there are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which don't
                  look even slightly believable.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
            </div>

            <div className="portfolio_story_approach">
              <div className="portfolio_story">
                <div className="story_title">
                  <h4 className="title">The story</h4>
                </div>
                <div className="story_content">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. There
                    are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
              <div className="portfolio_approach">
                <div className="approach_title">
                  <h4 className="title">OUR APPROACH</h4>
                </div>
                <div className="approach_content">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. There
                    are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio_navigation">
              <div className="navigation_item prev-project">
                <a href="#" className="project">
                  <i className="fal fa-arrow-left"></i>
                  <div className="nav_project">
                    <div className="label">Previous Project</div>
                    <h3 className="title">Sebastian</h3>
                  </div>
                </a>
              </div>

              <div className="navigation_item next-project">
                <a href="#" className="project">
                  <div className="nav_project">
                    <div className="label">Next Project</div>
                    <h3 className="title">Qwillo</h3>
                  </div>
                  <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end: Portfolio Popup --> */}

        {/* <!-- RESUME SECTION START --> */}
        <section className="resume-section" id="resume-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="section-header wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h2 className="section-title">My Experience</h2>
                </div>

                <div className="resume-widget">
                  <div
                    className="resume-item wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    <div className="time">2022 - Present</div>
                    <h3 className="resume-title">Lead Developer</h3>
                    <div className="institute">Blockdots, London</div>
                  </div>
                  <div
                    className="resume-item wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <div className="time">2021 - 2022</div>
                    <h3 className="resume-title">Full Stack Web Developer</h3>
                    <div className="institute">Parsons, The New School</div>
                  </div>
                  <div
                    className="resume-item wow fadeInLeft"
                    data-wow-delay=".6s"
                  >
                    <div className="time">2020 - 2021</div>
                    <h3 className="resume-title">UI Designer</h3>
                    <div className="institute">House of Life, Leeds</div>
                  </div>
                  <div
                    className="resume-item wow fadeInLeft"
                    data-wow-delay=".7s"
                  >
                    <div className="time">2018 - 2020</div>
                    <h3 className="resume-title">Junior Graphics Designer</h3>
                    <div className="institute">Theme Junction, Bursa</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="section-header wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h2 className="section-title">My Education</h2>
                </div>

                <div className="resume-widget">
                  <div
                    className="resume-item wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="time">2020 - 2023</div>
                    <h3 className="resume-title">Programming course</h3>
                    <div className="institute">Harverd University</div>
                  </div>
                  <div
                    className="resume-item wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="time">2016 - 2020</div>
                    <h3 className="resume-title">Graphic design course</h3>
                    <div className="institute">University of Denmark</div>
                  </div>
                  <div
                    className="resume-item wow fadeInRight"
                    data-wow-delay=".7s"
                  >
                    <div className="time">2012 - 2015</div>
                    <h3 className="resume-title">Web design course</h3>
                    <div className="institute">University of California</div>
                  </div>
                  <div
                    className="resume-item wow fadeInRight"
                    data-wow-delay=".8s"
                  >
                    <div className="time">2010 - 2011</div>
                    <h3 className="resume-title">Design & Technology</h3>
                    <div className="institute">Parsons, The New School</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- RESUME SECTION END --> */}

        {/* <!-- SKILLS SECTION START --> */}
        <section className="skills-section" id="skills-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    My Skills
                  </h2>
                  <p className=" wow fadeInUp" data-wow-delay=".4s">
                    We put your ideas and thus your wishes in the form of a
                    unique web project that inspires you and you customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                  <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src="/src/assets/img/icons/figma.svg" alt="" />
                      </div>
                      <div className="number">92%</div>
                    </div>
                    <p>Figma</p>
                  </div>
                  <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src="/src/assets/img/icons/sketch.svg" alt="" />
                      </div>
                      <div className="number">80%</div>
                    </div>
                    <p>Sketch</p>
                  </div>
                  <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src="/src/assets/img/icons/xd.svg" alt="/" />
                      </div>
                      <div className="number">85%</div>
                    </div>
                    <p>XD</p>
                  </div>
                  <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src="/src/assets/img/icons/wp.svg" alt="" />
                      </div>
                      <div className="number">99%</div>
                    </div>
                    <p>WordPess</p>
                  </div>
                  <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src="/src/assets/img/icons/react.svg" alt="" />
                      </div>
                      <div className="number">89%</div>
                    </div>
                    <p>React</p>
                  </div>
                  <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img src="/src/assets/img/icons/js.svg" alt="" />
                      </div>
                      <div className="number">93%</div>
                    </div>
                    <p>JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- SKILLS SECTION END --> */}

        {/* <!-- TESTIMONIAL SECTION START --> */}
        <section className="testimonial-section" id="testimonials-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-header">
                  <h2
                    className="section-title wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    My Client's Stories
                  </h2>
                  <p className=" wow fadeInLeft" data-wow-delay=".4s">
                    Empowering people in new a digital journey with my super
                    services
                  </p>
                </div>
              </div>

              <div className="col-lg-7 col-xl-6 offset-xl-1">
                <div
                  className="testimonials-widget wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item">
                      <div className="top-area d-flex flex-wrap justify-content-between">
                        <div className="logo-box">
                          <img
                            src="/src/assets/img/testimonials/logo/1/.png"
                            alt=""
                          />
                        </div>
                        <div className="image-box">
                          <img
                            src="/src/assets/img/testimonials/user/1/.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="icon-box">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_588)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_588"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_589)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_589"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="quote">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.{" "}
                      </p>
                      <h4 className="name">Brandon Fraser</h4>
                      <span className="designation">
                        Senior Software Dev, Cosmic Sport
                      </span>
                    </div>
                    <div className="testimonial-item">
                      <div className="top-area d-flex flex-wrap justify-content-between">
                        <div className="logo-box">
                          <img
                            src="/src/assets/img/testimonials/logo/2/.png"
                            alt=""
                          />
                        </div>
                        <div className="image-box">
                          <img
                            src="/src/assets/img/testimonials/user/2/.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="icon-box">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_511)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_511"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_510)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_510"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="quote">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.{" "}
                      </p>
                      <h4 className="name">Tim Bailey</h4>
                      <span className="designation">
                        SEO Specialist, Theme Junction
                      </span>
                    </div>
                    <div className="testimonial-item">
                      <div className="top-area d-flex flex-wrap justify-content-between">
                        <div className="logo-box">
                          <img
                            src="/src/assets/img/testimonials/logo/1/.png"
                            alt=""
                          />
                        </div>
                        <div className="image-box">
                          <img
                            src="/src/assets/img/testimonials/user/1/.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="icon-box">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_512)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_512"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_513)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_513"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="quote">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.{" "}
                      </p>
                      <h4 className="name">Brandon Fraser</h4>
                      <span className="designation">
                        Senior Software Dev, Cosmic Sport
                      </span>
                    </div>
                    <div className="testimonial-item">
                      <div className="top-area d-flex flex-wrap justify-content-between">
                        <div className="logo-box">
                          <img
                            src="/src/assets/img/testimonials/logo/2/.png"
                            alt=""
                          />
                        </div>
                        <div className="image-box">
                          <img
                            src="/src/assets/img/testimonials/user/2/.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="icon-box">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_514)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_514"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_515)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_515"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stop-color="var(--tj-theme-primary)"
                              />
                              <stop
                                offset="1"
                                stop-color="#140C1C"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="quote">
                        “Taylor is a professional Designer he really helps my
                        business by providing value to my business.{" "}
                      </p>
                      <h4 className="name">Tim Bailey</h4>
                      <span className="designation">
                        SEO Specialist, Theme Junction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- TESTIMONIAL SECTION END --> */}

        {/* <!-- BLOG SECTION STAR --> */}
        {/* <section className="blog-section" id="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <h2
                    className="section-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Recent Blogs
                  </h2>
                  <p className=" wow fadeInUp" data-wow-delay=".4s">
                    We put your ideas and thus your wishes in the form of a
                    unique web project that inspires you and you customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src="/src/assets/img/blog/1.jpg" alt="" />
                    </a>
                    <a href="#" className="category">
                      Tutorial
                    </a>
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <ul className="ul-reset">
                        <li>
                          <i className="fa-light fa-calendar-days"></i> Oct 01,
                          2022
                        </li>
                        <li>
                          <i className="fa-light fa-comments"></i>{" "}
                          <a href="#">Comment (0)</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">top 10 ui ux designers</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item wow fadeInUp" data-wow-delay=".6s">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src="/src/assets/img/blog/2.jpg" alt="" />
                    </a>
                    <a href="#" className="category">
                      TIPS
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <ul className="ul-reset">
                        <li>
                          <i className="fa-light fa-calendar-days"></i> Nov 01,
                          2022
                        </li>
                        <li>
                          <i className="fa-light fa-comments"></i>{" "}
                          <a href="#">Comment (0)</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">App Development Guides</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item wow fadeInUp" data-wow-delay=".7s">
                  <div className="blog-thumb">
                    <a href="blog-details.html">
                      <img src="/src/assets/img/blog/3.jpg" alt="" />
                    </a>
                    <a href="#" className="category">
                      FREEBIES
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <ul className="ul-reset">
                        <li>
                          <i className="fa-light fa-calendar-days"></i> Dec 01,
                          2022
                        </li>
                        <li>
                          <i className="fa-light fa-comments"></i>{" "}
                          <a href="#">Comment (0)</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">learn graphic design free</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- BLOG SECTION END --> */}

        {/* <!-- CONTACT SECTION START --> */}
        <section className="contact-section" id="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 order-2 order-md-1">
                <div
                  className="contact-form-box wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="section-header">
                    <h2 className="section-title">Let’s work together!</h2>
                    <p>
                      I design and code beautifully simple things and i love
                      what i do. Just simple like that!
                    </p>
                  </div>

                  <div className="tj-contact-form">
                    <form action="index.html">
                      <div className="row gx-3">
                        <div className="col-sm-6">
                          <div className="form_group">
                            <input
                              type="text"
                              name="fname"
                              id="fname"
                              placeholder="First name"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form_group">
                            <input
                              type="text"
                              name="lname"
                              id="lname"
                              placeholder="Last name"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form_group">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email address"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form_group">
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              placeholder="Phone number"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form_group">
                            <select
                              name="service"
                              id="service"
                              className="tj-nice-select"
                            >
                              <option value="" selected disabled>
                                Choose Service
                              </option>
                              <option value="braning">Branding Design</option>
                              <option value="web">Web Design</option>
                              <option value="uxui">UI/UX Design</option>
                              <option value="app">App Design</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form_group">
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form_btn">
                            <button
                              type="submit"
                              className="btn tj-btn-primary"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
                <div className="contact-info-list">
                  <ul className="ul-reset">
                    <li
                      className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                      data-wow-delay=".4s"
                    >
                      <div className="icon-box">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="text-box">
                        <p>Phone</p>
                        <a href="tel:0123456789">+01 123 654 8096</a>
                      </div>
                    </li>
                    <li
                      className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                      data-wow-delay=".5s"
                    >
                      <div className="icon-box">
                        <i className="flaticon-mail-inbox-app"></i>
                      </div>
                      <div className="text-box">
                        <p>Email</p>
                        <a href="mailto:mail@mail.com">gerolddesign@mail.com</a>
                      </div>
                    </li>
                    <li
                      className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                      data-wow-delay=".6s"
                    >
                      <div className="icon-box">
                        <i className="flaticon-location"></i>
                      </div>
                      <div className="text-box">
                        <p>Address</p>
                        <a href="#">
                          Warne Park Street Pine, <br />
                          FL 33157, New York
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CONTACT SECTION END --> */}
      </main>
    </div>
  );
}

export default heroSection;
