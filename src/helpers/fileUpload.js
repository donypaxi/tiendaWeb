export const fileUpload = async (file) => {

    if (!file) throw new Error('No hay ningun archivo por subir')
    const cloudURL = 'https://api.cloudinary.com/v1_1/dudaafcd0/upload'

    const formData = new FormData()

    formData.append('upload_preset','tiendita')
    formData.append('file',file)
    try {
        const resp = await fetch(cloudURL,{
            method:'POST',
            body: formData
        })

        // console.log(resp)
        if(!resp.ok) throw new Error('no se pudo subir')
        const cloudResp = await resp.json()
        return cloudResp.secure_url

    } catch (error) {
        // console.log(error)
        throw new Error(error.message)
    }

}