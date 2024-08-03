export const orderStatuses = {
  open: "open",
  inkitchen: "in_kitchen",
  complete: "complete",
};

export const itemStatuses = {
  notStarted: "not_started",
  inkitchen: "in_kitchen",
  complete: "complete",
};

export const statusTransitions = {
  not_started: "in_kitchen",
  in_kitchen: "complete",
  complete: "not_started",
};

export const itemStatusesUI = {
  not_started: "Not Started",
  in_kitchen: "In Kitchen",
  complete: "Complete",
};

export const colorStatusMap = {
  not_started: "transparent",
  in_kitchen: "#60D95E",
  complete: "#FFD700",
};
