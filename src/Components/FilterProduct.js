import "./filter.css";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { filterbycategory, filterbyname, filterbyrate } from "../JS/actions/prodActions";
function FilterProduct() {
  const category = ["Elec", "Phone", "Clothes", "Info","ALL"];
  const dispatch=useDispatch()
  const [rate, setrate] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const handlechangerate = (e) => {
    setrate({ ...rate, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    if(rate.five){
      dispatch(filterbyrate(5))
    }else if(rate.four){
      dispatch(filterbyrate(4))
    }
    else if(rate.three){
      dispatch(filterbyrate(3))
    }
    else if(rate.two){
      dispatch(filterbyrate(2))
    }
    else if(rate.one){
      dispatch(filterbyrate(1))
    }
  }, [rate]);

  return (
    <div className="filerbody">
      <Link to="/">
        {" "}
        <FcHome />
      </Link>
      {/* search bar by name */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
          onChange={(e)=>dispatch(filterbyname(e.target.value))}
        />
        <a className="search-btn">
          <i className="fas fa-search" />
        </a>
      </div>
      {/* search filter rate */}
      <div>
        <div className="star-source">
          <svg>
            <linearGradient
              x1="50%"
              y1="5.41294643%"
              x2="87.5527344%"
              y2="65.4921875%"
              id="grad"
            >
              <stop stopColor="#bf209f" offset="0%" />
              <stop stopColor="#d62a9d" offset="60%" />
              <stop stopColor="#ED009E" offset="100%" />
            </linearGradient>
            <symbol id="star" viewBox="153 89 106 108">
              <polygon
                id="star-shape"
                stroke="url(#grad)"
                strokeWidth={5}
                fill="currentColor"
                points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"
              />
            </symbol>
          </svg>
        </div>
        <div className="star-container">
          <input
            type="radio"
            name="star"
            id="five"
            onChange={handlechangerate}
          />
          <label htmlFor="five">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input
            type="radio"
            name="star"
            id="four"
            onChange={handlechangerate}
          />
          <label htmlFor="four">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input
            type="radio"
            name="star"
            id="three"
            onChange={handlechangerate}
          />
          <label htmlFor="three">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input
            type="radio"
            name="star"
            id="two"
            onChange={handlechangerate}
          />
          <label htmlFor="two">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input
            type="radio"
            name="star"
            id="one"
            onChange={handlechangerate}
          />
          <label htmlFor="one">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
        </div>
      </div>

      {/* filter by category */}

      <div>
        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" className="brd">
              <div id="selected-value">
                <span>Select a Category</span>
              </div>
              {/* <div id="chevrons">
          <i className="fas fa-chevron-up" />
          <i className="fas fa-chevron-down" />
        </div> */}
            </div>
            <div id="options">
              {category.map((el, i) => (
                <div key={i} className="option">
                  {/* <input className="s-c top" type="radio" name="platform" defaultValue="freecodecamp" /> */}
                  {/* <input className="s-c bottom" type="radio" name="platform" defaultValue="freecodecamp" /> */}
                  {/* <i className="fab fa-free-code-camp" /> */}
                  <span className="label" 
                  onClick={()=>dispatch(
                    filterbycategory(el)
                  )}
                  >{el}</span>
                  {/* <span className="opt-val">{el}</span> */}
                </div>
              ))}
              <div id="option-bg" />
            </div>
          </div>
        </form>
      </div>

      <Link to="/panier">
        <AiOutlineShoppingCart />
      </Link>
    </div>
  );
}
export default FilterProduct;
