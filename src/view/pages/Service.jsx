import "../../App.css";
import ServicesCard from "../../component/ServicesCard";
import HeaderSection from "../../component/HeaderSection";
import { bannerData, components, services, headerData, componentData } from "../../utils/constant";
import TechnologySection from "../../component/TechnologySection";
import BannerSection from "../../component/BannerSection";
import IndsSection from "../../component/IndsSection";
import ChooseSection from "../../component/ChooseSection";


function Service() {
  return (
    <>
      <div className="first">
        {headerData.map((item) => (
          <HeaderSection
            key={item.id}
            heading={item.heading}
            content={item.content}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <div className="second">
        <TechnologySection data={componentData} />
      </div>
      <div className="third">
        <BannerSection data={bannerData} />
      </div>
      <section className="seven">
        <IndsSection />
      </section>
      <section className="six">
        <ChooseSection />
      </section>
      {/* <Container className="intro-section">
        <Row>
          <div className="text-start col-sm-8 col-12">
            <h1>Digital Marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, facilis dolore temporibus aspernatur distinctio
              quisquam voluptas suscipit totam deserunt sapiente deleniti quam
              minus reprehenderit voluptatibus harum neque. Maiores quidem iste
              architecto enim fugiat blanditiis. Dicta voluptatum omnis numquam,
              ullam iste quidem? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos tenetur facere unde quae.
            </p>
            <p>
              Ducimus architecto unde vitae sapiente, nam perspiciatis
              asperiores deserunt. Enim cumque quas consequuntur a cum facere
              aspernatur.
            </p>
            <Button variant="primary">Let's Talk</Button>
          </div>
          <div className="banner-img col-sm-4 col-12">
            <img src={img1} alt="Logo" />
          </div>
        </Row>
      </Container>
      <Container className="Marketing-section">
        First Row
        <Row>
          <Col>
            <h2 className="text-center">What we do in digital marketing</h2>
          </Col>
        </Row>

        Second Row
        <Row className="cards">
          {components.map((component) => (
            <div className="col-sm-6 col-12" key={component.id}>
              <div className="mt-4 text-start">
                <h3 className="d-flex gap-2 align-items-center">
                  {component.icon} {component.heading}
                </h3>
                <p>{component.content}</p>
              </div>
            </div>
          ))}
        </Row>
      </Container> */}
      <section className="fourth d-flex align-items-center">
        <div className="Banner-section container">
          <div className="row">
            <div className="text-start col-12 text-center">
              <h1>Have an project in mind.</h1>
              <button className=" d-flex gap-2 align-items-center">
                Let's Talk
                <svg
                  width="17"
                  height="9"
                  viewBox="0 0 17 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3536 4.85355C16.5488 4.65829 16.5488 4.34171 16.3536 4.14645L13.1716 0.964467C12.9763 0.769205 12.6597 0.769205 12.4645 0.964467C12.2692 1.15973 12.2692 1.47631 12.4645 1.67157L15.2929 4.5L12.4645 7.32843C12.2692 7.52369 12.2692 7.84027 12.4645 8.03553C12.6597 8.2308 12.9763 8.2308 13.1716 8.03554L16.3536 4.85355ZM-4.37114e-08 5L16 5L16 4L4.37114e-08 4L-4.37114e-08 5Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth">
        <div className="Services-section text-center container">
          {/* <Row>
          <Col>
            <h2>Explore More Services</h2>
          </Col>
        </Row> */}

          {/* Service Cards */}
          <div className="row">
            {services.map((service) => (
              <div className="col-sm-3 col-12 servicecard" key={service.id}>
                <ServicesCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
