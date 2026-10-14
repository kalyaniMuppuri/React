
//react.memo child component

/*import React from "react";

const Child=()=>{
    console.log("child is re-rendering");

    return(
        <div>
            <h3>Child </h3>
        </div>
    )
}
//export default Child; //it is re-rendering
export default React.memo(Child);*/



//useCallback child component

import React from "react";

const Child = ({ child }) => {

  return (
    <div>
      <h3>Child</h3>

      <button onClick={child}>Click Child</button>
    </div>
  );
};

export default React.memo(Child);