window.onload = () => {
    
    const clinics = new Clinics()
    
    clinics.fetch()
        .then(res => console.log('finalizado',res))
} 

