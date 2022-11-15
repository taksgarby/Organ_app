const baseURL = 'http://localhost:9000/api/contributers/'

export const getContributers = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const contributerById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postContributers = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteContributers = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

