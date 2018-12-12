const ClinicController = {
    getAll: () => api.get('clinics'),
    getOne: (id) => api.get(`clinics/${id}`)
}