import {gql} from "@apollo/client";

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`

export const ADD_USER = gql `
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`

export const SAVE_PROPERTY = gql `
mutation saveProperty($propertyData: String!){
    saveProperty(propertyData: $propertyData) {
        _id
        username
        email
        savedProperties {
            _id
            address
            bathrooms
            bedrooms
            city
            image
            price
            squareFeet
            state
            zipcode
        }
    }
}
`

export const REMOVE_PROPERTY = gql `
mutation removeProperty($propertyId: String!){
    removeProperty(propertyId: $propertyId) {
        _id
        username
        email
        savedProperties {
            _id
            address
            bathrooms
            bedrooms
            city
            image
            price
            squareFeet
            state
            zipcode
        }
    }
}
`