
const partyHeader = document.getElementById('party');


export const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement("p");
    p.innerHTML = string;
    let children = htmlElement.children;
    
    children = Array.from(children);
    if (children) {
        children.forEach( child => {
            htmlElement.removeChild(child);
        })
    } 
    
    htmlElement.appendChild(p);

    
};

htmlGenerator('I people who code.', partyHeader);

