export const userIncludeField = {
    id: true,
    name: true,
    email: true,
    createdAt: true,
    updatedAt: true,
    role: true
}

export const allowedOrigins = [
    'http://localhost:5173',
    "https://front-end-psi-tan.vercel.app/",
    "http://localhost:3000",
    // Add more allowed origins as needed
]

export const corsOptions = {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Allow credentials
};