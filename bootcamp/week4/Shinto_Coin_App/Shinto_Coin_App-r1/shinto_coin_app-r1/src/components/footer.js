import React from "react";

const footerStyle = {
  fontSize: "20px",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "0px 0px 15px 0px",
  margin:'0px 15px 0px 15px',
  position: "fixed",
  bottom: "0",
  height: "20px",
  width: "95%"
};

const phantomStyle = {
  display: "block",
  width: "100%"
};

const linkStyle = {
  color: 'orange',
  textDecoration: 'none',
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
         <a style={linkStyle} href="https://github.com/atanamhaos/react-bootcamp-2019-haos_store/tree/master/bootcamp/week4/Shinto_Coin_App" target="_blank" rel="noopener noreferrer">Project Requirements</a>
      </div>
    </div>
  );
}

export default Footer;


/*
# Shamelessly Copied!

Puts link to project requirements at the bottom of the page.
## Source:

* [css - How to make a sticky footer in react? - Stack Overflow](https://stackoverflow.com/questions/40515142/how-to-make-a-sticky-footer-in-react)
* [Sticky Footer in React - CodeSandbox](https://codesandbox.io/s/l7wryrr64l)

*/
