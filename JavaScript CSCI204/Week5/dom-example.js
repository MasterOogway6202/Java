// Select the first link element
const link = document.querySelector("a");

// Modify link text and href
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// Select the section element
const sect = document.querySelector("section");

// Create a new paragraph element
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// Add additional text to the existing paragraph
const text = document.createTextNode(
  " — the premier source for web development knowledge."
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Move the paragraph containing the link to the bottom
sect.appendChild(linkPara);

// Remove the paragraph from the DOM
// sect.removeChild(linkPara); // Uncomment to remove

// Apply styles dynamically
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// Alternative: Use CSS class instead of inline styles
para.setAttribute("class", "highlight");
