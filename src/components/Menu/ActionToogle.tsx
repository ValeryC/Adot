import { ButtonHTMLAttributes, forwardRef, Ref } from "react";

const ActionToggle = forwardRef(
  (
    props: ButtonHTMLAttributes<HTMLButtonElement>,
    ref: Ref<HTMLButtonElement>
  ) => (
    <button {...props} type="button" className="action-toggle" ref={ref}>
      <span>&#8942;</span>
    </button>
  )
);

export default ActionToggle;
