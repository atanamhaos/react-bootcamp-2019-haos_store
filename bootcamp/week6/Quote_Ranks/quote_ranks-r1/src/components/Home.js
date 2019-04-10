import React from "react";
import { connect } from "react-redux";


function Home() {
  return (
    <div className="homepage">
      <p>We have quotes by:</p>
    </div>
  );
}

const mapStateToProps = state => {

    return ({});
};

export default connect(mapStateToProps)(Home);
