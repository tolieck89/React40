import { useRef, useEffect, useState } from "react";

function Deletion(event) {
        const targetDiv = event.target.closest("[data-id]"); 
        if (targetDiv) {
            targetDiv.remove(); 
        }
    };


export default Deletion;