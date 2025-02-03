// import React from "react";

interface Props{
    name: string,
    onClick: (e: string) => void,
    isSelected: boolean
}

const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const buttonStyle = isSelected
    ? "text-white border-purple-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button onClick={() => onClick(name)} className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyle}`}>
      {name}
    </button>
  );
};

export default ProjectTag;
