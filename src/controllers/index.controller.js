const { response } = require('express')
const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'myPassword',
    database: 'testing',
    port: '5432'
})

const getUsers = async (req,res,next) => {
    const response = await pool.query('SELECT * FROM users')
    res.status(200).send(response.rows)
}

const getUsersById = async (req,res,next) => {
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id])
    res.status(200).json(response.rows)
}

const createUser = async (req,res,next) => {
    const { name, email} = req.body;
    const response = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2)',[name, email])
    console.log(response)
    res.status(200).json({
        message: 'User successfully added',
        body: {
            user: {name, email}
        }
    })
}

const deleteUser = async (req,res,next) => {
    const response = await pool.query('DELETE FROM users WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);
}

const updateUser = async (req,res,next) => {
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[req.params.name,req.params.email, req.params.id]);
    res.status(200).json('User updated');
}

module.exports = {
    createUser,
    getUsers,
    getUsersById,
    deleteUser,
    updateUser
}
