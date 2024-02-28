import PropTypes from "prop-types";


// this is a render on the buyers page and how this is rendered

function ItemProps(props) {
  return (

    <div className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title">
            {" "}
            {/* <img
              src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
              alt="avatar"
              className="card-person"
            /> */}
            {props.Name} 
            {props.Price}
          </h4>
          <p>{props.Quantity}</p>

        </div>
      </div>
      </div>
  );
}
ItemProps.propTypes = {
  Name: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  Quantity: PropTypes.string.isRequired,
};

export default ItemProps;