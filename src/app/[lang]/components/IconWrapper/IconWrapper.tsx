import React from "react";

interface Props {
  wrapperClassName?: string;
  Icon: React.FC<{ width: string; height: string }>;
}

export function IconWrapper({ Icon, wrapperClassName }: Props) {
  if (!wrapperClassName) {
    return <Icon width={"1em"} height={"1em"} />;
  }

  return (
    <div className={wrapperClassName}>
      <Icon width={"1em"} height={"1em"} />
    </div>
  );
}
