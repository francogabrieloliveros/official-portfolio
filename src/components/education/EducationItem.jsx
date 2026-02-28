import Icons from "../../assets/icons";

function EducationItem({
  school,
  achievement,
  address,
  date,
  learnings,
  imagesrc,
}) {
  const learningTags = learnings.map((learning, index) => (
    <div className="bg-black px-2 text-[0.8rem] text-white" key={index}>
      {learning}
    </div>
  ));

  return (
    <div className="relative flex gap-10">
      <img
        className="h-[44px] w-[44px] rounded-[50%] border-3 border-black"
        src={imagesrc}
      />

      <div className="w-full">
        <div className="flex flex-wrap items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{school}</h3>
            <div className="flex flex-wrap">
              {achievement ? <p>{achievement} |&nbsp;</p> : undefined}
              <div className="flex items-center gap-2">
                <Icons.location w="11px" />
                <p>{address}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icons.calendar w="15px" />
            <p>{date}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">{learningTags}</div>
      </div>
    </div>
  );
}

export default EducationItem;
