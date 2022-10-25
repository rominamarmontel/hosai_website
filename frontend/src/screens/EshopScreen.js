import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
//import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

const EshopScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  //useEffect hook to make a request to backend
  //we want these products as soon as the component loads
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Row className="container text-left mx-auto">
        <Col md={1}>
          <Link to="/">
            <p>Accueil</p>
          </Link>
        </Col>
        <Col md={11}>
          <p>
            <strong> Store</strong>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <div className="titleStore">
            <strong>Store</strong>
          </div>
        </Col>
        <Col md={2}>
          <i className="fa-brands fa-facebook-f px-2 pt-5 fa-lg size"></i>
          <i className="fa-brands fa-twitter px-2 fa-lg size"></i>
          <i className="fa-brands fa-youtube px-2 fa-lg size"></i>
          <i className="fa-brands fa-square-instagram px-2 fa-lg size"></i>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Meta title="STORE" />
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default EshopScreen;
