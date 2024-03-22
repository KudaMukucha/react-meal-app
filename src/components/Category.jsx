import { FaFish, FaLeaf, FaPlateWheat } from "react-icons/fa6";
import { FaHamburger } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <div className="category-list">
        <NavLink to={'/meals/breakfast'} className={'nav-link'}>
            <FaPlateWheat/>
            <h4>Breakfast</h4>
        </NavLink>
        <NavLink to={'/meals/vegan'} className={'nav-link'}>
            <FaLeaf/>
            <h4>Vegan</h4>
        </NavLink>
        <NavLink to={'/meals/seafood'} className={'nav-link'}>
            <FaFish/>
            <h4>Seafood</h4>
        </NavLink>
        <NavLink to={'/meals/beef'} className={'nav-link'}>
            <FaHamburger/>
            <h4>Beef</h4>
        </NavLink>
    </div>
  )
}
