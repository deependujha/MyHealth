import React, { useState } from "react";
import Add_n_Ban from "../components/orgz/Add_n_BanMember";
import Image_n_Box from "../components/orgz/Image_n_Box";

const Org = ({ myOrg, myContract, newUsrAddr, setNewUsrAddr }) => {
  const [clicked, setClicked] = useState("Add");
  return (
    <div className="text-center my-5">
      <h4
        className="text-primary dancingText mt-5 mb-3"
        style={{ fontSize: "30px" }}
      >
        Manage Members - {myOrg} Organization
      </h4>
      <Add_n_Ban clicked={clicked} setClicked={setClicked} />
      <Image_n_Box
        clicked={clicked}
        myContract={myContract}
        newUsrAddr={newUsrAddr}
        setNewUsrAddr={setNewUsrAddr}
      />
    </div>
  );
};

export default Org;
