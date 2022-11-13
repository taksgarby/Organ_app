const baseURL = 'http://localhost:9000/api/bodyparts/'

export const getOrgans = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const organById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postOrgans = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteOrgans = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

