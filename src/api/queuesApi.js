import { apiGet, apiPatch, apiPost } from '../apiClient'

export function getNextPatientQueueNo() {
  return apiPost('/queues/patients/next-number', {})
}

export function getQueueEntries() {
  return apiGet('/queues')
}

export function getQueueCounters() {
  return apiGet('/queue-counters')
}

export function updatePhlebotomyQueueCounter(seq) {
  return apiPatch('/queue-counters/phlebotomy', { seq })
}
