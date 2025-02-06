import React from "react";
//THIS IS MEMO COMPONENT SAME AS PURE COMPONENT

function MemoComp ({passing}){
    // console.log("memo component")
    return(
        <div>
           <h3>This is a Memo ony used in Functional Compount</h3> {passing}
        </div>
    )
}

export default React.memo(MemoComp)