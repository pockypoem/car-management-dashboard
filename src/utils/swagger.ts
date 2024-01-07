import swaggerJsdoc from 'swagger-jsdoc';


const definition = {
    openapi: "3.0.3",
    info: {
        title: 'REST API Docs',
        version: '1.0.0',
        contact: {
            name: "Jeremyas Cornelis",
            email: "jeremyas.cornelis@gmail.com",
            url: "https://linktr.ee/jeremyascornelis"
        }
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Car Management RESTful API Server"
        },
        {
            url: "https://binar-car-rental-api.fly.dev",
            description: "Car Management RESTful API Server Prod"
        },
    ],
    components: {
        securitySchemas: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
          bearerAuth: [],
        },
    ]
}

const options = {
    definition,
    apis: ['./src/routers/*.ts'],
}

export const swaggerSpec = swaggerJsdoc(options);
