import { Link } from "react-router-dom";
import card from "../../assets/images/card";
const Cars = ({ cars }) => {
  return (
    <>
      <section className="text-center">
        <h2 className="mb-5 text-capitalize">Most popular cars rental deals</h2>
        <div className="container">
          <div className="row gy-3 py-5 mb-5 justify-content-center">
            {cars.map((car) => {
              const randomImg = Math.floor(Math.random() * 3 + 1);
              return (
                <div
                  key={car.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-12 justify-content-center d-flex"
                >
                  <div
                    className="card text-start shadow"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={
                        randomImg == 1
                          ? card.car1
                          : randomImg == 2
                          ? card.car2
                          : card.car3
                      }
                      className="card-img-top p-4"
                      alt="car"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{`${car.make} ${car.model}`}</h5>
                      <div className="d-flex align-items-baseline">
                        <img src={card.star} alt="" />
                        <p className="fw-bold mb-0">4.6</p>
                        <p className="fw-light mb-0">(1345 reviews)</p>
                      </div>
                      <div className="row g-0 mb-1 border-1 border-secondary border-bottom">
                        <div className="col-6 d-flex align-items-baseline">
                          <img className="me-1" src={card.user} alt="" />
                          <p className="fw-light small">2 Passanger</p>
                        </div>

                        <div className="col-6 d-flex align-items-baseline">
                          <img
                            className="me-1"
                            src={card.Airconditioning}
                            alt=""
                          />
                          <p className="fw-light small">Air conditioning</p>
                        </div>
                        <div className="col-6 d-flex align-items-baseline">
                          <img
                            className="me-1"
                            style={{ width: "20px" }}
                            src={card.calendar}
                            alt=""
                          />
                          <p className="fw-light small">{`${car.year}`}</p>
                        </div>
                        <div className="col-6 d-flex align-items-baseline">
                          <img className="me-1" src={card.Frame} alt="" />
                          <p className="fw-light small">{`${car.transmission}`}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-baseline">
                        <p className="text-muted me-auto">Price</p>
                        <p>
                          <span className="fw-bold">{`$${car.price}`}</span>/
                          day
                        </p>
                      </div>
                      <Link
                        to={`/home/all-vehicles/car/${car.id}`}
                        className="btn btn-primary w-100"
                      >
                        View Details <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
