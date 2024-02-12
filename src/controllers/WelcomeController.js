export const welcome = async (req, res) => {
  return res.json({
    data: "Welcome",
  });
};

export const welcome1 = async (req, res) => {
  return res.status(200).json({
    data: "Welcome1",
  });
};

export const welcome2 = async (req, res) => {
  return res.status(200).json({
    data: "Welcome1",
  });
};
