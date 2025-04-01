import { useRef, useEffect, useState } from "react";

function Deletion(evetargetdiv) {

    if (evetargetdiv) {
        evetargetdiv.remove(); 
    }
  };

    
export default Deletion;