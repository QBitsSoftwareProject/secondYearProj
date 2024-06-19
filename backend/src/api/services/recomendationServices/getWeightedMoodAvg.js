const moodsModel = require("../../models/moodAnalysisModel/moodInputmodels");
const weights = {
  happy: 4,
  neutral: 2.5,
  sad: 1,
  worried: 2,
  lovely: 3.5,
  boring: 1.5,
  overWhelmed: 1.5,
  angry: 1,
};

const moodCount = {
  happy: 0,
  neutral: 0,
  sad: 0,
  worried: 0,
  lovely: 0,
  boring: 0,
  overWhelmed: 0,
  angry: 0,
  total: 0,
};

exports.getWeightedMoodAvg = async (userId) => {
  try {
    //find all inputs moods relevent to the user
    const allMoods = await moodsModel.find({
      userId: userId,
    });

    //set the moods count
    allMoods.map((item) => {
      checkMood(item.moodText);

      moodCount.total += 1;
    });

    return averageTotalWeight();
  } catch (error) {
    console.log(error);
  }
};

//mood category checking and count increment
const checkMood = (category) => {
  switch (category.toLowerCase()) {
    case "happy":
      moodCount.happy += 1;
      break;
    case "neutral":
      moodCount.neutral += 1;
      break;
    case "sad":
      moodCount.sad += 1;
      break;
    case "worried":
      moodCount.worried += 1;
      break;
    case "lovely":
      moodCount.lovely += 1;
      break;
    case "boring":
      moodCount.boring += 1;
      break;
    case "overwhelmed":
      moodCount.overWhelmed += 1;
      break;
    case "angry":
      moodCount.angry += 1;
      break;

    default:
      console.log("error is occured");
      break;
  }
};

//calculate total weights
const averageTotalWeight = () => {
  let total =
    weights.happy * moodCount.happy +
    weights.neutral * moodCount.neutral +
    weights.sad * moodCount.sad +
    weights.worried * moodCount.worried +
    weights.lovely * moodCount.lovely +
    weights.boring * moodCount.boring +
    weights.angry * moodCount.angry;

  return total / moodCount.total;
};
