import Icons from "../../assets/icons";

function SkillItems({ title, icons, items }) {
  const skillItem = icons.map((icon, index) => {
    const Icon = Icons[icon];
    return (
      <div
        className={`${index === icons.length - 1 ? undefined : "mb-4"} flex items-center gap-5`}
        key={index}
      >
        <Icon />
        <p>{items[index]}</p>
      </div>
    );
  });

  return (
    <div className="flex">
      <div className="mr-5 w-px bg-black"></div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="pl-5">{skillItem}</div>
      </div>
    </div>
  );
}

export default SkillItems;
