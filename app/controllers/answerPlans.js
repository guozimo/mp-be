
exports.getAnswerPlans = async (ctx, next) => {
  ctx.body = {
    dailyPractice: true,
    chapterPractice: true,
    simulationExam: true,
    randomPractice: true,
    onlyWrongPractice: true,
    highWrongPractice: true,
    answerPlanId: 12345
  }
}
