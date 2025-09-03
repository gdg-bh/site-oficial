/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                // Cores principais do Google Material Design
                'google-blue': '#4285f4',      // azul principal
                'google-gray': '#5f6368',      // cinza
                'google-orange': '#ea8600',    // laranja
                'google-yellow': '#fbbc04',    // amarelo
                'google-green': '#34a853',     // verde
                'google-red': '#ea4335',       // vermelho
                'google-pink': '#f28b82',      // rosa
                'google-gold': '#f9ab00',      // dourado
                
                // Cores de suporte
                'google-blue-light': '#8ab4f8',    // azul claro
                'google-green-light': '#81c995',  // verde claro
                'google-yellow-light': '#fde293', // amarelo claro
                
                // Cores das pílulas
                'pill-blue': '#2163CE',
                'pill-green': '#6AA84F',
                'pill-purple': '#BE60DC',
                'pill-red': '#FF5858',
                'pill-orange': '#FF9900',
                
                // Cores das pílulas com opacidade 50%
                'pill-blue-50': 'rgba(33, 99, 206, 0.5)',
                'pill-green-50': 'rgba(106, 168, 79, 0.5)',
                'pill-purple-50': 'rgba(190, 96, 220, 0.5)',
                'pill-red-50': 'rgba(255, 88, 88, 0.5)',
                'pill-orange-50': 'rgba(255, 153, 0, 0.5)',
            },
            
            // Gradientes personalizados
            backgroundImage: {
                'gradient-google': 'linear-gradient(135deg, #4285f4 0%, #34a853 50%, #fbbc04 100%)',
                'gradient-text': 'linear-gradient(90deg, #3B86F0 4.84%, #2FA3AB 52.43%, #26B978 100%)',
                'gradient-session-light': 'linear-gradient(90deg, rgba(235, 243, 252, 0.9) 0%, rgba(234, 247, 244, 0.9) 69.23%, rgba(233, 249, 239, 0.9) 97.12%)',
                'gradient-session': 'linear-gradient(90deg, rgba(59, 135, 238, 0.9) 0%, rgba(47, 161, 174, 0.9) 69.23%, rgba(34, 194, 97, 0.9) 97.12%)',
            },
            
            // Sombras personalizadas
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
        },
    },
    plugins: [],
};
