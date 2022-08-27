import React, { useState } from "react";
import Add_n_Join from "../components/orgz/Add_n_BanMember";
import Orgz from "../components/orgz/Org";

const Org = () => {
  const [clicked, setClicked] = useState("Add");
  return (
    <div className="text-center my-5">
      <h4 className="text-primary dancingText" style={{ fontSize: "30px" }}>
        Manage Members
      </h4>
      <Add_n_Join clicked={clicked} setClicked={setClicked} />
      <Orgz clicked={clicked} />
    </div>
  );
};

export default Org;
