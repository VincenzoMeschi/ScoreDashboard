/**
 * @desc Get Colors depending on scores
 * @param {Number} socre
 * @returns String
 */
export const getCultureColor = (socre) => {
  if (socre >= 90) {
    return '#7be500'
  } else if (socre >= 70 && socre < 90) {
    return '#afe793'
  } else if (socre >= 50 && socre < 70) {
    return '#ffff00'
  } else if (socre >= 25 && socre < 50) {
    return '#f3801b'
  } else {
    return '#ff1616'
  }
}

export const getProgressColor = (percentage) => {
  if (percentage >= 90) {
    return '#7be500'
  } else if (percentage >= 70 && percentage < 90) {
    return '#afe793'
  } else if (percentage >= 50 && percentage < 70) {
    return '#ffff00'
  } else if (percentage >= 25 && percentage < 50) {
    return '#f3801b'
  } else {
    return '#ff1616'
  }
}

/**
 * @desc Calculate Required Scores depending on employee
 * @param {Array[employees]} data
 * @returns {coltureScore,riskScore,behaviorScore,knowledgeScore,engagementScore}
 */

export const getScoresFromEmployee = (data) => {
  const coltureScore = Math.round(
    data.reduce((acc, curr) => {
      let { engagementScore, behaviorScore, knowledgeScore } = curr.scores
      let score = (engagementScore + behaviorScore + knowledgeScore) / 3
      return acc + score
    }, 0) / data.length
  )

  const riskScore = Math.round(
    data.reduce((acc, curr) => {
      let { riskScore } = curr.scores
      return acc + riskScore
    }, 0) / data.length
  )

  const behaviorScore = Math.round(
    data.reduce((acc, curr) => {
      let { behaviorScore } = curr.scores
      return acc + behaviorScore
    }, 0) / data.length
  )

  const knowledgeScore = Math.round(
    data.reduce((acc, curr) => {
      let { knowledgeScore } = curr.scores
      return acc + knowledgeScore
    }, 0) / data.length
  )

  const engagementScore = Math.round(
    data.reduce((acc, curr) => {
      let { engagementScore } = curr.scores
      return acc + engagementScore
    }, 0) / data.length
  )

  return {
    coltureScore,
    riskScore,
    behaviorScore,
    knowledgeScore,
    engagementScore,
  }
}
