const slots = {
  prevactive: {
    scale: 0.63,
    left: 70,
    opacity: 0,
    active: false,
  },
  active: {
    scale: 1,
    left: 0,
    opacity: 1,
    active: true,
  },
  next: {
    scale: 0.63,
    left: 420,
    opacity: 0.8,
    active: false,
  },
  last: {
    scale: 0.35,
    left: 705,
    opacity: 0.5,
    active: false,
  },
  nextlast: {
    scale: 0.25,
    left: 715,
    opacity: 0,
    active: false,
  },
  hidden: {
    scale: 0,
    left: 0,
    opacity: 0,
    active: false,
  },
};

export default slots;
