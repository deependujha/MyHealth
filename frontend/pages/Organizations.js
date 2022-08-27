import React, { useState } from "react";
import Add_n_Join from "../components/orgz/Add_n_BanMember";
import Image_n_Box from "../components/orgz/Image_n_Box";

const Org = () => {
  const [clicked, setClicked] = useState("Add");
  return (
    <div className="text-center my-5">
      <h4 className="text-primary dancingText my-5" style={{ fontSize: "30px" }}>
        Manage Members
      </h4>
      <Add_n_Join clicked={clicked} setClicked={setClicked} />
      <Image_n_Box clicked={clicked} />
    </div>
  );
};

export default Org;
