import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function FilterBar() {
  return (
    <div class="dropdown" style={{position:'absolute', right:'0px'}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
  style={{backgroundColor: '#F0A12A'}}>
    No filter here...
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  );
}

export default FilterBar;
