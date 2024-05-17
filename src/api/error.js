const alertError = (error) => {
  if (error.name === 'TypeError') {
    alert(error.message);
  } else if (error.name === 'HttpError') {
    alert(error.status);
  }
};

export { alertError };
