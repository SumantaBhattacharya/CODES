import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Breadcrums = () => {

  const location = useLocation();
  // console.log("location: ", location); //  http://localhost:3000/products/5 pathnames = "/products/5" split splits string at every "/" and returns an array  ["", "products", "5"] filter  removes any falsy values from the array empty string is falsy ["products", "5"]
  const pathnames = location.pathname.split("/").filter((x) => x);
  // console.log("pathnames: ", pathnames)
  
  let breadcrumsPath = "";  

  return (
    <div>
      {/* Breadcrumb  */}
      <div className="breadcrumbs">
        { pathnames.length >0 && <Link 
          to="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>}
        {pathnames.map((name, idx)=>{
          breadcrumsPath+= `/${name}`

          const isLast = idx === pathnames.length-1;//to detect if the current index is th last index or not
          return isLast ? (
            <span
            key={breadcrumsPath}>
              /{name}
            </span>
          ): (
             <span>
              /
              <Link
              to={breadcrumsPath}
              key={breadcrumsPath}>
                {name}
              </Link>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Breadcrums
