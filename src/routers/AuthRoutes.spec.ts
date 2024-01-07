import { describe, it, expect } from 'vitest'
import App from '../server'
import supertest from 'supertest'


describe('test auth API:/api/v1/auth', () => {
    const app = new App().app

    it('it should success on register', async () => {
        const response = await supertest(app).post('/api/v1/auth/register')
            .send({
                email: 'fawwazi12345@gmail.com',
                password: 'fawwazi123'
            })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('message', 'Registrasi Sukses!');
        console.log(response.body)
    })

    it('it should success on login', async () => {
        const response = await supertest(app).post('/api/v1/auth/login')
            .send({
                email: 'fawwazi12345@gmail.com',
                password: 'fawwazi123'
            })
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({
            token: expect.any(String)
        })
    })

    
})
