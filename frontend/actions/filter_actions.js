export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const FRONT_FILTER = "FRONT_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const updateBounds = (bounds, value) => ({
  type: UPDATE_BOUNDS,
  bounds,
  value
});

export const frontFilter = bounds => ({
  type: FRONT_FILTER,
  bounds
});


export const clearFilter = () => ({
  type: CLEAR_FILTER
});
