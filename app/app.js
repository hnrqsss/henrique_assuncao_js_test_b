window.onload = () => {
    
    const clinics = new Clinics()
    
    clinics.fetch()
        .then(res => {
            const clinicsView = new ClinicsView({ collection: clinics })
        })
} 

