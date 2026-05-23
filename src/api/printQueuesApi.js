import { apiGet, apiPost, apiPatch, apiDelete } from '../apiClient'

export const getUnprintedDoctorPdfQueue = () => apiGet('/docPdfQueue')

export const getPrintedDoctorPdfQueue = () => apiGet('/docPdfQueue/printed')

export const addDoctorPdfQueueEntry = (patientId, doctorName) =>
  apiPost('/docPdfQueue', { patientId, doctorName })

export const markDoctorPdfPrinted = (id) => apiPatch(`/docPdfQueue/${id}`, {})

export const deleteDoctorPdfQueueEntry = (id) => apiDelete(`/docPdfQueue/${id}`)

export const getUnprintedFormAQueue = () => apiGet('/formAPdfQueue')

export const getPrintedFormAQueue = () => apiGet('/formAPdfQueue/printed')

export const addFormAQueueEntry = (patientId) => apiPost('/formAPdfQueue', { patientId })

export const markFormAPrinted = (id) => apiPatch(`/formAPdfQueue/${id}`, {})

export const deleteFormAQueueEntry = (id) => apiDelete(`/formAPdfQueue/${id}`)
