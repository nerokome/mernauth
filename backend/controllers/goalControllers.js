const asyncHandler = require('express-async-handler');
const User = require ('../model/userModel')
const Goal = require('../model/goalModel')


const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find(
    {user: req.user.id}
  )
  res.status(200).json(goals);
})


const setGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text,
    user: req.user.id,
  });

  res.status(201).json(goal);
});



const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }
  const user = await User.findById(req.user.id)

if(!user) {
  res.status(401)
  throw new Error ('User not found')
}

if(goal.user.toString() !== user.id) {
  res.status(401)
  throw new Error('user not authorized')
}

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(201).json(updatedGoal);
});


const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }
  const user = await User.findById(req.user.id)

if(!user) {
  res.status(401)
  throw new Error ('User not found')
}

if(goal.user.toString() !== user.id) {
  res.status(401)
  throw new Error('user not authorized')
}

  await goal.deleteOne(); // ✅ Fix: delete using Mongoose document method

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
