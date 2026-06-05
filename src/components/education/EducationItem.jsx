import Icons from "../../assets/icons";

function EducationItem({ school, achievement, address, date, learnings, imagesrc, delay = 0 }) {
  const learningTags = learnings.map((l, i) => (
    <span
      key={i}
      className="skill-pill border border-black/20 px-2 py-0.5 text-[0.72rem] uppercase tracking-wide"
    >
      {l}
    </span>
  ));

  return (
    <div
      className="reveal relative flex gap-6 sm:gap-10"
      style={{ transitionDelay: `${delay}s` }}
    >
      <img
        className="h-[44px] w-[44px] shrink-0 rounded-full border-2 border-black object-cover"
        src={imagesrc}
        alt={school}
      />
      <div className="w-full">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold leading-snug">{school}</h3>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9rem] opacity-60">
              {achievement && <span>{achievement}</span>}
              {achievement && <span>·</span>}
              <div className="flex items-center gap-1.5">
                <Icons.location w="10px" />
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[0.85rem] opacity-50">
            <Icons.calendar w="13px" />
            <span>{date}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{learningTags}</div>
      </div>
    </div>
  );
}

export default EducationItem;
