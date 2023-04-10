import React from "react";
import SectionWrapper from "../hoc/SectionWrapper"

function HooksPractise() {
  let count = 0;
  return <div>{count}</div>;
}

export default SectionWrapper(HooksPractise, "hooks_practise");
