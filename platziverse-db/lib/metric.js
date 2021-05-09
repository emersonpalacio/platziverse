'use strict'

module.exports = function setupMetric (MetricModel, AgentModel) {
  async function findByAgentUuid (uuid) {
    return MetricModel.findAll({
      attributes: ['type'],
      group: ['type'],
      include: [{ // join
        attributes: [],
        model: AgentModel,
        where: {
          uuid
        }
      }],
      raw: true // me retorna solo json
    })
  }

  async function findByTypeAgentUuid (type, uuid) {
    return MetricModel.findAll({
      // atributos que me interesa tener
      attributes: ['id', 'type', 'value', 'createdAt'],
      where: {
        type
      },
      limit: 20, // retorna solo 20 datos
      order: [['createdAt', 'DESC']],
      include: [{
        attributes: [],
        model: AgentModel,
        where: {
          uuid
        }
      }],
      raw: true
    })
  }

  async function create (uuid, metric) {
    const agent = await AgentModel.findOne({
      where: { uuid }
    })

    if (agent) {
      Object.assign(metric, { agentId: agent.id })
      const result = await MetricModel.create(metric)
      return result.toJSON()
    }
  }

  return {
    create,
    findByAgentUuid,
    findByTypeAgentUuid
  }
}
