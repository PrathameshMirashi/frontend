import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
const API = "http://localhost:5000/api/products";
const Home = () => {
  const [popproduct, setPopProcduct] = useState([]);
  // const [productCat, setProcductCat] = useState([]);

  const fetchPopProduct = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        // console.log(data[0], data[1]);
        setPopProcduct(data);
      }
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
    // console.log(response[0], response[1]);
  };
  useEffect(() => {
    fetchPopProduct(API);
  }, []);
  return (
    <div>
      <div className="row my-3 justify-content-between">
        {popproduct !== [] ? (
          popproduct.map((d) => {
            return (
              <div key={d._id} className="col-12 col-md-5 col-lg-3 ">
                <NavBar data={d} />
                {/* <Products
                    productItem={d}
                    // Title={d.Title}
                    // Img={d.Img}
                    // Price={d.Price}
                  ></Products> */}
                {/* {console.log(d)} */}
              </div>
            );
          })
        ) : (
          <div>no such data found</div>
        )}
      </div>
    </div>
  );
};
export default Home;
